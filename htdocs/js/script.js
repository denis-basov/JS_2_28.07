// IIFE

(function(){

    const container = document.querySelector('.news-container');// контейнер для вывода нвостей
    const moreNewsBtn = document.querySelector('#more-news');// кнопка для подгрузки новостей

    if(!container || !moreNewsBtn) return;

    let start = 0;
    let limit = 3;
    let newsCount = 0;


    /**
     * функция для получения новостей и кол-ва новостей от сервера
     */
    async function getPosts(){
        const response = await fetch(`server/getNewsList.php?start=${start}&limit=${limit}`);
        const data = await response.json();
        // console.log(data);

        newsCount = data.newsCount;//получаем кол-во новостей

        // вывод новостей на страницу
        showPosts(data.newsList);
    }
    getPosts();

    /**
     * функция для отображения новостей
     */
    function showPosts(data){

        const output = data.map(function(newsItem){
            return `
                <div class="col-lg-4 mb-4">
                    <div class="entry2">
                        <a href="#">
                            <img src="${newsItem.image}" alt="${newsItem.newsTitle}" class="img-fliud rounded">
                        </a>
                        <div class="excerpt">
                            <span class="post-category">${newsItem.category}</span>
                            <h2>${newsItem.newsTitle}</h2>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        container.insertAdjacentHTML('beforeend', output);
    }

    /**
     * подгрузка новостей по клику на кнопку
     */
    moreNewsBtn.addEventListener('click', function(event){
        event.preventDefault();
        start += limit;

        // если новости закончились, скрываем кнопку
        if(start > newsCount){
            moreNewsBtn.style.display = 'none';
            return;
        }

        getPosts();
    });

}());