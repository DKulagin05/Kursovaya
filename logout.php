<script>
    localStorage.clear();
</script>
<?php
session_start();
$_SESSION['auth'] = false;
$_SESSION = array();
session_destroy();
header("Location: ./login.php");
exit;
?>
