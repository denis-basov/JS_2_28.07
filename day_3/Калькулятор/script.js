// элементы для получения данных 
const billInputEl = document.querySelector('#bill-input');// поле для ввода суммы счета
const tipBtns = document.querySelectorAll('.tip-btns .tip-btn'); // получаем кнопки для чаевых
const peoplesInputEl = document.querySelector('#peoples-input');// кол-во людей

// элементы для вывода расчитанных данных в документ
const tipAmountOutputEl = document.querySelector('.output-data .output-tip span');// вывод чаевых
const totalPersonOutputEl = document.querySelector('.output-data .output-total span');// вывод суммы счета

// кнопка сброса
const outputResetBtn = document.querySelector('.output-reset .reset-btn');

//console.log(billInputEl, tipBtns, peoplesInputEl, tipAmountOutputEl, totalPersonOutputEl, outputResetBtn);

// переменные для входных данных
let bill = 0;
let tip = 0;
let people = 0;

// разделяем кнопки на массив с кнопками с фикс ставкой чаевых и кнопку с кастомным процентом
const tipBtnsArr = [...tipBtns];
const tipCustomBtn = tipBtnsArr.pop();


/**
 * обработка поля с суммой счета
 */
billInputEl.addEventListener('input', function(){
    
    // если значение в поле отсутствует, показываем ошибку
    if(!this.value){
        this.setAttribute('placeholder', 'Нужно заполнить поле');
        bill = 0;
        return;
    }

    // забираем значение счета
    bill = parseInt(this.value);
    this.style.border = '1px solid';

    // если все данные введены
    if(bill && tip && people){
        // считаем суммы
        let billPerPerson = calcBillPerPerson(bill, people);
        let tipAmount = calcTipAmount(bill, tip, people);
        // обновляем данные на странице
        updateOutput(tipAmount, billPerPerson);
    }
});


/**
 * получение процентной ставки чаевых
 */
tipBtnsArr.forEach(function(tipBtn){
    // на каждую кнопку вешаем обработчик по клику
    tipBtn.addEventListener('click', function(){
        tip = parseInt(this.value);
        tipCustomBtn.setAttribute('type', 'button');
        tipCustomBtn.style.backgroundColor = 'hsl(183, 100%, 15%)';
        tipCustomBtn.value = 'custom';
        // hsl(172, 67%, 45%)

        // устанафливаю стандартный фон у всех кнопок
        tipBtnsArr.forEach(function(tipBtn){
            tipBtn.style.backgroundColor = 'hsl(183, 100%, 15%)';
        });
        this.style.backgroundColor = 'hsl(172, 67%, 45%)';// меняю цвет фона нажатой кнопки

        // если все данные введены
        if(bill && tip && people){
            // считаем суммы
            let billPerPerson = calcBillPerPerson(bill, people);
            let tipAmount = calcTipAmount(bill, tip, people);
            // обновляем данные на странице
            updateOutput(tipAmount, billPerPerson);
        }

    });
});

// обработка кнопки кастомного ввода чаевых
tipCustomBtn.addEventListener('click', function(){
    this.value = 0;
    this.setAttribute('type', 'number');// меняю тип поля

    // устанафливаю стандартный фон у всех кнопок
    tipBtnsArr.forEach(function(tipBtn){
        tipBtn.style.backgroundColor = 'hsl(183, 100%, 15%)';
    });

});

tipCustomBtn.addEventListener('blur', function(){
    // если значение не введено
    if(!this.value){
        this.setAttribute('type', 'button');
        this.value = 'ERROR';
        return;
    }

    tip = parseInt(this.value);

    this.setAttribute('type', 'button');
    this.value = `${tip}%`;
    this.style.backgroundColor = 'hsl(172, 67%, 45%)';

});



/**
 * получение кол-ва людей
 */
peoplesInputEl.addEventListener('input', function(){

    // если значение в поле отсутствует, показываем ошибку
    if(!this.value){
        this.setAttribute('placeholder', 'Нужно заполнить поле');
        people = 0;
        return;
    }

    // забираем кол-во людей
    people = parseInt(this.value);
    this.style.border = '1px solid';

    // если все данные введены
    if(bill && tip && people){
        // считаем суммы
        let billPerPerson = calcBillPerPerson(bill, people);
        let tipAmount = calcTipAmount(bill, tip, people);
        // обновляем данные на странице
        updateOutput(tipAmount, billPerPerson);
    }

});


/**
 * клик по кнопке сброс
 */
outputResetBtn.addEventListener('click', function(){
    // обнуляем поля ввода
    billInputEl.value = 0;
    peoplesInputEl.value = 0;

    // сбрасываем фон кнопок
    tipBtnsArr.forEach(function(btn){
        btn.style.backgroundColor = 'hsl(183, 100%, 15%)';
    });

    // сбрасываем кастомную кнопку
    tipCustomBtn.setAttribute('type', 'button');
    tipCustomBtn.style.backgroundColor = 'hsl(183, 100%, 15%)';
    tipCustomBtn.value = 'custom';

    // обнуление данных на странице
    tipAmountOutputEl.textContent = '$0';
    totalPersonOutputEl.textContent = '$0';

    // обнуляем полученные данные
    bill = 0;
    tip = 0;
    people = 0;
});


/**
 * функции для расчетов
 */

// функция для расчета части счета на человека
function calcBillPerPerson(bill, people){
    return +(bill / people).toFixed(2);
}

// функция для расчета чаевых на человека
function calcTipAmount(bill, tip, people){
    return +((bill * tip / 100) / people).toFixed(2);
}

// функция для обновления значений в документе
function updateOutput(tipAmount, billPerPerson){
    tipAmountOutputEl.textContent = `$${tipAmount}`;
    totalPersonOutputEl.textContent = `$${billPerPerson}`;
}