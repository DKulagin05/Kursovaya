<?php
session_start();
// получаем данные из массива $_POST
$username = $_POST['username'];
$password = $_POST['password'];
$test = json_encode( $_POST['username']);

// выполняем проверку данных и формируем массив с результатами
$result = array(
    'success' => true,
    'message' => 'Login successful!',
    'data' => array(
        'username' => $username,
        'password' => $password
    )
);
$conn = mysqli_connect('localhost', 'username', 'password', 'database');

// выполняем запрос к базе данных
$result = mysqli_query($conn, 'SELECT * FROM users');

// получаем данные в виде ассоциативного массива
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);

// закрываем соединение с базой данных
mysqli_close($conn);
// возвращаем данные в формате JSON
echo json_encode($result);
