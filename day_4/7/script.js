const getAllCountriesBtn = document.querySelector('#get-all-countries');// получаем кнопку
const mainContainerEl = document.querySelector('#main');// получаем контейнер
let allCountriesArr = [];// массив для стран

/**
 * при клике на кнопку получаем все страны
 */
getAllCountriesBtn.addEventListener('click', async function(){
    allCountriesArr = await getAllCountries();
    // console.log(allCountriesArr);

    showAllCountries(allCountriesArr);// выводим данные о странах на страницу
    this.style.display = 'none';// скрываем кнопку
});

/**
 * при клике на страну получаем из дата-атрибута название страны
 * по названию делаем запрос и получаем данные о стране и отображаем в том же контейнере
 */
mainContainerEl.addEventListener('click', async function(event){
    const clicked = event.target.closest('.country');// получаем элемент по которому кликнули

    if(!clicked) return;// если клик не по стране, выходим

    const countryName = clicked.dataset.country;// получаем название страны из дата-атрибута

    const country = await getCountry(countryName);// получаем данные о стране по названию
   
    showCountry(country);
});



/**
 * функция для получения всех стран
 */
async function getAllCountries(){
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();

    return data;
}

/**
 * функция для получения одной страны по ее названию
 */
async function getCountry(country){
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const data = await response.json();
    //console.log(data[0]);

    return data[0];
}



/**
 * функция для формирвоания разметки и вывода на страницу
 */
function showAllCountries(data){
    // перебираю массив со странами и формирую одну строку
    const output = data.reduce(function(acc, country){
        const countryStr = `
            <div class="country" data-country="${country.name.common}">
                <h2>${country.name.common}</h2>
                <img src="${country.flags.png}" alt="flag of the country ${country.name.common}">
            </div>
        `;
        return acc + countryStr;
    }, '');
    
    mainContainerEl.innerHTML = '';// удаляем содержимое контейнера
    mainContainerEl.insertAdjacentHTML('beforeend', output);// выводим данные в документ
}

/**
 * функция для отображения одной страны
 */
function showCountry(country){

    console.log(country);
    
    const output = `
        <div class='country-detail'>
            <div class='country-flags'>
                <img src='${country.flags.png}' alt='${country.flags.alt}'>
                <img src='${country.coatOfArms.png}' alt='Coat of arms ${country.name.official}'>
            </div>
            <div class='country-info'>
                <h2>${country.name.official}</h2>
                <p>Area: ${country.area}</p>
                <p>Population: ${country.population}</p>
                <p>Capital: ${country.capital[0]}</p>
                <p>Region: ${country.region}</p>
                <p>Borders: ${country.borders ? country.borders.join(', '): 'no borders'}</p>
                <p>Timezones: ${country.timezones.join(', ')}</p>
                <button id='reset'>Back to all countries</button>
            </div>
        </div>
    `;

    mainContainerEl.innerHTML = '';// удаляем содержимое контейнера
    mainContainerEl.insertAdjacentHTML('beforeend', output);// выводим данные в документ

    const resetBtn = document.querySelector('#reset');// получаем кнопку

    resetBtn.addEventListener('click', function(){
        showAllCountries(allCountriesArr);
    });
}