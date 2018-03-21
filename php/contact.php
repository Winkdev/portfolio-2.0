<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$error = "";
if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
$email)){
  $error = "* E-mail address invalid.";
}
else{
  $error = "";
}

if ($error == ""){
  $to = 'rami.alayan@nettatooist.com';
  $email_subject = "E-Mail from NetTatooist";
  $email_body = "Name: $name\nE-Mail: $email\nMessage: $message";
  mail($to,$email_subject,$email_body);
}
echo $error;
?>
