<!-- save_message.php -->
<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $file = 'wiadomosci.txt';
  $content = "Imię: $name\nEmail: $email\nWiadomość: $message\n\n";

  file_put_contents($file, $content, FILE_APPEND);
?>