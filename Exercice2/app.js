const btn = document.querySelector('button');
let username = document.getElementById('username');
let password = document.getElementById('password');
btn.addEventListener('click', function(){
    if(username.value == 'Kamyar' && password.value == 'toi'){
        alert('Tu es connecté !')
    }
    else{
        alert('Tes idendifiants ne sont pas bons cheh')
    }
})