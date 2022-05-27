const title = 'Урок 2';
const screens = 'Простые, Сложные, Интерактивные';
const screenPrice = 24567;
const rollBack = 20;
const fullPrice = 1000000;
const adaptive = true;

console.log(typeof (title));
console.log(typeof (fullPrice));
console.log(typeof (adaptive));
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`);
const loverScreens = screens.toLowerCase();
console.log(loverScreens.split(', '));
console.log(fullPrice * (rollBack / 100));