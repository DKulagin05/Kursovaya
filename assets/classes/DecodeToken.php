<?php
include_once 'Database.php';
include_once "../config/core.php";
require_once "../libs/php-jwt/src/BeforeValidException.php";
require_once "../libs/php-jwt/src/ExpiredException.php";
require_once "../libs/php-jwt/src/SignatureInvalidException.php";
require_once "../libs/php-jwt/src/JWT.php";
require_once "../libs/php-jwt/src/Key.php";
use \Firebase\JWT\JWT;
use \Firebase\JWT\Key;

function decode($jwt) {
    $key = "your_secret_key";
    $decoded = JWT::decode($jwt, new Key($key, 'HS256'));
    return $decoded;
}