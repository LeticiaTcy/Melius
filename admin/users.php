<?php
session_start();
require '../database/config.php';

if (!isset($_SESSION['role']) || $_SESSION['role'] !== 'admin') {
    echo "Access denied.";
    exit;
}

// Handle delete
if (isset($_GET['delete'])) {
    $delId = intval($_GET['delete']);
    $stmt = $pdo->prepare("DELETE FROM users WHERE id = ?");
    $stmt->execute([$delId]);
    header("Location: users.php");
    exit;
}

// Handle update
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['edit_id'])) {
    $editId = intval($_POST['edit_id']);
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $username = trim($_POST['username']);
    $stmt = $pdo->prepare("UPDATE users SET name = ?, email = ?, username = ? WHERE id = ?");
    $stmt->execute([$name, $email, $username, $editId]);
    header("Location: users.php");
    exit;
}

// Fetch users
$stmt = $pdo->query("SELECT * FROM users");
$users = $stmt->fetchAll();

// Fetch sessions
$sessionsStmt = $pdo->query("SELECT s.*, u.username FROM user_sessions s JOIN users u ON s.user_id = u.id ORDER BY s.login_time DESC");
$sessions = $sessionsStmt->fetchAll();
?>
<!DOCTYPE html>
<html>
<head>
    <title>Admin - Users</title>
</head>
<body>
<h2>All Users</h2>
<table border="1">
    <tr>
        <th>ID</th><th>Name</th><th>Email</th><th>Username</th><th>Role</th><th>Actions</th>
    </tr>
    <?php foreach ($users as $user): ?>
    <tr>
        <form method="POST" action="users.php">
        <td><?= $user['id'] ?></td>
        <td><input type="text" name="name" value="<?= htmlspecialchars($user['name']) ?>"></td>
        <td><input type="email" name="email" value="<?= htmlspecialchars($user['email']) ?>"></td>
        <td><input type="text" name="username" value="<?= htmlspecialchars($user['username']) ?>"></td>
        <td><?= htmlspecialchars($user['role']) ?></td>
        <td>
            <input type="hidden" name="edit_id" value="<?= $user['id'] ?>">
            <input type="submit" value="Update">
            <a href="users.php?delete=<?= $user['id'] ?>" onclick="return confirm('Delete user?')">Delete</a>
        </td>
        </form>
    </tr>
    <?php endforeach; ?>
</table>

<h2>User Sessions</h2>
<table border="1">
    <tr>
        <th>Session ID</th><th>Username</th><th>Login Time</th><th>Logout Time</th>
    </tr>
    <?php foreach ($sessions as $session): ?>
    <tr>
        <td><?= $session['id'] ?></td>
        <td><?= htmlspecialchars($session['username']) ?></td>
        <td><?= $session['login_time'] ?></td>
        <td><?= $session['logout_time'] ?></td>
    </tr>
    <?php endforeach; ?>
</table>
</body>
</html>
