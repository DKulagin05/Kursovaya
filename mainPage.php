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
    <link rel="stylesheet" href="./assets/css/style.css">
    <script src="assets/js/mainPage.js" defer></script>
    <title>Document</title>
</head>
<body>
<?php
    include_once './header.php';
?>
<div class="head_box">
    <div class="wrapper">
        <div class="head_body">
            <div class="head_booking_wnd">
                <div class="head_booking_wnd_inputs">
                    <div class="input_value">
                        <h1>Количетсво человек</h1>
                        <div class="input_value_counter"><span class="head_booking_minus">-</span><p>1</p><span class="head_booking_plus">+</span></div>

                    </div>
                    <div class="input_dates">
                        <div class="input_label">
                            <label for="date_arrival">Дата заезда</label>
                            <input type="date" id="date_arrival">
                        </div>
                        <div class="input_label">
                            <label for="date_departure">Дата выезда</label>
                            <input type="date" id="date_departure">
                        </div>
                    </div>
                    <input type="submit" value="Подобрать">
                </div>
            </div>
        </div>
        <div class="head_all_btn">
            <div class="left_side">
                <p>Множество номеров для вас<br>
                    прямо сейчас</p>
                <h1>Посмотреть все номера</h1>
            </div>
            <div class="right_side">
                <a href=""><img src="./assets/img/Arrow.png" alt="#"></a>
            </div>
        </div>
    </div>
</div>

<!---->
<!--<div class="sec_second">-->
<!--    <div class="main">-->
<!--        <div class="slider slider-for">-->
<!--            <div><h3>1</h3></div>-->
<!--            <div><h3>2</h3></div>-->
<!--            <div><h3>3</h3></div>-->
<!--            <div><h3>4</h3></div>-->
<!--            <div><h3>5</h3></div>-->
<!--        </div>-->
<!--        <div class="slider slider-nav">-->
<!--            <div><h3>1</h3></div>-->
<!--            <div><h3>2</h3></div>-->
<!--            <div><h3>3</h3></div>-->
<!--            <div><h3>4</h3></div>-->
<!--            <div><h3>5</h3></div>-->
<!--        </div>-->
<!--        <div class="action">-->
<!--            <a href="#" data-slide="3">go to slide 3</a>-->
<!--            <a href="#" data-slide="4">go to slide 4</a>-->
<!--            <a href="#" data-slide="5">go to slide 5</a>-->
<!--        </div>-->
<!--    </div>-->
<!--</div>-->


<div class="sec_third">
    <div class="wrapper">
        <div class="advantages_body">
            <div class="advantages_header">Наши преимущества</div>
            <div class="advantages_list">
                <div class="advantages_list_unit">
                    <img src="./assets/img/Time.png" alt="#">
                    <p>Быстрое бронирование</p>
                </div>
                <div class="advantages_list_unit">
                    <img src="./assets/img/Defend.png" alt="#">
                    <p>Гарантия безопасности</p>
                </div>
                <div class="advantages_list_unit">
                    <img src="./assets/img/WiFi.png" alt="#">
                    <p>Бесплатный WiFi</p>
                </div>
                <div class="advantages_list_unit">
                    <img src="./assets/img/Money.png" alt="#">
                    <p>Низкие цены</p>
                </div>
                <div class="advantages_list_unit">
                    <img src="./assets/img/Parking.png" alt="#">
                    <p>Бесплатная парковка</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="sec_map">
    <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/56/chelyabinsk/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Челябинск</a><a href="https://yandex.ru/maps/56/chelyabinsk/house/ulitsa_entuziastov_17/YkgYdQBnS0UEQFtvfX10cHxkYQ==/?indoorLevel=1&ll=61.378359%2C55.150621&utm_medium=mapframe&utm_source=maps&z=16.95" style="color:#eee;font-size:12px;position:absolute;top:14px;">Улица Энтузиастов, 17 — Яндекс Карты</a><iframe src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=61.378359%2C55.150621&mode=whatshere&whatshere%5Bpoint%5D=61.377582%2C55.151057&whatshere%5Bzoom%5D=17&z=16.95" width="100%" height="500" frameborder="0" allowfullscreen="true" style="position:relative;"></iframe></div>
</div>
<?php
include_once 'footer.php';

?>
</body>
</html>
