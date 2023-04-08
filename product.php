<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/style.css">
    <script src="assets/js/Product.js" defer></script>
    <script src="assets/js/Main.js" defer></script>
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
    <section class="filters">
        <div class="wrapper">
            <div class="filters-title">
                <div class="filters-title-text">Каталог</div>
                <div class="filters-title-filters">
<!--                    <div class="products-selects">-->
<!--                        <div class="type">-->
<!--                            <input type="radio" name="switch" id="search_1" checked>-->
<!--                            <input type="radio" name="switch" id="search_2">-->
<!--                            <input type="radio" name="switch" id="search_3">-->
<!--                        -->
<!--                            <div class="searches">-->
<!--                                <label for="search_1">Обычные номера</label>-->
<!--                                <label for="search_2">Люкс номера</label>-->
<!--                                <label for="search_3">Спец. номера</label>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>  -->
                </div>
            </div>
            <form class="filters-more-fliters">
                <div class="filters-more-fliters-price">
                    <p>Цена</p>
                    <div class="filters-more-fliters-price-inputs">
                        <input class="input" id="search_price_start" type="text" placeholder="От" value="0">
                        <div class="line_filters"></div>
                        <input class="input" id="search_price_end" type="text" placeholder="До">
                    </div>
                    
                </div>
<!--                <div class="filters-more-fliters-type">-->
<!--                    <p>Тип номера</p>-->
<!--                    <select name="filters-more-fliters-type">-->
<!--                        <option value="1">Односпальный</option>-->
<!--                        <option value="2">Двуспальный</option>-->
<!--                        <option value="3">Две односпальные</option>-->
<!--                        <option value="4">Две двуспальные</option>-->
<!--                    </select>-->
<!--                </div>-->
<!--                <div class="filters-more-fliters-only">-->
<!--                    <p>Только доступные сейчас</p>-->
<!--                    <label class="switch">-->
<!--                        <input type="checkbox" checked>-->
<!--                        <span class="catalog_switch"></span>-->
<!--                    </label>-->
<!--                </div>-->
                <div class="filters-more-fliters-sort">
                    <p>Сортировка</p>
                    <select name="filters-more-fliters-sort">
<!--                        <option value="0" disabled >Выбрать</option>-->
                        <option value="0" selected>Дешёвые</option>
                        <option value="1">Дорогие</option>
                    </select>
                </div>
                <div class="filters-more-fliters-sort">
                    <input type="submit" class="sort_btn" id="sort_all_btn" value="Отсортировать">
                </div>
            </form>
<!--            <div class="filters-more-mobile">-->
<!--                <img src="assets/img/filter-img.png" alt="">-->
<!--                <h1>Фильтр</h1>-->
<!--            </div>-->
        </div>
    </section>
    <section class="first-sec">
        <div class="wrapper">
            <div class="products-list">

            </div>
            <div class="product-list-button">
<!--                <div class="product-list-button-more" onclick="add_products()">Показать ещё</div>-->
            </div>
        </div>
    </section>
    
<?php
require_once './parts/footer.html';
?>
</body>
</html>