
// function getThis(){
//   console.log(this);
// }
// getThis();

/*
function getThis(){
  console.log(this);
}
window.getThis();*/

/*
function getThis(){
  'use strict';
  console.log(this);
}
getThis();*/

/*
const cat = {
  fName: 'Барсик',
  greet(){
    console.log(this);
    console.log(`Меня зовут ${this.fName}`);
  }
}

cat.greet();*/

/*
const cat = {
  fName: 'Барсик',
  greet(){
    return `Меня зовут ${this.fName}`;
  },
  greetHead(){
    document.write(`<h2>${this.greet()}</h2>`);
  }
}

cat.greetHead();*/

/*
const fName ='Ivan';
function greet(){
  return `Меня зовут ${this.fName}`;
}
//console.log(window);

const cat = {
  fName: 'Барсик',
  greet: greet
}

const dog = {
  fName: 'Шарик',
  greet: greet
}

console.log(cat.greet());
console.log(dog.greet());*/

/*
function a(){
  console.log('a', this);

  function b(){
    console.log('b', this);
  }
  const c = {
    hi: function(){
      console.log('c', this);
    }
  }
  b();
  c.hi();
}

a();*/

/*
const cat = {
  fName: 'Барсик',
  greet(){
    console.log('greet', this);

    function a(){
      console.log('a', this);
    }
    a();
  },
  a: function(){
    console.log('a', this);
  }
  
}

cat.greet();*/

/*
// определение функции
function helloUser(){
  console.log('Hello, user');
}

helloUser();*/

/*
// функциональное выражение
const helloUser = function(){
  console.log('Hello, user');
}
helloUser();*/

/*
// стрелочная функция
const helloUser = () => {
  console.log('Hello, user');
}
helloUser();*/

/*
const helloUser = () => {
  console.log(this);
}
helloUser();*/

/*
const cat = {
  fName: 'Барсик',
  greet(){
    console.log('greet', this);
    // стрелочная функция
    const a = ()=>{
      console.log('a', this);
    }
    a();
  }
}

cat.greet();*/

/*
const nums = [1,2,3,4];
nums.pop();
console.log(nums);*/

/*
console.log(this);

alert('hello');*/

/*
let nums = [1,2,3];
console.log(nums);*/

/*
const wizard = {
  name: 'Merlin',
  health: 70,
  heal(){
    this.health = 100;
  } 
};

wizard.heal();
console.log(wizard);

const warrior = {
  name: 'Robin',
  health: 70
};

warrior.heal();*/

/*
const wizard = {
  name: 'Merlin',
  health: 70,
  heal(){
    this.health = 100;
  } 
};

const warrior = {
  name: 'Robin',
  health: 70
};

console.log(wizard.heal);
wizard.heal.call(warrior);
console.log(warrior);*/

/*
const wizard = {
  name: 'Merlin',
  health: 70,
  heal(value){
    this.health += value;
  } 
};

const warrior = {
  name: 'Robin',
  health: 70
};

const healWarrior = wizard.heal.bind(warrior, 10);
console.log(healWarrior);
healWarrior();
console.log(warrior);*/

/*
function sum(num1, num2){
  return num1 + num2;
}
//sum(2, 8);

const plusTwo = sum.bind(this, 2); 
console.log(plusTwo);
console.log(plusTwo(4));
console.log(plusTwo(8));
console.log(plusTwo(10));*/

/*
function powerOf(num, pow){
  if(pow === 1){
    return num;
  }
  return num * powerOf(num, pow - 1);
}
console.log( powerOf(2, 4) );
*/

/*
let count = 0;

function counter(){
  count++;
  console.log(count);
}

counter();
counter();
counter();*/

/*
const closure = function(){
  let count = 0;
  return function(){
    count++;
    console.log(count);
  }
}

const increment = closure();
console.log(increment);
increment();
increment();
increment();
increment();*/

/*
let words = ["one", "two", "three", "four"];

words.forEach(function(item, key){
  console.log(item, key);
});*/

/*
let words = ["one", "two", "three", "four"];
let wordsPar = words.map(function(value, i){
  return `<p>${value}</p>`;
});
console.log(wordsPar);*/


//let numbers = [1,2,3,4,5,6,7];
/*
let sum = numbers.reduce(function(acc, currValue){
  return acc + currValue;
}, 0);
console.log(sum);*/

/*
let sum = numbers.reduce((acc, currValue) => acc + currValue, 0);
console.log(sum);*/

/*
let sum = 0;
for(let num of numbers){
  sum += num;
}
console.log(sum);*/

/**
 * DOM
 */

//const head1 = document.getElementById('head-1');
//console.log(head1);
//console.dir(head1);

//console.log(head1.innerText);
//head1.innerText = 'DOM';

/*
const listEl = document.getElementById('list'); 
console.log(listEl);
console.dir(listEl);
console.log(listEl.children);*/

/*
const liColection = document.getElementsByTagName('li');
console.log(liColection);*/

/*
const headEl = document.getElementsByClassName('head-1');
console.log(headEl);*/

// const usersCollect = document.getElementsByClassName('user');
// console.log(usersCollect);

// usersCollect.forEach((element) => {
//   console.log(element);
// });
/*
for(let i = 0; i < usersCollect.length; i++){
  console.log(usersCollect[i]);
}*/

// let ol = document.querySelector('ol');
// console.log(ol);

/*
let li = document.querySelector('li');
console.log(li);*/

// let head1 = document.querySelector('#head-1');
// console.log(head1);

// let users = document.querySelector('.users');
// console.log(users);

// let user2 = document.querySelector('.users .user-2');
// console.log(user2);

/*
const liEls = document.querySelectorAll('#list li');
console.log(liEls);*/

/*
const users = document.querySelectorAll('.users .user');
console.log(users);*/

/*
function changeColor(){
  const par1 = document.querySelector('#par-1');
  par1.innerText = 'Hello';
  par1.style.color = 'blue';
}*/

/*
function sayHello(){
  console.log('Hello, summer');
}

setTimeout(sayHello, 1000);
console.log('test');*/

/*
function sayHello(userName){
  console.log(`Hello, ${userName}`);
}

setTimeout(sayHello, 1000, 'Ivan');
console.log('test');*/


/*
function sayHello(userName){
  console.log(`Hello, ${userName}`);
}

setInterval(sayHello, 2000, 'Ivan');*/

/*
let timer = 0;
function makeTime(){
  console.log(timer);
  timer++;
}
setInterval(makeTime, 1000);*/

/*
let timer = 60;
function makeTime(){
  console.log(timer);
  timer--;
}
setInterval(makeTime, 1000);*/

/*
const timerEl = document.querySelector('#timer');

let timer = 0;
function makeTime(){
  timerEl.innerText = timer; 
  timer++;
}
setInterval(makeTime, 1000);*/

// console.log(this);

/*
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));

console.log(123);  */