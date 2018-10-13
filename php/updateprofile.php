<?php 

require_once('database.php');

$username = strip_tags(trim($_POST['username']));
$userage = strip_tags(trim($_POST['userage']));
$userabloutme = strip_tags(trim($_POST['userabloutme']));
$usergendar = strip_tags(trim($_POST['usergendar']));


$userID = $_SESSION['userid'];
$userExistQuery="SELECT * FROM `aj_user_profile` WHERE id ='$userID'";
$userExistData = $db->query($userExistQuery);

if($userExistData->fetchColumn()){

	$ustmt = $db->prepare("UPDATE aj_user_profile SET username = '$username', age = '$userage', gender = '$usergendar', `abutme` = '$userabloutme' WHERE id = :id;");
	$ustmt->bindParam(':id',$userID);
	if($ustmt->execute()){
		echo '1';
	}else{
		echo '0';
	}
}else{
	$stmt = $db->prepare("INSERT INTO aj_user_profile (id,username, age, gender,abutme) VALUES (:userid,:username,:userage,:usergendar,:userabloutme);");
	$stmt->bindParam(':userid', $userID);
	$stmt->bindParam(':username', $username);
	$stmt->bindParam(':userage', $userage);
	$stmt->bindParam(':userabloutme', $userabloutme);
	$stmt->bindParam(':usergendar', $usergendar);
	if($stmt->execute()){
		echo '1';
	}else{
		echo '0';
	}
}
?>