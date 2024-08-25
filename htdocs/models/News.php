<?php

require('DBConnect.php');

class News{

    /**
     * метод для получения списка новостей из БД для JS
     */
    public static function getMoreNews($start, $limit){
        $pdo = DBConnect::getConnection();// устанавливаем соединение с БД

        // текст запроса к БД
        $query = "SELECT news.id AS newsId, news.title AS newsTitle, text, add_date, image,
            authors.id AS authorId, first_name, last_name, avatar,
            translation AS category, class_name AS category_class_name
        FROM news, authors, category
        WHERE author_id = authors.id
            and category_id = category.id
        ORDER BY add_date DESC
        LIMIT $start, $limit;";

        // получаем новости
        $newsList = $pdo->query($query)->fetchAll();

        // получаем кол-во новостей в таблице
        $query = "SELECT count(*) AS count
                    FROM news;";
        $count = $pdo->query($query)->fetch()['count'];    
        
        return ['newsList' => $newsList, 'newsCount' => $count];
    }

}

// echo '<pre>';
// print_r( News::getMoreNews(1, 5) );
// echo '</pre>';