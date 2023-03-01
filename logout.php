<?php
session_start();
$_SESSION['auth'] = false;
//echo $_SESSION['auth'];
$_SESSION = array();
session_destroy();
header("Location: ./login.php");
//echo $_SESSION['auth'];
exit;