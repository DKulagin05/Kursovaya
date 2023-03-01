<?php
session_start();
$conn = new mysqli("localhost", "root", "",'Coursework');
$id = $_SESSION["id"];
$query = "SELECT * FROM Users WHERE id = '$id'";
$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) > 0) {
    $user = mysqli_fetch_assoc($result);
//var_dump($user);
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/assets/css/style.css">
    <title>Document</title>
</head>
<body>
<?php
include_once 'header.php';
?>
<div class="personal_info">
    <div class="wrapper">
        <div class="personal_info_header">
            <h1>Личный кабинет</h1>
            <div class="sale_header_border"></div>
        </div>
        <div class="personal_info_body">
            <div class="personal_img"><img src="./assets/img/profile.jpg" alt="Profile_Img"></div>
            <div class="personal_data">
                <div class="personal_data_fn">
                    <div class="personal_surname"><?=$user['surname']?></div>
                    <div class="personal_name"><?=$user['name']?></div>
                    <div class="personal_patronymic"><?=$user['patronymic']?></div>
                    <div class="personal_editing_btn"><img src="assets/img/editing.png" alt="#"></div>
                </div>
                <div class="personal_data_phone">
                    <div class="personal_phone"><?=$user['phone']?></div>
                    <div class="personal_editing_btn"><img src="assets/img/editing.png" alt="#"></div>
                </div>
                <div class="personal_data_mail">
                    <div class="personal_mail"><?=$user['email']?></div>
                    <div class="personal_editing_btn"><img src="assets/img/editing.png" alt="#"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="personal_info_booking">
    <div class="wrapper">
        <div class="personal_info_booking_header">
            <h1>Ваши бронирования</h1>
        </div>
        <div class="personal_info_booking_unit">
            <img src="./assets/img/rent_ico.png" alt="#">
            <div class="info_booking_body">
                <div class="info_booking_header">
                    <h1>Стандарт с односпальной кроватью</h1>
                </div>
                <div class="info_booking_specifications">
                    <div class="specifications_square">
                        <img src="./assets/img/square.png" alt="#">
                        <p>16 кв.м</p>
                    </div>
                    <div class="specifications_person">
                        <img src="./assets/img/person.png" alt="#">
                        <p>1 чел.</p>
                    </div>
                </div>
                <div class="info_booking_price_btn">
                    <div class="info_booking_price">
                        <h1>Цена</h1>
                        <p>2.300р</p>
                    </div>
                    <div class="info_booking_btn">Отменить</div>
                </div>
            </div>
        </div>
    </div>
</div>



<?php

include_once 'footer.php';
?>
</body>
</html>