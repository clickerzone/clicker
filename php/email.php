<?php 
$To = 'oko1407@gmail.com'; 
$Subject = $_POST['Subject'];
$Name = $_POST['name'];
$Email = $_POST['email'];
$Message = $_POST['message']; 
$Headers = "From: $Name<$Email> \r\n" . 
"Reply-To: $Email \r\n" . 
"Content-type: text/html; charset=UTF-8 \r\n"; 
  
mail($To, $Subject, $Message, $Headers); 
?>