<?php
include_once 'Database.php';
$conn = new Database();

$entityBodyReg = json_decode(file_get_contents('php://input'),true);
$id = $entityBodyReg['id'];
$new_title = $entityBodyReg['new_title'];
$new_description = $entityBodyReg['new_description'];
$new_people_count = $entityBodyReg['new_people_count'];
$new_square = $entityBodyReg['new_square'];
$new_price = $entityBodyReg['new_price'];
$new_img = $entityBodyReg['new_img'];

if (empty($new_title) || empty($new_description)
    || empty($new_people_count) || empty($new_square)
    || empty($new_price)) {
    $result = array(
        'success' => false,
        'message' => 'Заполните все поля'
    );
} else {
    $query = "UPDATE Rooms
              SET title = '$new_title', description = '$new_description', 
                  people_count = '$new_people_count', square = '$new_square',
                  price = '$new_price', img = '$new_img'
              WHERE id = '$id';";
    mysqli_query($conn->getConnection(), $query);

    $result = array(
        'success' => true,
        'message' => 'Данные успешно изменены'
    );
}

mysqli_close($conn->getConnection());
header('Content-Type: application/json');
echo json_encode($result);