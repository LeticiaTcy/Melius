<<<<<<< HEAD
<?php
session_start();
require '../vendor/autoload.php';
require '../database/config.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
    exit;
}

// Limita tentativas de verificação por IP
if (!isset($_SESSION['verify_attempts'])) {
    $_SESSION['verify_attempts'] = 0;
}
$_SESSION['verify_attempts']++;
if ($_SESSION['verify_attempts'] > 10) {
    http_response_code(429);
    echo json_encode(['status' => 'error', 'message' => 'Muitas tentativas. Tente novamente mais tarde.']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
$token = strtoupper(trim($data['code'] ?? ''));

if (!preg_match('/^[A-Z]{8}$/', $token)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Código de verificação inválido.']);
    exit;
}

$stmt = $pdo->prepare("SELECT id, email FROM users WHERE verify_token = ? AND verified = 0");
$stmt->execute([$token]);
$user = $stmt->fetch();

if (!$user || empty($user['email'])) {
    echo json_encode(['status' => 'error', 'message' => 'Código inválido ou já utilizado.']);
    exit;
}

$update = $pdo->prepare("UPDATE users SET verified = 1, verify_token = NULL WHERE id = ?");
$update->execute([$user['id']]);

$_SESSION['verify_attempts'] = 0;

echo json_encode(['status' => 'verified']);
exit;
=======
<?php
session_start();
require '../vendor/autoload.php';
require '../database/config.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
    exit;
}

// Limita tentativas de verificação por IP
if (!isset($_SESSION['verify_attempts'])) {
    $_SESSION['verify_attempts'] = 0;
}
$_SESSION['verify_attempts']++;
if ($_SESSION['verify_attempts'] > 10) {
    http_response_code(429);
    echo json_encode(['status' => 'error', 'message' => 'Muitas tentativas. Tente novamente mais tarde.']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
$token = strtoupper(trim($data['code'] ?? ''));

if (!preg_match('/^[A-Z]{8}$/', $token)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Código de verificação inválido.']);
    exit;
}

$stmt = $pdo->prepare("SELECT id, email FROM users WHERE verify_token = ? AND verified = 0");
$stmt->execute([$token]);
$user = $stmt->fetch();

if (!$user || empty($user['email'])) {
    echo json_encode(['status' => 'error', 'message' => 'Código inválido ou já utilizado.']);
    exit;
}

$update = $pdo->prepare("UPDATE users SET verified = 1, verify_token = NULL WHERE id = ?");
$update->execute([$user['id']]);

$_SESSION['verify_attempts'] = 0;

echo json_encode(['status' => 'verified']);
exit;
>>>>>>> 077125945804a39eb25db9e7e35c7106b3fe620b
