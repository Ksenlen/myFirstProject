const htmlTitle = document.getElementsByTagName('h1')[0];

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

const btnPlus = document.querySelector('.screen-btn');

const percentElement = document.querySelectorAll('.other-items.percent');
const numberElement = document.querySelectorAll('.other-items.number');

const rollbackInput = document.querySelector(".rollback  input[type='range']");
const rollbackSpan = document.querySelector(".rollback  span.range-value");

const priceInput = document.getElementsByClassName("total-input")[0];
const countScreens = document.getElementsByClassName("total-input")[1];
const priceServises = document.getElementsByClassName("total-input")[2];
const fullCount = document.getElementsByClassName("total-input")[3];
const rollbackCount = document.getElementsByClassName("total-input")[4];

let screenBlocks = document.querySelectorAll('div.screen');


// const appData = {
//     title: '',
//     screens: [],
//     screenPrice: 0,
//     adaptive: true,
//     rollBack: 20,
//     allServicePrices: 0,
//     fullPrice: 0,
//     servicePercentPrice: 0,
//     services: {},

//     asking: function () {
//         do {
//             appData.title = prompt('Как называется ваш проект?');
//         } while (appData.isNumber(appData.title));


//         for (let i = 0; i < 2; i++) {
//             let name = '';
//             do {
//                 name = prompt('Какие типы экранов нужно разработать?');
//             } while (appData.isNumber(name));

//             let price = 0;
//             do {
//                 price = prompt('Сколько будет стоить данная работа?');
//             } while (!appData.isNumber(price));
//             appData.screens.push({ id: i, name: name, price: price });
//         }

//         for (let i = 0; i < 2; i++) {
//             let name = '';
//             do {
//                 name = prompt('Какой дополнительный тип услуги нужен?');
//             } while (appData.isNumber(name));

//             let price = 0;
//             do {
//                 price = prompt('Сколько это будет стоить');
//             }
//             while (!appData.isNumber(price));
//             appData.services[name] = +price;
//         }
//         appData.adaptive = confirm('Нужен ли адаптив на сайте?');
//     },

//     addPrices: function () {
//         for (let screen of appData.screens) {
//             appData.screenPrice += +screen.price;
//         }

//         for (let key in appData.services) {
//             appData.allServicePrices += appData.services[key];
//         }
//     },


//     isNumber: function (num) {
//         return !isNaN(parseFloat(num)) && isFinite(num);
//     },

//     getFullPrice: function () {
//         appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
//     },
//     getTitle: function () {
//         appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
//     },
//     getServicePercentPrices: function () {
//         appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollBack / 100));
//     },
//     getRollbackMessage: function () {
//         if (appData.fullPrice >= 30000) {
//             return 'Даем скидку в 10%';
//         } else if (appData.fullPrice >= 15000) {
//             return 'Даем скидку в 5%';
//         } else if (appData.fullPrice >= 0) {
//             return 'Скидка не предусмотрена';
//         } else {
//             return 'Что то пошло не так';
//         }
//     },

//     logger: function () {
//         for (let key in appData) {
//             console.log(appData[key]);
//         }
//     },
//     start: function () {
//         appData.asking();
//         appData.addPrices();
//         appData.getFullPrice();
//         appData.getTitle()
//         appData.getServicePercentPrices();
//         appData.logger();
//     },
// };

// appData.start();











