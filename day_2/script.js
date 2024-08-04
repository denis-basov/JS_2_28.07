const eventEl = document.querySelector('#event');
//const head1 = document.querySelector('#head-1');
// console.dir(head1);

/*
// добавляем обработчик клика на кнопку
eventEl.addEventListener('click', function(event){
  // console.log(event);
  // console.log(head1.textContent);
  // head1.innerText = 'Я программирую на JS';
  // head1.textContent = 'Я программирую на <i>JS</i>';
  // head1.innerHTML = 'Я программирую на <i>JS</i>';
});*/


/*
const usersContainer = document.querySelector('#users');
const user1Name = document.querySelector('#users .user-1 h2');

const user = {
  fName: 'Петр',
  lName: 'Сидоров',
  age: 12
};
const userStr = `
      <div class="user user-3">
        <h3>${user.fName} ${user.lName}</h3>
        <p>Возраст: ${user.age}</p>
      </div>
`;

eventEl.addEventListener('click', function(event){
//  console.log(usersContainer.textContent);
//  console.log(user1Name.textContent);
  usersContainer.innerHTML += userStr;
});*/


/**
 * value
 */
/*
const fNameEl = document.querySelector('#fName');

eventEl.addEventListener('click', function(event){
  const strLen = fNameEl.value.length;
  console.log(strLen);
});*/

/**
 * parentElement
 */
// const fNameEl = document.querySelector('#fName');

// console.log(fNameEl.parentElement);
// console.log(fNameEl.parentElement.parentElement);


/**
 * children
 */
// const usersContainer = document.querySelector('#users');
// console.log(usersContainer.children);

/**
 * nextElementSibling
 * previousElementSibling
 */
/*
const user2El = document.querySelector('#users .user.user-2');

console.log(user2El);

console.log(user2El.nextElementSibling);
console.log(user2El.previousElementSibling);
*/

/*
const fNameEl = document.querySelector('#fName');
const fNameErrEl = fNameEl.nextElementSibling;
console.log(fNameErrEl);
fNameErrEl.textContent = 'Имя не может быть пустым';*/


/**
 * style
 */
/*
const head1 = document.querySelector('#head-1');

eventEl.addEventListener('click', function(){
  console.log(head1.style);
  head1.style.backgroundColor = 'silver';
  head1.style.border = '2px solid orangered';
});
*/

/*
const item1ElBtn = document.querySelector('#items .item-1 button');

item1ElBtn.addEventListener('click', function(){
  const item1El = item1ElBtn.parentElement;

  if (item1ElBtn.textContent === 'В корзину'){
    item1ElBtn.textContent = 'В корзине';
    item1ElBtn.style.color = 'orange';
    item1El.style.backgroundColor = '#87bd87';
  } else {
    item1ElBtn.textContent = 'В корзину';
    item1ElBtn.style.color = 'black';
    item1El.style.backgroundColor = '#d1e7fa';
  }

});*/


/**
 * classList
 */
const user1El = document.querySelector('#users .user-1');
// console.log(user1El.classList);

// add()
// eventEl.addEventListener('click', function(){
//   user1El.classList.add('hidden');
// });

// remove()
// eventEl.addEventListener('click', function(){
//   user1El.classList.remove('hidden');
// });

// contains()
// eventEl.addEventListener('click', function(){
//   // если класс есть, удаляем
//   if(user1El.classList.contains('hidden')){
//     user1El.classList.remove('hidden');
//   }else{// иначе, добавляем
//     user1El.classList.add('hidden');
//   }
// });

// toggle()
// eventEl.addEventListener('click', function(){
//   user1El.classList.toggle('hidden');
// });

// const usersContainer = document.querySelector('#users');
// eventEl.addEventListener('click', function(){
//   usersContainer.classList.toggle('users');
// });

/**
 * getAttribute()
 * setAttribute()
 */
/*
const itemImage1 = document.querySelector('#item-image-1');
const image1Src = itemImage1.getAttribute('src');

const item1H3Text = itemImage1.nextElementSibling.textContent;// получаю текст заголовка
itemImage1.setAttribute('alt', item1H3Text);// устанавливаем значение alt
*/

