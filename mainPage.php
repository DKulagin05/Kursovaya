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
    include_once './parts/header.php';
    $today = date("Y-m-d");
?>
<div class="head_box">
    <div class="wrapper">
        <div class="head_body">
            <div class="head_booking_wnd">
                <div class="head_booking_wnd_inputs">
                    <div class="input_value">
                        <h1>Количетсво человек</h1>
                        <div class="input_value_counter"><span class="head_booking_minus">-</span><p class="head_booking_count">1</p><span class="head_booking_plus">+</span></div>
                    </div>
                    <form action="./product.php" method="post">
                        <div class="input_dates">
                            <div class="input_label">
                                <label for="date_arrival">Дата заезда</label>
                                <input type="date" id="date_arrival" value="<?=$today?>" required>
                            </div>
                            <div class="input_label">
                                <label for="date_departure">Дата выезда</label>
                                <input type="date" id="date_departure">
                            </div>
                        </div>
                        <input type="submit" value="Подобрать">

                    </form>

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
                <a href="./product.php"><img src="./assets/img/Arrow.png" alt="#"></a>
            </div>
        </div>
    </div>
</div>

<div class="slider_body">
    <div class="wrapper">
        <div class="slider_header">
            <h1>Лучшие предложения</h1>
        </div>
        <div class="slider">
            <div class="slider__item filter">
                <div class="personal_info_booking_unit">
                    <img src="assets/img/rent_ico.png" alt="#">
                    <div class="info_booking_body">
                        <div class="info_booking_header">
                            <h1>Стандарт с односпальной кроватью</h1>
                        </div>
                        <div class="info_booking_specifications">
                            <div class="specifications_square">
                                <img src="assets/img/square.png" alt="#">
                                <p>16 кв.м</p>
                            </div>
                            <div class="specifications_person">
                                <img src="assets/img/person.png" alt="#">
                                <p>1 чел.</p>
                            </div>
                        </div>
                        <div class="info_booking_price_btn">
                            <div class="info_booking_price">
                                <h1>Цена</h1>
                                <p>2.300р</p>
                            </div>
                            <div class="info_booking_btn">Забронировать</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slider__item">
                <div class="personal_info_booking_unit">
                    <img src="assets/img/rent_ico.png" alt="#">
                    <div class="info_booking_body">
                        <div class="info_booking_header">
                            <h1>Стандарт с односпальной кроватью</h1>
                        </div>
                        <div class="info_booking_specifications">
                            <div class="specifications_square">
                                <img src="assets/img/square.png" alt="#">
                                <p>16 кв.м</p>
                            </div>
                            <div class="specifications_person">
                                <img src="assets/img/person.png" alt="#">
                                <p>1 чел.</p>
                            </div>
                        </div>
                        <div class="info_booking_price_btn">
                            <div class="info_booking_price">
                                <h1>Цена</h1>
                                <p>2.300р</p>
                            </div>
                            <div class="info_booking_btn">Забронировать</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slider__item filter">
                <div class="personal_info_booking_unit">
                    <img src="assets/img/rent_ico.png" alt="#">
                    <div class="info_booking_body">
                        <div class="info_booking_header">
                            <h1>Стандарт с односпальной кроватью</h1>
                        </div>
                        <div class="info_booking_specifications">
                            <div class="specifications_square">
                                <img src="assets/img/square.png" alt="#">
                                <p>16 кв.м</p>
                            </div>
                            <div class="specifications_person">
                                <img src="assets/img/person.png" alt="#">
                                <p>1 чел.</p>
                            </div>
                        </div>
                        <div class="info_booking_price_btn">
                            <div class="info_booking_price">
                                <h1>Цена</h1>
                                <p>2.300р</p>
                            </div>
                            <div class="info_booking_btn">Забронировать</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slider__item">
                <div class="personal_info_booking_unit">
                    <img src="assets/img/rent_ico.png" alt="#">
                    <div class="info_booking_body">
                        <div class="info_booking_header">
                            <h1>Стандарт с односпальной кроватью</h1>
                        </div>
                        <div class="info_booking_specifications">
                            <div class="specifications_square">
                                <img src="assets/img/square.png" alt="#">
                                <p>16 кв.м</p>
                            </div>
                            <div class="specifications_person">
                                <img src="assets/img/person.png" alt="#">
                                <p>1 чел.</p>
                            </div>
                        </div>
                        <div class="info_booking_price_btn">
                            <div class="info_booking_price">
                                <h1>Цена</h1>
                                <p>2.300р</p>
                            </div>
                            <div class="info_booking_btn">Забронировать</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="assets/js/slick.min.js"></script>
        <script src="assets/js/script.js"></script>
    </div>
</div>


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
require_once './parts/footer.php';

?>
</body>
</html>
