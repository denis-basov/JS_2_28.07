<?php

class DBConnect{

    // данные для подключения к БД
    private static $dbName = 'mini_blog';
    private static $dbHost = 'localhost';
    private static $dbLogin = 'root';
    private static $dbPassword = '';

    // метод для получения DSN
    private static function getDSN(){
        return 'mysql:dbname='. self::$dbName . ';host=' . self::$dbHost;
    }

    // метод для подключения к БД
    public static function getConnection(){
        return new PDO(self::getDSN(), self::$dbLogin, self::$dbPassword, [
           PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC 
        ]);
    }

}

// var_dump( DBConnect::getConnection() );