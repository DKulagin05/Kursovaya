<?php
session_start();
//$conn = new mysqli("localhost", "root", "",'Coursework');

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./assets/css/style.css">
    <script src="assets/js/login.js" defer></script>
    <title>Document</title>
</head>
<body>
<div class="reg_header">
    <?php
    include_once './parts/header.php';
    ?>
</div>
<div class="registration_sec">
    <div class="wrapper">
        <div class="reg_body">
            <form action="" method="get" id="loginForm">
                <h1>Авторизация</h1>
                <div class="reg_inputs">
                    <div class="input_label_box">
                        <label for="email">Введите почту или номер</label>
                        <input type="text" name="email" id="email" required>
                    </div>
                    <div class="input_label_box">
                        <label for="password">Введите пароль</label>
                        <input type="password" name="password" id="password" required>
                    </div>
                </div>
                <?php
//                if (isset($_GET['email'])) {
//                    $email = $_GET['email'];
//                    $password = $_GET['password'];
//
//                    $check_query = "SELECT * FROM Users WHERE email = '$email' or phone = '$email'";
//                    $result = mysqli_query($conn, $check_query);
//
//                    if (mysqli_num_rows($result) > 0) {
//                        $user = mysqli_fetch_assoc($result);
////                        var_dump($user['password']);
//                        if ($password === $user['password']) {
//                            $_SESSION['auth'] = true;
//                            $_SESSION['id'] = $user['id'];
//                            header("Location: ./personal_account.php");
//                        } else {
//                            echo 'Неверный пароль';
//                        }
//                    } else {
//                        echo 'Пользователь с такой почтой не найден';
//                    }
//                }
                ?>
<!--                <button class="login_submit">Войти</button>-->
                <input class="login_submit" value="Войти" type="submit">
                <div class="registration_var">
                    <p>Нет аккаунта?</p>
                    <a href="./registration.php">Зарегистрируйтесь</a>
                    <a href="./assets/api/login.php">Ссылка на говно</a>

                </div>
            </form>
        </div>
    </div>
</div>
<?php
require_once './parts/footer.php';
?>
</body>
</html>