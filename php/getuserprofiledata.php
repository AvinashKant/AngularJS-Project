<?php 

require_once('database.php');

$userID = $_SESSION['userid'];

$userExistData = $db->query("SELECT * FROM `aj_user_profile` WHERE id ='$userID'")->fetch();

$dataarray = array();

if (!empty($userExistData)) {
	$dataarray=array(
		'username'=>$userExistData['username'],
		'age'=>$userExistData['age'],
		'gender'=>$userExistData['gender'],
		'abutme'=>$userExistData['abutme']);

	echo json_encode($dataarray);
}else{
	echo '0';
}




?>