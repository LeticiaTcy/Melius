<?php
session_start();
$message = $_GET['message'] ?? '';
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Register</title>
    <style>
      .popup, .overlay { display: none; }
      .popup { position: fixed; top: 20%; left: 50%; transform: translate(-50%, 0); background: white; border: 1px solid #ccc; padding: 20px; z-index: 1000; }
      .overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 900; }
    </style>
</head>
<body>
<div class="container">
    <h2>Register</h2>
    <?php if ($message): ?>
        <div class="message"><?= htmlspecialchars($message) ?></div>
    <?php endif; ?>
    <form id="registerForm">
        <label>Name:</label><br>
        <input type="text" name="name" required><br>
        <label>Email:</label><br>
        <input type="email" name="email" required><br>
        <label>Username:</label><br>
        <input type="text" name="username" required><br>
        <label>Password:</label><br>
        <input type="password" name="password" required><br>
        <input type="submit" value="Register">
    </form>
</div>

<div class="overlay" id="overlay"></div>
<div class="popup" id="verifyPopup">
    <h3>Email Verification</h3>
    <p>A verification code has been sent to your email. Please enter it below:</p>
    <input type="text" id="verificationCode" placeholder="Enter verification code">
    <button id="verifyBtn">Verify</button>
    <p id="verifyMessage" style="color:red;"></p>
</div>

<script src="../assets/js/register_popup.js"></script>
</body>
</html>
