<?php session_start(); ?>
<html>
<head><title>Login</title></head>
<body>
<a href="../index.php">Home</a> <br />

<?php
require '../database/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user = trim($_POST['username'] ?? '');
    $pass = $_POST['password'] ?? '';

    if ($user === "" || $pass === "") {
        echo "Username or password is empty.<br/><a href='login.php'>Go back</a>";
        exit;
    }

    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->execute([$user]);
    $row = $stmt->fetch();

    if ($row && password_verify($pass, $row['password'])) {
        if ($row['verified'] == 1) {
            $_SESSION['valid'] = $row['username'];
            $_SESSION['name'] = $row['name'];
            $_SESSION['id'] = $row['id'];
            $_SESSION['role'] = $row['role'];
            // Record login time
            $loginStmt = $pdo->prepare("INSERT INTO user_sessions (user_id, login_time) VALUES (?, NOW())");
            $loginStmt->execute([$row['id']]);
            header("Location: ../index.php");
            exit;
        } else {
            echo "Please verify your email before logging in.";
        }
    } else {
        echo "Invalid username or password.<br/><a href='login.php'>Go back</a>";
    }
} else {
?>
    <h2>Login</h2>
    <form method="POST" action="">
        <label>Username:</label><br>
        <input type="text" name="username"><br>
        <label>Password:</label><br>
        <input type="password" name="password"><br><br>
        <input type="submit" name="submit" value="Login">
    </form>
<?php } ?>
</body>
</html>
