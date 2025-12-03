<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f24186366f458676c6652a067842fc4cfa3ebaea
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
<<<<<<< HEAD
=======
=======
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
>>>>>>> 077125945804a39eb25db9e7e35c7106b3fe620b
>>>>>>> f24186366f458676c6652a067842fc4cfa3ebaea
