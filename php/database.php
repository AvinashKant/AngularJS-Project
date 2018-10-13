<?php 

if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

$host='localhost';
$dbname='angularjs';
$user='root';
$pass='';

try {
	$db = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
	$db->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
}
catch(PDOException $e) {
	echo $e->getMessage();
}

?>
