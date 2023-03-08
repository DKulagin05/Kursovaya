<?php
//// устанавливаем соединение с базой данных
//$conn = mysqli_connect('localhost', 'username', 'password', 'database');
//
//// выполняем запрос к базе данных
//$result = mysqli_query($conn, 'SELECT * FROM users');
//
//// получаем данные в виде ассоциативного массива
//$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
//
//// закрываем соединение с базой данных
//mysqli_close($conn);
//
//// возвращаем данные в формате JSON
//echo json_encode($data);
//?>
<?php
//Подключаемся к базе данных
$dsn = 'mysql:host=localhost;dbname=Coursework';
$username = 'root';
$password = '';
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
];
try {
    $pdo = new PDO($dsn, $username, $password, $options);
} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}

// Выполняем запрос на получение данных из базы данных
$stmt = $pdo->query('SELECT * FROM Users');
$data = $stmt->fetchAll();

// Выводим данные в формате JSON
header('Content-Type: application/json');
echo json_encode($data);