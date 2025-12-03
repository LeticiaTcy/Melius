<?php
require '../vendor/autoload.php';
require '../database/config.php';
require 'send_verification_email.php';

$email = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);

if (!$email) {
    echo "Por favor, insira um email válido.";
    exit;
}

$stmt = $pdo->prepare("SELECT verify_token FROM users WHERE email = ? AND verified = 0");
$stmt->execute([$email]);
$row = $stmt->fetch();

if ($row && $row['verify_token']) {
    $token = $row['verify_token'];
    if (sendVerificationEmail($email, $token)) {
        echo "Verification email resent. Check your inbox.";
    } else {
        echo "Failed to send verification email.";
    }
} else {
    echo "No pending verification found for this email.";
}
