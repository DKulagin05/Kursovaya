<?php
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="./assets/css/style.css">
    <script src="assets/js/editProduct.js" defer></script>
</head>
<body>
Вы вошли в админ аккаунт<br>
<a href="./personal_account.php">Личный кабинет</a><br>
<form action="">
    <input id="search" type="text">
    <label for="search">Введите id или название номера</label>
    <input type="submit" class="search_room">
</form>
<div class="search_room_get">

</div>
<div class="create_room">
    <label for="create_title">Название</label>
    <textarea id="create_title" cols="30" rows="2"></textarea>
    <label for="create_description">Описание</label>
    <textarea id="create_description" cols="30" rows="2"></textarea>
    <label for="create_people_count">Кол-во человек</label>
    <input id="create_people_count" type="text" value="">
    <label for="create_square">Площадь помещения</label>
    <input id="create_square" type="text" value="">
    <label for="create_price">Цена</label>
    <input id="create_price" type="text" value="">
    <button class="create_room_btn">Сохранить изменения</button>
</div>
<form action="">
    <input id="search_delete" type="text">
    <label for="search_delete">Введите id или название номера</label>
    <input type="submit" class="delete_room">
</form>
<div class="search_remove_room_get">

</div>
</body>
</html>
