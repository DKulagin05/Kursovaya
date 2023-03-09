<?php
session_start();
include_once 'Database.php';
$entityBody = json_decode(file_get_contents('php://input'),true);
if(isset($entityBody['email']) && isset($entityBody['password'])) {
    $email = $entityBody['email'];
    $password = $entityBody['password'];
    $conn = new Database();
    $check_query = "SELECT * FROM Users WHERE email = '$email' or phone = '$email'";
    $result = mysqli_query($conn->getConnection(), $check_query);

    if (mysqli_num_rows($result) > 0) {
        $user = mysqli_fetch_assoc($result);
        if ($password === $user['password']) {
            $_SESSION['auth'] = true;
            $_SESSION['id'] = $user['id'];
            echo json_encode(['success' => true, 'redirect' => './personal_account.php']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Неверный пароль']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Пользователь с такой почтой не найден']);
    }
    mysqli_close($conn->getConnection());
} else {
    echo json_encode(['success' => false, 'message' => 'Необходимо ввести email и пароль']);
}