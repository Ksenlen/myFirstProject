const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollBack: 20,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},

    asking: function () {
        appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
        // appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, сложные');

        // do { appData.screenPrice = prompt('Сколько будет стоить данная работа?', '20000'); }
        // while (!appData.isNumber(appData.screenPrice));

        for (let i = 0; i < 2; i++) {
            let name = prompt('Какие типы экранов нужно разработать?');
            let price = 0;

            do {
                price = prompt('Сколько будет стоить данная работа?');
            } while (!appData.isNumber(price));
            appData.screens.push({ id: i, name: name, price: price });
        }

        for (let i = 0; i < 2; i++) {
            let name = prompt('Какой дополнительный тип услуги нужен?');
            let price = 0;

            do {
                price = prompt('Сколько это будет стоить');
            }
            while (!appData.isNumber(price));
            appData.services[name] = +price;
        }
        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },

    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },


    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    getFullPrice: function () {
        appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
    },
    getTitle: function () {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
    },
    getServicePercentPrices: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollBack / 100));
    },
    getRollbackMessage: function () {
        if (appData.fullPrice >= 30000) {
            return 'Даем скидку в 10%';
        } else if (appData.fullPrice >= 15000) {
            return 'Даем скидку в 5%';
        } else if (appData.fullPrice >= 0) {
            return 'Скидка не предусмотрена';
        } else {
            return 'Что то пошло не так';
        }
    },

    logger: function () {
        for (let key in appData) {
            console.log(appData[key]);
        }
    },
    start: function () {
        appData.asking();
        appData.addPrices();
        appData.getFullPrice();
        appData.getTitle()
        appData.getServicePercentPrices();
        appData.logger();
    },
};

appData.start();











