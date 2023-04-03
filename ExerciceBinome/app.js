const btn = document.getElementById('btn');
let div = document.getElementById('displayMsg');
btn.addEventListener('click', function(){
    event.preventDefault();
    let email = document.getElementById('email').value;
    const formAccount = new FormData();
    formAccount.append('email', email);
    fetch('verif.php', {
        method: 'POST',
        body: formAccount
    }).then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de l\envoi de la requête');
      }
      return response.text();
    })
    .then(data => {
      // La requête a été envoyée avec succès
      div.textContent = data;
    })
    .catch(error => {
      // Il y a eu une erreur lors de l'envoi de la requête
      div.textContent = error;
    });
})