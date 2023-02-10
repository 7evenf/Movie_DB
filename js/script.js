/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const promoAdv = document.querySelectorAll('.promo__adv img'),
      promoBg = document.querySelector('.promo__bg'),
      promoGenre = promoBg.querySelector('.promo__genre'),
      header = document.querySelector('header'),
      promoInteractiveList = document.querySelector('.promo__interactive-list');


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


function removingAd() {
    promoAdv.forEach(elem => {
        elem.remove();
    });
}

removingAd();


function сhangeGenre() {
    promoGenre.textContent = 'ДРАМА';
}

сhangeGenre();


function bgImg() {
    promoBg.style.cssText = 'background-image: url("img/bg.jpg")';
}

bgImg();


function changeViwedMovies({movies}) {
    promoInteractiveList.innerHTML = '';
    
    movies.sort();
    
    movies.forEach((elem, i) => {
        promoInteractiveList.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${elem}
                <div class="delete"></div>
            </li>
        `;
    });
}

changeViwedMovies(movieDB);