<?php

$userName = $_POST['userName'];
$userEmail = $_POST['userEmail'];
$userPhone = $_POST['userPhone'];

//Load Composer's autoloader
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.diolang.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'kefaw27624@diolang.com';                     //SMTP username
    $mail->Password   = '';                               //SMTP password
    $mail->SMTPSecure = 'ssl';            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('kefaw27624@diolang.com', 'abobus');
    $mail->addAddress('rocehe8349@plexfirm.com', 'Joe User');     //Add a recipient

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body    = "Имя пользователя: ${userName}, его телефон ${userPhone}, его почта ${userEmail}";

    if ($mail->send()) {
        echo "ok";
    } else {
        echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}"
    }
    
    header('Location: thanks.html');
} catch (Exception $e) {
    echo "Письмо не отправлено, код ошибки: {$mail->ErrorInfo}";
}


