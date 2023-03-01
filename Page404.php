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
    <section class="error_main-sec">
        <div class="wrapper">
            <div class="error_body">
                <div class="error_main-sec-text">
                    <div class="error_main-sec-text-top">
                        <h1>Ошибка!</h1>
                        <p>Эта страница не найдена, мы уже работаем, чтобы ее восстановить!</p>
                    </div>
                    <div class="error_main-sec-text-buttons">
                        <a href="./mainPage.php">Вернуться на главную</a>
                    </div>
                </div>
                <div class="error_main-sec-img">
                    <img src="./assets/img/page_404.jpg" alt="#">
                </div>
            </div>
        </div>
    </section>
    <?php
    include_once 'footer.php';
    ?>
</body>
</html>