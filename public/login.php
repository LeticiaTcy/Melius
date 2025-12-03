<?php session_start(); ?>

<html>
<head><title>Página de Login</title></head>
<link rel="stylesheet" href="../assets/css/loginMellius.css">
<body>

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
<div class="container">
    <!--Icone SVG mellius-->
       <div class="icon-container-align">
        <div class="icon-container">
            <svg class="brain-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
            <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
            <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/>
            <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/>
            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/>
            <path d="M3.477 10.896a4 4 0 0 1 .585-.396"/>
            <path d="M19.938 10.5a4 4 0 0 1 .585.396"/>
            <path d="M6 18a4 4 0 0 1-1.967-.516"/>
            <path d="M19.967 17.484A4 4 0 0 1 18 18"/>
        </svg>
    </div>
   </div>

<!--Parte Login-->
    <h2>Bem-vindo de volta!</h2>
    <form id="registerForm" method="POST" action="">
        <label>Email:</label><br>
        <input type="text" name="email"><br>
        <label>Senha:</label><br>
        <input type="password" name="password"><br><br>
        <input type="submit" name="submit" value="Entrar">
<!--Botão de Cadastro-->
<p>ainda não tem uma conta?</p><a href="register.php">Cadastre-se</a>
    </form>
<?php } ?>

<script src="../assets/js/loginMellius.js"></script>
</body>
</html>
