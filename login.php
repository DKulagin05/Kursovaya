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
    <script type="module" src="assets/js/login.js" defer></script>
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
                <input class="login_submit" value="Войти" type="submit">
                <div class="registration_var">
                    <p>Нет аккаунта?</p>
                    <a href="./registration.php">Зарегистрируйтесь</a>
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