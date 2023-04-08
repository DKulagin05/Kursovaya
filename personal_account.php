<?php
session_start();
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="stylesheet" href="./assets/css/personal_account.css">
    <script src="assets/js/PersonalPage.js" defer></script>
    <script src="assets/js/PersonalData.js" defer></script>
    <title>Document</title>
</head>
<body>
<?php
include_once './parts/header.html';
?>
<?php
session_start();
$id = $_SESSION['id'];
?>
<input type="hidden" id="user_id" value="<?=$id?>">
<div class="personal_info">
    <div class="wrapper">
        <div class="personal_info_header">
            <h1>Личный кабинет</h1>
            <div class="sale_header_border"></div>
        </div>
        <div class="personal_info_body">
<!--            <div class="personal_img"><img src="./assets/img/profile.jpg" alt="Profile_Img"></div>-->
<!--            <div class="personal_data">-->
<!---->
<!--            </div>-->
        </div>
    </div>
</div>
<div class="personal_info_booking">
    <div class="wrapper">
        <div class="personal_info_booking_body">
            <div class="personal_info_booking_header">
                <h1>Ваши бронирования</h1>
            </div>
            <div class="products-list">
                <div class="product_zero"><h2>У вас нет бронирований</h2></div>
            </div>
    </div>
</div>



<?php
    require_once './parts/footer.html';
?>
</body>
</html>