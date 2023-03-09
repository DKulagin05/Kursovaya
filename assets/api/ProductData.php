<?php
include_once 'Database.php';
$conn = new Database();
if (!$conn->getConnection()) {
    die("Connection failed: " . mysqli_connect_error());
}
$sql = "SELECT * FROM Rooms";
$result = mysqli_query($conn->getConnection(), $sql);
$data = array();
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}
header('Content-Type: application/json');
echo json_encode($data);
mysqli_close($conn->getConnection());