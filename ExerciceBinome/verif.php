<?php

$host = 'localhost';
$dbname = 'tpbinome';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $allUser = "SELECT count(*) FROM account WHERE email = (:email)";
    $users = $pdo->prepare($allUser);
    $users->bindParam(':email', $_POST['email']);
    $users->execute();
    $number_user = $users->fetchColumn(); 

    if($number_user >= 1){
        echo 'Compte déjà existant';
    } else {
        $sql = "INSERT INTO account (email) VALUES (:email)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':email', $_POST['email']);
        $stmt->execute();
        echo 'Bienvenue';
    }
} catch(PDOException $e) {
    echo "Erreur de connexion à la base de données: " . $e->getMessage();
}
?>




