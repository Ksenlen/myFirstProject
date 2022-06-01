const rollBack = 20;

let title;
let screens;
let screenPrice;
let adaptive;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
    title = prompt('Как называется ваш проект?');
    screens = prompt('Какие типы экранов нужно разработать?');

    do { screenPrice = prompt('Сколько будет стоить данная работа?'); }
    while (!isNumber(screenPrice));

    adaptive = confirm('Нужен ли адаптив на сайте?');
};

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};

const getAllServicePrices = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?')
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?')
        }
        sum += +prompt('Сколько это будет стоить?');
    }
    return sum;
};

function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices;
};

const getTitle = function () {
    let lowerStr = title.trim().toLowerCase();
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

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
title = getTitle();
servicePercentPrice = getServicePercentPrices(fullPrice, rollBack);


showTypeOf(title);
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
*/






