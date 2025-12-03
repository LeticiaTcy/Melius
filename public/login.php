<<<<<<< HEAD
<?php session_start(); ?>

<html>
<head><title>Página de Login</title></head>
<body>
<a href="../index.php">Voltar</a> <br />

<?php
require '../database/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user = trim($_POST['email'] ?? '');
    $pass = $_POST['password'] ?? '';

    if ($user === "" || $pass === "") {
        echo "Email ou senha estão vazios, por favor, preencha-os corretamente.<br/><a href='login.php'>Go back</a>";
        exit;
    }

    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$user]);
    $row = $stmt->fetch();

    if ($row && password_verify($pass, $row['password'])) {
        if ($row['verified'] == 1) {
            $_SESSION['valid'] = $row['email'];
            $_SESSION['name'] = $row['name'];
            $_SESSION['id'] = $row['id'];
            $_SESSION['role'] = $row['role'];
            // Grava o horário do login
            $loginStmt = $pdo->prepare("INSERT INTO user_sessions (user_id, login_time) VALUES (?, NOW())");
            $loginStmt->execute([$row['id']]);
            header("Location: ../index.php");
            exit;
        } else {
            echo "Por favor, verifique o seu email antes de logar.";
        }
    } else {
        echo "Email ou senha inválidos.<br/><a href='login.php'>Voltar</a>";
    }
} else {
?>
    <h2>Cadastre-se!</h2>
    <form method="POST" action="">
        <label>Email:</label><br>
        <input type="text" name="email"><br>
        <label>Senha:</label><br>
        <input type="password" name="password"><br><br>
        <input type="submit" name="submit" value="Entrar">
    </form>
<?php } ?>

</body>
</html>
=======
<?php session_start(); ?>

<html>
<head><title>Página de Login</title></head>
<body>
<a href="../index.php">Voltar</a> <br />

<?php
require '../database/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user = trim($_POST['email'] ?? '');
    $pass = $_POST['password'] ?? '';

    if ($user === "" || $pass === "") {
        echo "Email ou senha estão vazios, por favor, preencha-os corretamente.<br/><a href='login.php'>Go back</a>";
        exit;
    }

    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$user]);
    $row = $stmt->fetch();

    if ($row && password_verify($pass, $row['password'])) {
        if ($row['verified'] == 1) {
            $_SESSION['valid'] = $row['email'];
            $_SESSION['name'] = $row['name'];
            $_SESSION['id'] = $row['id'];
            $_SESSION['role'] = $row['role'];
            // Grava o horário do login
            $loginStmt = $pdo->prepare("INSERT INTO user_sessions (user_id, login_time) VALUES (?, NOW())");
            $loginStmt->execute([$row['id']]);
            header("Location: ../index.php");
            exit;
        } else {
            echo "Por favor, verifique o seu email antes de logar.";
        }
    } else {
        echo "Email ou senha inválidos.<br/><a href='login.php'>Voltar</a>";
    }
} else {
?>
    <h2>Cadastre-se!</h2>
    <form method="POST" action="">
        <label>Email:</label><br>
        <input type="text" name="email"><br>
        <label>Senha:</label><br>
        <input type="password" name="password"><br><br>
        <input type="submit" name="submit" value="Entrar">
    </form>
<?php } ?>

</body>
</html>
>>>>>>> 077125945804a39eb25db9e7e35c7106b3fe620b
