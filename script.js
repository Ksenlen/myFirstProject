const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollBack: 20,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',
    asking: function () {
        appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
        appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, сложные');

        do { appData.screenPrice = prompt('Сколько будет стоить данная работа?', '20000'); }
        while (!appData.isNumber(appData.screenPrice));

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    getAllServicePrices: function () {
        let sum = 0;
        let input = 0;
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
            } else if (i === 1) {
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
            }
            input = +prompt('Сколько это будет стоить');
            while (!appData.isNumber(input)) {
                input = prompt('Попрорбуй ещё раз. Сколько это будет стоить');
            }
            sum += Number.parseInt(input);
        }
        return sum;
    },
    getFullPrice: function () {
        return +appData.screenPrice + appData.allServicePrices;
    },
    getTitle: function () {
        let lowerStr = appData.title.trim().toLowerCase();
        let upperStr = lowerStr.replace(/^[^a-zа-яё]*([a-zа-яё])/i, function (m) {
            return m.toUpperCase();
        });
        return upperStr;
    },
    getServicePercentPrices: function () {
        return appData.fullPrice - (appData.fullPrice * (appData.rollBack / 100));
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
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.title = appData.getTitle();
        appData.servicePercentPrice = appData.getServicePercentPrices();
        appData.logger();
    },
};

appData.start();











