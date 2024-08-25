/**
 * получаем элементы
 */
const billInputEl = document.querySelector("#bill-input"); // поле для ввода суммы счета
const peopleInputEl = document.querySelector("#peoples-input"); // поле для ввода кол-ва человек
const tipBtns = document.querySelectorAll(".tip-btns .tip-btn"); // кнопки для чаевых
const tipAmountOutputEl = document.querySelector(".output-data .output-tip span"); // элемент для вывода чаевых
const totalPersonOutputEl = document.querySelector(".output-data .output-total span"); // элемент для вывода суммы счета
const outputResetBtn = document.querySelector(".output-reset .reset-btn"); // кнопка сброса

// разделяем кнопки на массив с кнопками с фикс процентом и кнопку для кастом процента
const tipBtnsArr = [...tipBtns]; // превращаем NodeList в массив
const tipCustomBtn = tipBtnsArr.pop(); // забираем кнопку из массива и кладем в переменную

// переменные для входных данных
let bill = 0;
let tip = 0;
let people = 0;

/**
 * обработка поля с суммой счета
 */
billInputEl.addEventListener("input", function () {
  if (!this.value) {
    this.setAttribute("placeholder", "Нужно заполнить поле");
    this.style.border = "1px solid red";
    bill = 0;
    return;
  }

  bill = parseInt(this.value);
  this.style.border = "1px solid";

  // если все значения есть
  if (bill && tip && people) {
    let tipAmount = calcTipAmount(bill, tip, people); //считаем сумму чаевых на человека
    let billPerPerson = calcBillPerPerson(bill, people); // считаем счет на одного человека
    updateOutput(tipAmount, billPerPerson); // обновляем данные на странице
  }
});

/**
 * получение процентой ставки чаевых
 */
// если нажата одна из кнопок с фикс процентом
// перебираем массив с кнопками
tipBtnsArr.forEach(function (tipBtn) {
  // на каждую кнопку вешаем обработчик по клику
  tipBtn.addEventListener("click", function () {
    tip = parseInt(this.value); // забираем значение преобразовав в число
    tipCustomBtn.setAttribute("type", "button");
    tipCustomBtn.value = "custom";

    // меняем фон всех кнопок на дефолтный
    tipBtnsArr.forEach(function (tipBtn) {
      tipBtn.style.backgroundColor = "hsl(183, 100%, 15%)";
    });
    tipCustomBtn.style.backgroundColor = "hsl(183, 100%, 15%)"; // меняем фон кнопки custom на исходный

    this.style.backgroundColor = "hsl(172, 67%, 45%)"; // меняем фон нажатой кнопки

    // если все значения есть
    if (bill && tip && people) {
      let tipAmount = calcTipAmount(bill, tip, people); //считаем сумму чаевых на человека
      let billPerPerson = calcBillPerPerson(bill, people); // считаем счет на одного человека
      updateOutput(tipAmount, billPerPerson); // обновляем данные на странице
    }
  });
});

// если нажата кнопка custom
tipCustomBtn.addEventListener("click", function () {
  this.value = 0;
  this.setAttribute("type", "number");
  // меняем фон всех кнопок на дефолтный
  tipBtnsArr.forEach(function (tipBtn) {
    tipBtn.style.backgroundColor = "hsl(183, 100%, 15%)";
  });
});

tipCustomBtn.addEventListener("blur", function () {
  if (!this.value) {
    this.setAttribute("type", "button");
    this.value = "ERR";
    return;
  }
  tip = parseInt(this.value); // забираем значение преобразовав в число

  this.setAttribute("type", "button");
  this.value = `${tip}%`;
  this.style.backgroundColor = "hsl(172, 67%, 45%)";

  // если все значения есть
  if (bill && tip && people) {
    let tipAmount = calcTipAmount(bill, tip, people); //считаем сумму чаевых на человека
    let billPerPerson = calcBillPerPerson(bill, people); // считаем счет на одного человека
    updateOutput(tipAmount, billPerPerson); // обновляем данные на странице
  }
});

/**
 * обработка поля с кол-вом человек
 */
peopleInputEl.addEventListener("input", function () {
  if (!this.value) {
    this.setAttribute("placeholder", "Нужно заполнить поле");
    this.style.border = "1px solid red";
    people = 0;
    return;
  }

  people = parseInt(this.value);
  this.style.border = "1px solid";

  // если все значения есть
  if (bill && tip && people) {
    let tipAmount = calcTipAmount(bill, tip, people); //считаем сумму чаевых на человека
    let billPerPerson = calcBillPerPerson(bill, people); // считаем счет на одного человека
    updateOutput(tipAmount, billPerPerson); // обновляем данные на странице
  }
});

/**
 * клик по кнопке сброса
 */
outputResetBtn.addEventListener("click", function () {
  // обнуляем поля ввода
  billInputEl.value = 0;
  peopleInputEl.value = 0;

  // меняем фон всех кнопок на дефолтный
  tipBtnsArr.forEach(function (tipBtn) {
    tipBtn.style.backgroundColor = "hsl(183, 100%, 15%)";
  });

  // сбрасываем параметры кнопки кастомного процента чаевых
  tipCustomBtn.value = "custom";
  tipCustomBtn.setAttribute("type", "button");
  tipCustomBtn.style.backgroundColor = "hsl(183, 100%, 15%)";

  // обнуляем вывод данных
  tipAmountOutputEl.textContent = "$0";
  totalPersonOutputEl.textContent = "$0";

  // обнуляем полученные данные
  bill = 0;
  tip = 0;
  people = 0;
});

/**
 * вспомогательные функции
 */
// функция для расчета части счета на человека
function calcBillPerPerson(bill, people) {
  return +(bill / people).toFixed(2);
}

// функция для расчета суммы чаевых на человека
function calcTipAmount(bill, tip, people) {
  return +((bill * tip) / 100 / people).toFixed(2);
}

// функция для обновления значений на странице
function updateOutput(tipAmount, billPerPerson) {
  tipAmountOutputEl.textContent = `$${tipAmount}`;
  totalPersonOutputEl.textContent = `$${billPerPerson}`;
}
