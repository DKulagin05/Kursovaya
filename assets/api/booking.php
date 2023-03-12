<?php
include_once 'Database.php';
$conn = new Database();
$entityBodyReg = json_decode(file_get_contents('php://input'),true);
$item = $entityBodyReg['item_booking'];
$item_id = $item['id'];
$user_id = $entityBodyReg['userId'];
$today = date('Y-m-d');
$today = "'$today'";
if ($user_id != '') {
    $booking_query = "INSERT INTO Booking (id_user, id_room) VALUES ('$user_id','$item_id')";

    mysqli_query($conn->getConnection(), $booking_query);
    echo json_encode(['success' => true, 'message' => 'Вы успешно забронировали номер ']);
} else {
    echo json_encode(['success' => false, 'message' => 'Для бронироания необходимо зарегистрироватся на сайте']);

}


header('Content-Type: application/json');
//echo json_encode($user_id);
mysqli_close($conn->getConnection());
