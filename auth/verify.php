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

$data = json_decode(file_get_contents('php://input'), true);
$token = trim($data['code'] ?? '');

if (!$token) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Verification code missing']);
    exit;
}

$stmt = $pdo->prepare("SELECT id FROM users WHERE verify_token = ? AND verified = 0");
$stmt->execute([$token]);
$user = $stmt->fetch();

if (!$user) {
    echo json_encode(['status' => 'error', 'message' => 'Invalid or already used verification code']);
    exit;
}

$update = $pdo->prepare("UPDATE users SET verified = 1, verify_token = NULL WHERE id = ?");
$update->execute([$user['id']]);

echo json_encode(['status' => 'verified']);
exit;
