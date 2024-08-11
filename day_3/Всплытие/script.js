// получаем кнопки для смены картинки и картинку
const buttonsCollection = document.querySelector('.btn-container').children;
const imageEl = document.querySelector('.picture img');

// получаем инпут с шириной и его кнопку
const changeWidthEl = document.querySelector('.change-width');
const changeWidthInput = changeWidthEl.children[0];// инпут
const changeWidthBtn = changeWidthEl.children[1]; // кнопка


// получаем массив из коллекции кнопок
const buttonsArr = [...buttonsCollection];

// перебираем кнопки
buttonsArr.forEach(function(button){

    // на каждую кнопку вешаем обработчик
    button.addEventListener('click', function(event){
        // получаем ID кнопки
        const btnId = this.getAttribute('id');

        // формируем значения атрибутов 
        const imageSrc = `images/image-${btnId}.jpg`;
        const imageAlt = `image-${btnId}`;

        // запись значений в атрибуты картинки
        imageEl.setAttribute('src', imageSrc);
        imageEl.setAttribute('alt', imageAlt);
    });
});

// получаем значение ширины из инпута по нажатию на кнопку
changeWidthBtn.addEventListener('click', function(){
    const widthValue = changeWidthInput.value;

    // проверяем введенное значение
    if(widthValue > 0){
        // записываем в атрибут width введенную в инпут ширину
        imageEl.setAttribute('width', widthValue);
    }
});