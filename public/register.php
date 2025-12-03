<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f24186366f458676c6652a067842fc4cfa3ebaea
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
<<<<<<< HEAD
    <link rel="stylesheet" href="../assets/css/registerMellius.css">
</head>
<body>
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
    <!--PARTE DE CADASTRO-->
=======
</head>
<body>
<div class="container">
>>>>>>> f24186366f458676c6652a067842fc4cfa3ebaea
    <h2>Cadastre-se!</h2>
    <?php if ($message): ?>
        <div class="message"><?= htmlspecialchars($message) ?></div>
    <?php endif; ?>
    <form id="registerForm">
<<<<<<< HEAD
        <label>Nome:</label>
        <input type="text" name="name" required>
        <label>Email:</label>
        <input type="email" name="email" required>
        <label>Nome de usuário:</label>
        <input type="text" name="username" required>
        <label>Senha:</label>
        <input type="password" name="password" required>
        <input type="submit" value="Cadastrar">

        <p>Já tem uma conta?</p><a href="login.php">Faça Login!</a>
    </form>
</div>

<!--Parte do popup de verificação-->
=======
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

>>>>>>> f24186366f458676c6652a067842fc4cfa3ebaea
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
<<<<<<< HEAD
<script src="../assets/js/registerMellius.js"></script>
</body>
</html>
=======
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
>>>>>>> f24186366f458676c6652a067842fc4cfa3ebaea
