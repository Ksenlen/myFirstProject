let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

const rollBack = 20;


const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};

const getAllServicePrices = function (servPr1, servPr2) {
    return servPr1 + servPr2;
};

function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices;
};

const getTitle = function (str) {
    let lowerStr = str.toLowerCase();
    let upperStr = lowerStr.replace(/^[^a-zа-яё]*([a-zа-яё])/i, function (m) {
        return m.toUpperCase();
    });
    return upperStr;
};

const getServicePercentPrices = function (fullPrice, rollBack) {
    return fullPrice - (fullPrice * (rollBack / 100));
};

const getRollbackMessage = function () {
    if (fullPrice >= 30000) {
        return 'Даем скидку в 10%';
    } else if (fullPrice >= 15000) {
        return 'Даем скидку в 5%';
    } else if (fullPrice >= 0) {
        return 'Скидка не предусмотрена';
    } else {
        return 'Что то пошло не так';
    }
};

let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
let fullPrice = getFullPrice(screenPrice, allServicePrices);
let title2 = getTitle(title);
let servicePercentPrice = getServicePercentPrices(fullPrice, rollBack);


showTypeOf(title2);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(screens.toLowerCase().split(', '));
console.log(getRollbackMessage());
console.log(servicePercentPrice);


/*
console.log(screens.length);
console.log(servicePercentPrice);

console.log(`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`);







