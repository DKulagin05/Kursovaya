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
$create_img = $entityBodyReg['create_img'];

if (empty($create_title) || empty($create_description)
    || empty($create_people_count) || empty($create_square)
    || empty($create_price)) {
    $result = array(
        'success' => false,
        'message' => 'Заполните все поля'
    );
} else if (is_numeric($entityBodyReg['create_people_count'])
    && is_numeric($entityBodyReg['create_square'])
    && is_numeric($entityBodyReg['create_price'])){
    $query = "INSERT INTO Rooms (title, 
                        description, people_count, square, price, img) 
    VALUES ('$create_title', '$create_description',
            '$create_people_count', '$create_square', 
            '$create_price','$create_img')";
    mysqli_query($conn->getConnection(), $query);

    $result = array(
        'success' => true,
        'message' => 'Данные успешно добавлены'
    );
} else {
    $result = array(
        'success' => true,
        'message' => 'Введите корректные данные'
    );
}

mysqli_close($conn->getConnection());
header('Content-Type: application/json');
echo json_encode($result);