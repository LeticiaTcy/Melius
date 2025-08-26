<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';

// You can keep these somewhere secure, or use environment variables
$smtpUser = 'leticiafesteves@gmail.com';
$smtpPass = 'dbasetzojehtqtwe';

function getSmtpSettingsByEmail($email) {
    $domain = strtolower(substr(strrchr($email, "@"), 1));
    switch ($domain) {
        case 'gmail.com':
            return ['smtp.gmail.com', 587, PHPMailer::ENCRYPTION_STARTTLS];
        case 'hotmail.com':
        case 'outlook.com':
        case 'live.com':
            return ['smtp.office365.com', 587, PHPMailer::ENCRYPTION_STARTTLS];
        default:
            return ['smtp.yourdomain.com', 587, PHPMailer::ENCRYPTION_STARTTLS];
    }
}

function sendVerificationEmail($email, $token) {
    global $smtpUser, $smtpPass;

    list($smtpHost, $smtpPort, $smtpEncryption) = getSmtpSettingsByEmail($email);

    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host       = $smtpHost;
        $mail->SMTPAuth   = true;
        $mail->Username   = $smtpUser;
        $mail->Password   = $smtpPass;
        $mail->SMTPSecure = $smtpEncryption;
        $mail->Port       = $smtpPort;

        $mail->setFrom($smtpUser, 'Melius');
        $mail->addAddress($email);
        $mail->isHTML(true);
        $mail->Subject = 'Email Verification';
        $mail->Body    = "Your verification code is: <b>{$token}</b>";
        $mail->AltBody = "Your verification code is: {$token}";

        $mail->send();
        return true;
    } catch (Exception $e) {
        error_log('Mailer Error: ' . $mail->ErrorInfo);
        return false;
    }
}
