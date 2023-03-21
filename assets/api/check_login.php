<?php
session_start();

include_once 'Database.php';
include_once "./assets/config/core.php";
include_once "./assets/libs/php-jwt/src/BeforeValidException.php";
include_once "./assets/libs/php-jwt/src/ExpiredException.php";
include_once "./assets/libs/php-jwt/src/SignatureInvalidException.php";
include_once "./assets/libs/php-jwt/src/JWT.php";
include_once "./assets/libs/php-jwt/src/Key.php";
use \Firebase\JWT\JWT;
use \Firebase\JWT\Key;
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
//            $_SESSION['auth'] = true;
//            $_SESSION['id'] = $user['id'];
//            $token = array(
//                "iss" => $iss,
//                "aud" => $aud,
//                "iat" => $iat,
//                "nbf" => $nbf,
//                "data" => array(
//                    "id" => $user['id'],
//                    "email" => $user['email']
//                )
//            );
            echo json_encode(['success' => true, 'message' => 'Успешная авторизация' , 'admin' => $user['admin']]);

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


//include_once 'Database.php';
//include_once 'jwt.php';
//
//$entityBody = json_decode(file_get_contents('php://input'), true);
//
//if (isset($entityBody['email']) && isset($entityBody['password'])) {
//    $email = $entityBody['email'];
//    $password = $entityBody['password'];
//
//    $conn = new Database();
//    $check_query = "SELECT * FROM Users WHERE email = '$email' or phone = '$email'";
//    $result = mysqli_query($conn->getConnection(), $check_query);
//
//    if (mysqli_num_rows($result) > 0) {
//        $user = mysqli_fetch_assoc($result);
//
//        if ($password === $user['password']) {
//            // generate token payload
//            $payload = [
//                'sub' => $user['id'],
//                'admin' => $user['admin'],
//                'exp' => time() + 3600 // set expiration time to 1 hour from now
//            ];
//
//            // generate JWT token
//            $token = JWT::encode($payload, 'your_secret_key');
//
//            // return token to client
//            echo json_encode(['success' => true, 'token' => $token]);
//        } else {
//            echo json_encode(['success' => false, 'message' => 'Неверный пароль']);
//        }
//    } else {
//        echo json_encode(['success' => false, 'message' => 'Пользователь с такой почтой не найден']);
//    }
//
//    mysqli_close($conn->getConnection());
//} else {
//    echo json_encode(['success' => false, 'message' => 'Необходимо ввести email и пароль']);
//}
