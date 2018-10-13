<?php 

require_once('database.php');

$userEmail = strip_tags(trim($_POST['useremail']));
$userpassword = strip_tags(trim($_POST['userpassword']));

$loginQuery="SELECT * FROM `aj_user` WHERE user_email ='$userEmail' AND user_password=md5('$userpassword')";
$holdData = $db->query($loginQuery);

if($holdData->fetchColumn()){
	$holdData->setFetchMode(PDO::FETCH_OBJ);
	$row = $holdData->fetch();
	$_SESSION['userid'] = $row->id;
	echo "YES";
}else{
	echo "NO";
}





?>