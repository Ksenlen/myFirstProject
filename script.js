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
        this.addTitle();
        startBtn.addEventListener('click', this.start.bind(this));
        btnPlus.addEventListener('click', this.addScreenBlock);
        resetBtn.addEventListener("click", this.reset.bind(this));
        this.getRollback();

    },

    addTitle: function () {
        document.title = htmlTitle.textContent;
    },
    showResult: function () {
        priceInput.value = this.screenPrice;
        priceServises.value = this.servicePricesNumber + this.servicePricesPercent;
        fullCount.value = this.fullPrice;
        rollbackCount.value = this.servicePercentPrice;
        countScreens.value = this.countScreen;

    },
    addScreens: function () {
        screenBlocks = document.querySelectorAll('div.screen');
        screenBlocks.forEach((screen, index) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;
            if (input.value !== "" && select.value !== "") {
                this.screens.push({
                    id: index,
                    name: selectName,
                    price: +select.value * +input.value,
                    count: +input.value
                });
            } else {
                this.screens.splice(0);
            }

        });


    },
    addServisec: function () {
        percentElement.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');
            if (check.checked) {
                this.servicesPerscent[label.textContent] = +input.value;
            }

        });

        numberElement.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');
            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value;
            }

        });
    },
    addScreenBlock: function () {
        screenBlocks = document.querySelectorAll('div.screen');
        const cloneScreenBlocks = screenBlocks[0].cloneNode(true);
        const cloneInput = cloneScreenBlocks.querySelector('input');
        cloneInput.value = '';
        screenBlocks[screenBlocks.length - 1].after(cloneScreenBlocks);
    },
    addPrices: function () {
        for (let screen of this.screens) {
            this.screenPrice += +screen.price;
            this.countScreen += +screen.count;
        }

        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key];
        }

        for (let key in this.servicesPerscent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPerscent[key] / 100);
        }


        this.fullPrice = +this.screenPrice + this.servicePricesPercent + this.servicePricesNumber;
        this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollBack / 100));

    },
    getRollback: function () {
        const changeRollback = (event) => {
            rollbackSpan.textContent = event.target.value;
            this.rollBack = +event.target.value;
        };


        rollbackInput.addEventListener("change", changeRollback);
        rollbackInput.addEventListener('input', function (event) {
            rollbackSpan.textContent = event.target.value;
            appData.rollBack = +event.target.value;
            appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollBack / 100));
            rollbackCount.value = appData.servicePercentPrice;
        });
    },


    hideBtn: function () {
        startBtn.style.display =
            startBtn.style.display == "none" ? "block" : "none";
        resetBtn.style.display =
            resetBtn.style.display == "none" ? "block" : "none";
    },

    cleanFields: function () {
        priceInput.value = 0;
        priceServises.value = 0;
        fullCount.value = 0;
        rollbackCount.value = 0;
        countScreens.value = 0;
        const checkBox = document.querySelectorAll("input[type=checkbox]");
        checkBox.forEach((items) => {
            items.checked = false;
        });

        const allLeftInputs = document.querySelectorAll(
            "input[type = 'text'] , select, .screen-btn"
        );
        allLeftInputs.forEach((item) => {
            item.disabled = false;
        });

        this.screens.length = 0;
        const screenBlock = document.querySelector(".screen");
        const select = screenBlock.querySelector("select");
        select.selectedIndex = 0;
        const input = screenBlock.querySelector("input");
        input.value = "";

        this.rollback = 0;
        rollbackInput.value = 0;
        rollbackSpan.textContent = 0 + "%";
    },
    removeElement: function () {
        let elems = document.querySelectorAll(".screen");
        for (let i = elems.length - 1; i > 0; i--) {
            elems[i].remove();
        }
    },
    disableInputs: function () {
        const allLeftInputs = document.querySelectorAll(
            "input[type = 'text'] , select, .screen-btn"
        );
        allLeftInputs.forEach((item) => {
            item.disabled = true;
        });
    },
    logger: function () {
        for (let key in this) {
            console.log(this[key]);
        }
    },
    start: function () {
        let screens = document.querySelector('.screen');
        let input = screens.querySelector('input');

        if (input.value !== "") {
            this.addScreens();
            this.addServisec();
            this.addPrices();
            this.showResult();
            // appData.logger();

        }
        this.disableInputs();
        this.hideBtn();
    },
    reset: function () {
        this.hideBtn();
        this.removeElement();
        this.cleanFields();
    }
};

appData.init();








