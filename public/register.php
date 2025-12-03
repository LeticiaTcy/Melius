<<<<<<< HEAD
<?php
session_start();
$message = $_GET['message'] ?? '';
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Página de Cadastro</title>
    <style>
      .popup, .overlay { display: none; }
      .popup { position: fixed; top: 20%; left: 50%; transform: translate(-50%, 0); background: white; border: 1px solid #ccc; padding: 20px; z-index: 1000; }
      .overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 900; }
    </style>
</head>
<body>
<div class="container">
    <h2>Cadastre-se!</h2>
    <?php if ($message): ?>
        <div class="message"><?= htmlspecialchars($message) ?></div>
    <?php endif; ?>
    <form id="registerForm">
        <label>Nome:</label><br>
        <input type="text" name="name" required><br>
        <label>Email:</label><br>
        <input type="email" name="email" required><br>
        <label>Nome de usuário:</label><br>
        <input type="text" name="username" required><br>
        <label>Senha:</label><br>
        <input type="password" name="password" required><br>
        <input type="submit" value="Cadastrar">
    </form>
</div>

<div class="overlay" id="overlay"></div>
<div class="popup" id="verifyPopup">
    <h3>Verificação de email</h3>
    <p>Um código de verificação foi enviado para o seu email. Por favor, insira-o abaixo:</p>
    <input type="text" id="verificationCode" placeholder="Inserir código">
    <button id="verifyBtn">Verificar</button>
    <p id="verifyMessage" style="color:red;"></p>
</div>
<div id="loading" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(255,255,255,0.7); z-index:2000; text-align:center;">
    <div style="position:relative; top:40vh;">
        <img src="../assets/img/loading.gif" alt="Carregando..." style="width:48px; height:48px;" />
        <p>Enviando email de verificação...</p>
    </div>
</div>
<script src="../assets/js/register_popup.js"></script>
</body>
</html>
=======
<?php
session_start();
$message = $_GET['message'] ?? '';
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Página de Cadastro</title>
    <style>
      .popup, .overlay { display: none; }
      .popup { position: fixed; top: 20%; left: 50%; transform: translate(-50%, 0); background: white; border: 1px solid #ccc; padding: 20px; z-index: 1000; }
      .overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 900; }
    </style>
</head>
<body>
<div class="container">
    <h2>Cadastre-se!</h2>
    <?php if ($message): ?>
        <div class="message"><?= htmlspecialchars($message) ?></div>
    <?php endif; ?>
    <form id="registerForm">
        <label>Nome:</label><br>
        <input type="text" name="name" required><br>
        <label>Email:</label><br>
        <input type="email" name="email" required><br>
        <label>Nome de usuário:</label><br>
        <input type="text" name="username" required><br>
        <label>Senha:</label><br>
        <input type="password" name="password" required><br>
        <input type="submit" value="Cadastrar">
    </form>
</div>

<div class="overlay" id="overlay"></div>
<div class="popup" id="verifyPopup">
    <h3>Verificação de email</h3>
    <p>Um código de verificação foi enviado para o seu email. Por favor, insira-o abaixo:</p>
    <input type="text" id="verificationCode" placeholder="Inserir código">
    <button id="verifyBtn">Verificar</button>
    <p id="verifyMessage" style="color:red;"></p>
</div>
<div id="loading" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(255,255,255,0.7); z-index:2000; text-align:center;">
    <div style="position:relative; top:40vh;">
        <img src="../assets/img/loading.gif" alt="Carregando..." style="width:48px; height:48px;" />
        <p>Enviando email de verificação...</p>
    </div>
</div>
<script src="../assets/js/register_popup.js"></script>
</body>
</html>
>>>>>>> 077125945804a39eb25db9e7e35c7106b3fe620b
