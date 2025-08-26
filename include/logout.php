<?php
session_start();
require '../database/config.php';

if (isset($_SESSION['id'])) {
    // Update the latest session's logout_time for this user
    $stmt = $pdo->prepare("UPDATE user_sessions SET logout_time = NOW() WHERE user_id = ? AND logout_time IS NULL ORDER BY login_time DESC LIMIT 1");
    $stmt->execute([$_SESSION['id']]);
}

session_unset();
session_destroy();
header("Location: ../public/login.php");
exit;
?>
