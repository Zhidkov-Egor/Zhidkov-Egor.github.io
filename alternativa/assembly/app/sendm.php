<?php
// Файлы phpmailer
require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';
// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$number = $_POST['phone'];
$message = $_POST['message'];
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // Настройки вашей почты
    $mail->Host       = 'ssl://smtp.mail.ru'; // SMTP сервера GMAIL
    $mail->Username   = 'Alternativaequipmentsite@mail.ru'; // Логин на почте
    $mail->Password   = 'Alternativgold24'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('Alternativaequipmentsite@mail.ru', 'С сайта Alternativa'); // Адрес самой почты и имя отправителя
    // Получатель письма
    $mail->addAddress('Alternativaequipmentsite@gmail.com');
        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);

        $mail->Subject = "Заявка с сайта Alternativa";
        $mail->Body    = "Имя: ".$_POST['name']. "<br>Телефон: ".$_POST['phone']."<br>Сообщение: ".$_POST['message'];

// Проверяем отравленность сообщения

if ($mail->send()) {
    echo "$msg";
} else {
echo "Message has not been sent. Your email settings are incorrect";
}
} catch (Exception $e) {
    echo "Message has not been sent. The reason for the error: {$mail->ErrorInfo}";
}