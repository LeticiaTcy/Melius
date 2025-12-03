<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f24186366f458676c6652a067842fc4cfa3ebaea
<?php session_start(); ?>

<?php
if(!isset($_SESSION['valid'])) {
	header('Location: login.php');
}
?>

<?php
//including the database connection file
include("connection.php");

//getting id of the data from url
$id = $_GET['id'];

//deleting the row from table
$result=mysqli_query($mysqli, "DELETE FROM products WHERE id=$id");

//redirecting to the display page (view.php in our case)
header("Location:view.php");
?>

<<<<<<< HEAD
=======
=======
<?php session_start(); ?>

<?php
if(!isset($_SESSION['valid'])) {
	header('Location: login.php');
}
?>

<?php
//including the database connection file
include("connection.php");

//getting id of the data from url
$id = $_GET['id'];

//deleting the row from table
$result=mysqli_query($mysqli, "DELETE FROM products WHERE id=$id");

//redirecting to the display page (view.php in our case)
header("Location:view.php");
?>

>>>>>>> 077125945804a39eb25db9e7e35c7106b3fe620b
>>>>>>> f24186366f458676c6652a067842fc4cfa3ebaea
