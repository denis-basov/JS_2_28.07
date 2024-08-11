// получаем табы, контейнер с табами, блоки с контентом
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
console.log(tabsContent);


// добавляем обработчик по клику контейнеру
tabsContainer.addEventListener('click', function(event){

    // получаем кнопку, покоторой нажали
    const clicked = event.target.closest('.operations__tab');
    
    if(!clicked) return;// если клик не по кнопке, выходим

    // удаляем классы активности у табов и контента
    tabs.forEach(function(tab){
        tab.classList.remove('operations__tab--active');
    });
    tabsContent.forEach(function(content){
        content.classList.remove('operations__content--active');
    });

    // добавляю класс активности нажатой кнопке
    clicked.classList.add('operations__tab--active');

    // получаем значение дата-атрибута кнопки
    const dataTab = clicked.dataset.tab;

    // получаем соответствующий блок с контентом
    const currentContent = document.querySelector(`.operations__content--${dataTab}`);

    // добавляем выбранному блоку с контентом класс активности
    currentContent.classList.add('operations__content--active');

    // document.
    //     querySelector(`.operations__content--${clicked.dataset.tab}`)
    //     .classList.add('operations__content--active');
});