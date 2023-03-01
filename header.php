<?php
session_start();
?>
<link rel="stylesheet" href="./assets/css/style.css">
<script src="assets/js/header.js" defer></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"></script>
<body>
    <div class="header">
        <div class="wrapper">
            <div class="header_body">
                <div class="header_logo"><a href="./mainPage.php"><img src="./assets/img/Logo.png" alt="#"></a></div>
                <div class="header_links">
<!--                    <a href="./Page404.php">Бонусная программа</a>-->
                    <a href="./Promo.php">Спецпредложения</a>
                    <a href="./product.php">Бронирование</a>
                    <a href="./services.php">Услуги</a>
                    <a href="./contacts.php">Контакты</a>
                </div>
                <div class="header_profile">
                    <img src="./assets/img/Profile.png" alt="#">
                    <!-- <div class="header_profile_links">
                        <a href="">Войти</a>
                        <a href="">Регистрация</a>
                    </div> -->
                    <div class="window_reg_log hide">
                        <a href="/personal_account.php" class="<?php if($_SESSION['auth']) {echo '';} else echo 'hide';?>">Профиль</a>
                        <a href="/logout.php" class="<?php if($_SESSION['auth']) {echo '';} else echo 'hide';?>">Выйти</a>
                        <a href="/login.php" class="<?php if($_SESSION['auth']) {echo 'hide';} else echo '';?>">Войти</a>
                        <a href="/registration.php" class="<?php if($_SESSION['auth']) {echo 'hide';} else echo '';?>">Регистрация</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>