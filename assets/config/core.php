<?php
// Показ сообщений об ошибках
error_reporting(E_ALL);

// Установим часовой пояс по умолчанию
date_default_timezone_set("Europe/Moscow");

// Переменные, используемые для JWT
$key = "your_secret_key";
$iss = "http://any-site.org";
$aud = "http://any-site.com";
$iat = 1356999524;
$nbf = 1357000000;
$exp_time = time() + 60;

