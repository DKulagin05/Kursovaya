<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Document</title>
</head>
<body>
<?php
include_once 'header.php';
?>
    <section class="filters">
        <div class="wrapper">
            <div class="filters-title">
                <div class="filters-title-text">Тату машинки</div>
                <div class="filters-title-filters">
                    <div class="products-selects">
                        <div class="type">
                            <input type="radio" name="switch" id="search_1" checked>
                            <input type="radio" name="switch" id="search_2">
                            <input type="radio" name="switch" id="search_3">
                            <input type="radio" name="switch" id="search_4">
                        
                            <div class="searches">
                                <label for="search_1">Обычные номера</label>
                                <label for="search_2">Люкс номера</label>
                                <label for="search_3">Спец. номера</label>
<!--                                <label for="search_4">Расходники</label>-->
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
            <div class="filters-more-fliters">
                <div class="filters-more-fliters-price">
                    <p>Цена</p>
                    <div class="filters-more-fliters-price-inputs">
                        <input class="input" type="text" placeholder="От">
                        <div class="palocka"></div>
                        <input class="input" type="text" placeholder="До">
                    </div>
                    
                </div>
                <div class="filters-more-fliters-type">
                    <p>Тип номера</p>
                    <select name="filters-more-fliters-type">
                        <option value="1">Односпальный</option>
                        <option value="2">Двуспальный</option>
                        <option value="3">Две односпальные</option>
                        <option value="4">Две двуспальные</option>
<!--                        <option value="5">В макете нет примера</option>-->
<!--                        <option value="6">Просто прекрасно</option>-->
                    </select>
                </div>
                <div class="filters-more-fliters-only">
                    <p>Только доступные сейчас</p>
                    <label class="switch">
                        <input type="checkbox" checked>
                        <span class="slider"></span>
                    </label>
                </div>
                <div class="filters-more-fliters-sort">
                    <p>Сортировка</p>
                    <select name="filters-more-fliters-sort">
                        <option value="1">Популярные</option>
<!--                        <option value="2">По алфавиту</option>-->
                        <option value="3">Дешёвые</option>
                        <option value="4">Дорогие</option>
                    </select>
                </div>
            </div>
<!--            <div class="filters-more-mobile">-->
<!--                <img src="assets/img/filter-img.png" alt="">-->
<!--                <h1>Фильтр</h1>-->
<!--            </div>-->
        </div>
    </section>
    <section class="first-sec">
        <div class="wrapper">
            <div class="products-list">
                <?php
                $product_count = 10;
                for ($i=0;$i<$product_count;$i++) {
                    echo '<div class="product">
            
            <div class="product-img">
                <img src="assets/img/background_head.png" alt="#">
            </div>
            <div class="product-img-slider">
                <div class="type-product">
                    <input type="radio" name="switch" id="slider_1" checked>
                    <input type="radio" name="switch" id="slider_2">
                    <input type="radio" name="switch" id="slider_3">
                    <input type="radio" name="switch" id="slider_4">

                    <div class="searches">
                        <label for="slider_1"></label>
                        <label for="slider_2"></label>
                        <label for="slider_3"></label>
                        <label for="slider_4"></label>
                    </div>
                </div>
            </div>
            <div class="product-name">
                <h1>Foxxx Kitsune Mini Black Vintage RCA</h1>
                <p>6 000 ₽</p>
            </div>
            
                </div>';
                }
                ?>
<!--                <div class="product-button">-->
<!--                    Забронировать-->
<!--                </div>-->
            </div>
            <div class="product-list-button">
                <div class="product-list-button-more">Показать ещё</div>
            </div>
        </div>
    </section>
    
<?php
include_once 'footer.php';
?>
</body>
</html>