<?php

include_once 'Database.php';
$conn = new Database();
$entityBodyReg = json_decode(file_get_contents('php://input'), true);
$item = $entityBodyReg['item_booking'];
$item_id = $item['id'];

$booking_query = "DELETE FROM Booking WHERE id_room = '$item_id'";
mysqli_query($conn->getConnection(), $booking_query);

echo json_encode(['success' => true, 'message' => 'Вы отменили бронирование']);




header('Content-Type: application/json');
//echo json_encode($user_id);
mysqli_close($conn->getConnection());
