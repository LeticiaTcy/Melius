<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f24186366f458676c6652a067842fc4cfa3ebaea
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
				
		Welcome <?php echo htmlspecialchars($_SESSION['name']) ?> ! <a href='logout.php'>Logout</a><br/>
		<br/>
		<a href='users.php'>View active users</a>
		<br/><br/>
	<?php	
	} else {
		echo "You must be an admin to view this page.<br/><br/>";
		echo "<a href='public/login.php'>Login</a> | <a href='public/register.php'>Register</a>";
	}
	?>
</body>
</html>
</body>
</html>
<<<<<<< HEAD
=======
=======
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
				
		Welcome <?php echo htmlspecialchars($_SESSION['name']) ?> ! <a href='logout.php'>Logout</a><br/>
		<br/>
		<a href='users.php'>View active users</a>
		<br/><br/>
	<?php	
	} else {
		echo "You must be an admin to view this page.<br/><br/>";
		echo "<a href='public/login.php'>Login</a> | <a href='public/register.php'>Register</a>";
	}
	?>
</body>
</html>
</body>
</html>
>>>>>>> 077125945804a39eb25db9e7e35c7106b3fe620b
>>>>>>> f24186366f458676c6652a067842fc4cfa3ebaea
