<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start();
require '../vendor/autoload.php';
require '../database/config.php';
require 'send_verification_email.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
    exit;
}

$name = trim($_POST['name'] ?? '');
$email = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$username = trim($_POST['username'] ?? '');
$password = $_POST['password'] ?? '';

if (!$name || !$email || !$username || !$password) {
    echo json_encode(['status' => 'error', 'message' => 'All fields are required']);
    exit;
}

$stmt = $pdo->prepare("SELECT id FROM users WHERE email = ? OR username = ?");
$stmt->execute([$email, $username]);
if ($stmt->fetch()) {
    echo json_encode(['status' => 'error', 'message' => 'Email or username already exists']);
    exit;
}

// Determine role
$isAdmin = (
    $username === 'Letícia' &&
    $email === 'leticiafesteves@gmail.com' &&
    $name === 'Letícia Furlan' &&
    $password === 'Admin123145@'
);
$role = $isAdmin ? 'admin' : 'user';

$token = bin2hex(random_bytes(6)); // shorter token for user input
$hashedPassword = password_hash($password, PASSWORD_BCRYPT);

$stmt = $pdo->prepare("INSERT INTO users (name, email, username, password, verify_token, verified, role) VALUES (?, ?, ?, ?, ?, 0, ?)");
$stmt->execute([$name, $email, $username, $hashedPassword, $token, $role]);

if (!sendVerificationEmail($email, $token)) {
    echo json_encode(['status' => 'error', 'message' => 'Failed to send verification email']);
    exit;
}

echo json_encode(['status' => 'success', 'message' => 'Verification email sent']);
exit;
