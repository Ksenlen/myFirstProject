const books = document.querySelectorAll('.book');
const body = document.querySelector('body');
const bookName = document.querySelectorAll('a');
const adv = document.querySelector('.adv');
const bookLi3 = books[0].querySelectorAll('li');
const bookLi5 = books[5].querySelectorAll('li');
const bookLi6 = books[2].querySelectorAll('li');


books[1].after(books[0]);
books[4].after(books[3]);
books[5].after(books[2]);

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

bookName[4].textContent = 'Книга 3. this и Прототипы Объектов';

adv.remove();

bookLi3[1].after(bookLi3[3]);
bookLi3[3].after(bookLi3[6]);
bookLi3[6].after(bookLi3[8]);
bookLi3[9].after(bookLi3[2]);

bookLi5[1].after(bookLi5[9]);
bookLi5[4].after(bookLi5[2]);
bookLi5[7].after(bookLi5[5]);


bookLi6[8].insertAdjacentHTML('afterend', 'Глава 8: За пределами ES6');
