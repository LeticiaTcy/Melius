<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
	<title>Homepage</title>
	<link>
</head>
<body>
	<?php
	if(isset($_SESSION['valid'])) {			
	?>
				
		Welcome <?php echo htmlspecialchars($_SESSION['name']) ?> ! <a href='include/logout.php'>Logout</a><br/>
		<br/>
		<?php if (isset($_SESSION['role']) && $_SESSION['role'] === 'admin'): ?>
            <a href='admin/users.php'>Manage Users</a><br/>
        <?php endif; ?>
        <br/><br/>
	<?php	
	} else {
		echo "You must be logged in to view this page.<br/><br/>";
		echo "<a href='public/login.php'>Login</a> | <a href='public/register.php'>Register</a>";
	}
	?>
</body>
</html>
</body>
</html>
