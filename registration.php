<?php
session_start();
$conn = new mysqli("localhost", "root", "",'Coursework');
if (!empty($_GET['phone']) and !empty($_GET['password'])) {
    $name = $_GET['name'];
    $surname = $_GET['surname'];
    $patronymic = $_GET['patronymic'];
    $email = $_GET['email'];
    $phone = $_GET['phone'];
    $password = $_GET['password'];
    $password_repeat = $_GET['password_repeat'];
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Document</title>
</head>
<body>
<?php
include_once './parts/header.php';
?>
    <div class="registration_sec">
        <div class="wrapper">
            <div class="reg_body">
                <form action="" method="get">
                    <div class="reg_header">
                        <h1>Регистрация</h1>
                    </div>
                    <div class="reg_inputs">
                        <div class="input_label_box">
                            <label for="name">Введите имя</label>
                            <input type="text" name="name" id="name" required>
                        </div>
                        <div class="input_label_box">
                            <label for="surname">Введите фамилию</label>
                            <input type="text" name="surname" id="surname" required>
                        </div>
                        <div class="input_label_box">
                            <label for="patronymic">Введите отчество</label>
                            <input type="text" name="patronymic" id="patronymic">
                        </div>
                        <div class="input_label_box">
                            <label for="email">Электронная почта</label>
                            <input type="email" name="email" id="email" required>
                        </div>
                        <div class="input_label_box">
                            <label for="phone">Номер телефона</label>
                            <input type="text" name="phone" id="phone" required>
                        </div>
                        <div class="input_label_box">
                            <label for="password">Введите пароль</label>
                            <input type="password" name="password" id="password" required>
                        </div>
                        <div class="input_label_box">
                            <label for="password_repeat">Подтвердите пароль</label>
                            <input type="password" name="password_repeat" id="password_repeat" required>
                        </div>
                    </div>
                    <?php
                    if ($_GET['password'] === $_GET['password_repeat']) {
                        $check_query = "SELECT * FROM Users WHERE email = '$email'";
                        $result = mysqli_query($conn, $check_query);
                        if (mysqli_num_rows($result) > 0) {
                            echo 'Пользователь с таким номером или почтой уже существует';
                        } else {
                            $query = "INSERT INTO Users(name,surname,patronymic,phone,email,password) VALUES ('$name','$surname','$patronymic','$phone','$email','$password')";
                            mysqli_query($conn, $query);
                            $_SESSION['auth'] = true;
                            header("Location: /personal_account.php");
                            echo 'Успешная регистрация';
                            $id = mysqli_insert_id($conn);
                            $_SESSION['id'] = $id;
                        };
                    }
                    ?>
                    <div class="reg_input_box">
                        <input type="submit" value="Зарегистрироваться">
                        <div class="approval_box">
                            <input type="checkbox" id="approval">
                            <label for="approval">Вы соглашаетесь с <a href="">Условиями</a> на обработку ваших персональных данных</label>
                        </div>

                    </div>
                    <div class="login_var">
                        <p>Уже есть аккаунт?</p>
                        <a href="./login.php">Войти</a>
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
<?php
