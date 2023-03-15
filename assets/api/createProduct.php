<?php
include_once 'Database.php';
$conn = new Database();

$entityBodyReg = json_decode(file_get_contents('php://input'),true);
$id = $entityBodyReg['id'];
$create_title = $entityBodyReg['create_title'];
$create_description = $entityBodyReg['create_description'];
$create_people_count = $entityBodyReg['create_people_count'];
$create_square = $entityBodyReg['create_square'];
$create_price = $entityBodyReg['create_price'];
// Изменить все названия переменных и в js доделать
if (empty($create_title) || empty($create_description)
    || empty($create_people_count) || empty($create_square)
    || empty($create_price)) {
    $result = array(
        'success' => false,
        'message' => 'Заполните все поля'
    );
} else {
    $query = "INSERT INTO Rooms (title, 
                        description, people_count, square, price) 
    VALUES ('$create_title', '$create_description',
            '$create_people_count', '$create_square', 
            '$create_price')";
    mysqli_query($conn->getConnection(), $query);

    $result = array(
        'success' => true,
        'message' => 'Данные успешно добавлены'
    );
}

mysqli_close($conn->getConnection());
header('Content-Type: application/json');
echo json_encode($result);