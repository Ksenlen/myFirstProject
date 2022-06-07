const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollBack: 20,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: [],

    asking: function () {
        do {
            appData.title = prompt('Как называется ваш проект?');
        } while (appData.isNumber(appData.title));


        for (let i = 0; i < 2; i++) {
            let name = '';
            do {
                name = prompt('Какие типы экранов нужно разработать?');
            } while (appData.isNumber(name));

            let price = 0;
            do {
                price = prompt('Сколько будет стоить данная работа?');
            } while (!appData.isNumber(price));
            appData.screens.push({ id: i, name: name, price: price });
        }

        for (let i = 0; i < 2; i++) {
            let name = '';
            do {
                name = prompt('Какой дополнительный тип услуги нужен?');
            } while (appData.isNumber(name));

            let price = 0;
            do {
                price = prompt('Сколько это будет стоить');
            }
            while (!appData.isNumber(price));
            appData.services.push({ id: i, name: name, price: price });
        }
        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },

    addPrices: function () {
        // for (let screen of appData.screens) {
        //     appData.screenPrice += +screen.price;
        // }
        appData.screenPrice = appData.screens.reduce(function (total, amount) {
            return total + (+amount.price);
        }, 0);


        for (let servis of appData.services) {
            appData.allServicePrices += +servis.price;
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

















