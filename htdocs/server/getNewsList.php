<?php

// получаем параметрывыборки с клиентской части
$start = (int)$_GET['start'];
$limit = (int)$_GET['limit'];

// подключаем модель
require('../models/News.php');

// вызываем метод для получения новостей
$data = News::getMoreNews($start, $limit);

// формируем из php массива строку в формате JSON
echo json_encode($data);

