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


const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollBack: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    countScreen: 0,
    servicePercentPrice: 0,
    servicesPerscent: {},
    servicesNumber: {},

    init: function () {
        appData.addTitle();
        startBtn.addEventListener('click', appData.start);
        btnPlus.addEventListener('click', appData.addScreenBlock);
        appData.getRollback();
    },

    addTitle: function () {
        document.title = htmlTitle.textContent;
    },
    showResult: function () {
        priceInput.value = appData.screenPrice;
        priceServises.value = appData.servicePricesNumber + appData.servicePricesPercent;
        fullCount.value = appData.fullPrice;
        rollbackCount.value = appData.servicePercentPrice;
        countScreens.value = appData.countScreen;

    },
    addScreens: function () {
        screenBlocks = document.querySelectorAll('div.screen');
        screenBlocks.forEach(function (screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;
            if (input.value !== "" && select.value !== "") {
                appData.screens.push({
                    id: index,
                    name: selectName,
                    price: +select.value * +input.value,
                    count: +input.value
                });
            } else {
                appData.screens.splice(0);
            }

        });


    },
    addServisec: function () {
        percentElement.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');
            if (check.checked) {
                appData.servicesPerscent[label.textContent] = +input.value;
            }

        });

        numberElement.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');
            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }

        });
    },
    addScreenBlock: function () {
        const cloneScreenBlocks = screenBlocks[0].cloneNode(true);
        screenBlocks[screenBlocks.length - 1].after(cloneScreenBlocks);
    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
            appData.countScreen += +screen.count;
        }

        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }

        for (let key in appData.servicesPerscent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPerscent[key] / 100);
        }


        appData.fullPrice = +appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber;
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollBack / 100));

    },
    getRollback: function () {
        const changeRollback = function (event) {
            rollbackSpan.textContent = event.target.value;
            appData.rollBack = +event.target.value;
        };
        rollbackInput.addEventListener("input", changeRollback);
        rollbackInput.addEventListener("change", changeRollback);
        console.log(appData);
    },



    logger: function () {
        for (let key in appData) {
            console.log(appData[key]);
        }
    },
    start: function () {
        let screens = document.querySelector('.screen');
        let input = screens.querySelector('input');

        if (input.value !== "") {
            appData.addScreens();
            appData.addServisec();
            appData.addPrices();
            appData.showResult();
            // appData.logger();
        }
    }
};

appData.init();







