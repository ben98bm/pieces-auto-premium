<?php
if(isset($_POST['email'])) {

  // Entrez votre adresse email ici
  $to = "thiaw.mamadou8385@gmail.com";

  // Entrez les données du formulaire
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Construction de l'email
  $subject = "Nouveau message de $name";
  $body = "Nom: $name\nEmail: $email\n\nMessage:\n$message";

  // Envoi de l'email
  $headers = "From: $email\n";
  $headers .= "Reply-To: $email\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\n";

  mail($to, $subject, $body, $headers);

  echo "success";
}
?>