/*
const itemImage2Obj = {
  src: 'https://images.unsplash.com/photo-1553691158-91a7f9183156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG9vdGglMjBwYXN0ZXxlbnwwfHwwfHx8MA%3D%3D',
  alt: 'Зубная щетка'
};

const itemImage2 = document.querySelector('#item-image-2');
itemImage2.setAttribute('src', itemImage2Obj.src);
itemImage2.setAttribute('alt', itemImage2Obj.alt);
*/

/**
 * createElement()
 */
/*
const newLi = document.createElement('li');

newLi.textContent = 'Киви';
newLi.classList.add('fruit-4');
newLi.setAttribute('id', 'fruit-4');

const cloneLi = newLi.cloneNode();// клонируем элемент

const fruitsContainer = document.querySelector('#fruits');
fruitsContainer.appendChild(newLi);// добавление последним потомком


cloneLi.textContent = 'Арбуз';
cloneLi.classList.remove('fruit-4');
cloneLi.classList.add('fruit-0');
cloneLi.setAttribute('id', 'fruit-0');

fruitsContainer.prepend(cloneLi);// первым потомком
*/


/**
 * insertAdjacentElement()
 */
/*
const drinksList = document.querySelector('#drinks');// выбираем контейнер
const newDrinkEl = document.createElement('li');
newDrinkEl.textContent = 'Вода';

const newPar = document.createElement('p');
newPar.textContent = 'Привет, лето';

// добавляем элемент на страницу относительно контейнера
// drinksList.insertAdjacentElement('afterbegin', newDrinkEl);
// drinksList.insertAdjacentElement('beforeend', newDrinkEl);

// drinksList.insertAdjacentElement('beforebegin', newPar);
// drinksList.insertAdjacentElement('afterend', newPar);
*/

/**
 * insertAdjacentHTML()
 */
/*
const users2Container = document.querySelector('#users-2');

const user = {
  fName: 'Ivan',
  lName: 'Ivanov',
  age: 11,
  hobby: ['read', 'sleep', 'swimm']
};

const userHTML = `
  <div class="user">
    <h2>${user.fName} ${user.lName}</h2>
    <p>Возраст: ${user.age}</p>
    <p>Хобби: ${user.hobby.join(', ')}</p>
  </div>
`;

users2Container.insertAdjacentHTML('beforeend', userHTML);
*/

/**
 * getBoundingClientRect()
 */
// const users2Container = document.querySelector('#users-2');

// console.log(users2Container.getBoundingClientRect());

/**
 * Отмена действия по умолчанию
 */
/*
const docRefEl = document.querySelector('#doc-ref');

docRefEl.addEventListener('click', function(event){
  console.log('Выполнен переход в документацию');
  event.preventDefault();// отмена действия браузера по умолчанию
});*/


/**
 * формы
 */
/*
const formEl = document.querySelector('#enter-form');

formEl.addEventListener('submit', function(event){
  event.preventDefault(); // отмена отправки формы
});*/


const fNameInut = document.querySelector('#fName');// получаем поле ввода
const fNameErr = fNameInut.nextElementSibling;// поле для вывода ошибки

let flag = false; // состояние проверки корректности заполнения формы

fNameInut.addEventListener('focus', function(){
  //console.log('Поле получило фокус');
  fNameInut.style.backgroundColor = '#c8c8f6';
});

fNameInut.addEventListener('blur', function(event){
  //console.log('Поле потеряло фокус');
  const value = fNameInut.value;

  if(!value){// если клиент ничего не ввел
    // показываем сообщение об ошибке
    fNameErr.textContent = 'Введите имя!!!';
    fNameErr.classList.add('error');
    fNameInut.style.background = '#fab0b0';
  }else{
    // убираем сообщение об ошибке
    fNameErr.textContent = '';
    fNameErr.classList.remove('error');
    fNameInut.style.background = '#9ef99e';
    flag = true;// разрешаем отправку формы
  }
  
});

const formEl = document.querySelector('#enter-form');

formEl.addEventListener('submit', function(event){
  // если пользователь не заполнил правильно поля, отменяем отправку формы
  if(!flag){
    event.preventDefault(); // отмена отправки формы
  }
});