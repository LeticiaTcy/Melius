<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
	<title>Seja Bem-Vindo ao Melius!!</title>
	<link>
</head>
<body>
	<?php
	if(isset($_SESSION['valid'])) {			
	?>
				
		Welcome <?php echo htmlspecialchars($_SESSION['name']) ?> ! <a href='include/logout.php'>Logout</a><br/>
		<br/>
		<?php if (isset($_SESSION['role']) && $_SESSION['role'] === 'admin'): ?>
            <a href='admin/users.php'>Ver usuários</a><br/>
        <?php endif; ?>
        <br/><br/>
	<?php	
	} else {
		echo "Você deve estar logado para ter acesso à todos os conteúdos dessa página.<br/><br/>";
		echo "<a href='public/login.php'>Login</a> | <a href='public/register.php'>Cadastrar-se</a>";
	}
	?>
</body>
</html>
</body>
</html>
