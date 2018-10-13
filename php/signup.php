<?php 
require_once('database.php');

$userEmail = strip_tags(trim($_POST['useremail']));
$userpassword = strip_tags(trim($_POST['userpassword']));
$usercpassword = strip_tags(trim($_POST['usercpassword']));

$emailExistQuery="SELECT * FROM `aj_user` WHERE user_email ='$userEmail'";
$emailExistData = $db->query($emailExistQuery);

if($emailExistData->fetchColumn()){
	echo '2';
}else{
	$userpassword = md5($userpassword);

	$stmt = $db->prepare("INSERT INTO aj_user (user_email, user_password) 
		VALUES (:email, :password)");
	$stmt->bindParam(':email', $userEmail);
	$stmt->bindParam(':password', $userpassword);

	if($stmt->execute()){
		echo '1';
	}else{
		echo '0';
	}
}
?>