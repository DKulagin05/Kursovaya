<?php
include_once 'Database.php';
$conn = new Database();
$entityBodyReg = json_decode(file_get_contents('php://input'),true);
$item_id = $entityBodyReg['item_id'];
if (!$conn->getConnection()) {
    die("Connection failed: " . mysqli_connect_error());
}
$sql = "SELECT * FROM Room_services where id_room = '$item_id'";
$result = mysqli_query($conn->getConnection(), $sql);
$data = array();
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}
header('Content-Type: application/json');
echo json_encode($data);
mysqli_close($conn->getConnection());