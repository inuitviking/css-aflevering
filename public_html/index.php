<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Put ?page into a variable
if(isset($_GET['page'])){

	$page = $_GET['page'];

}

if(empty($page)){

	header('Location: home');

}elseif(!file_exists('pages/'.$page.'.php')){

	//404
	header('Location: 404');
	// print "<script>window.location.replace('404')</script>";

}else{

	//Require and include viewables and pages
	require_once('assets/viewables/header.php');
	include('pages/'.$page.'.php');
	require_once('assets/viewables/footer.php');

}
