'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const promoAdv = document.querySelectorAll('.promo__adv img'),
      promoBg = document.querySelector('.promo__bg'),
      promoGenre = promoBg.querySelector('.promo__genre'),
      promoInteractiveList = document.querySelector('.promo__interactive-list'),
      form = document.querySelector('form.add'),
      inputForm = form.querySelector('.adding__input'),
      checkbox = form.querySelector('[type="checkbox"]');
      
    
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };


    const removingAdv = (ad) => {
        ad.forEach(elem => {
            elem.remove();
        });
    };


    const makeChanges = (genre, promoBag) => {
        genre.textContent = 'ДРАМА';
        promoBag.style.cssText = 'background-image: url("img/bg.jpg")';
    };


    const sortArr = (films) => {
        films.sort();
    };


    function addNewFilms() {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            let newFilm = inputForm.value;
            const favorite = checkbox.checked;


            if (newFilm) {

                if (newFilm.length > 21) {
                    newFilm = `${newFilm.substr(0, 21)}...`;
                } 

                if (favorite) {
                    console.log('Your film added to favorite');
                }

                movieDB.movies.push(newFilm);  
                sortArr(movieDB.movies);
                changeViwedMovies(movieDB.movies, promoInteractiveList);
                event.target.reset();
            } 
        });
    }


    function changeViwedMovies(films, parent) {
        parent.innerHTML = '';
        sortArr(films);

        films.forEach((elem, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${elem}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((item, i) => {
            item.addEventListener('click', () => {
                item.parentElement.remove();
                movieDB.movies.splice(i, 1);

                changeViwedMovies(films, parent);
            });
        });
    }

    
    
    

    
    removingAdv(promoAdv);
    makeChanges(promoGenre, promoBg);
    changeViwedMovies(movieDB.movies, promoInteractiveList);
    addNewFilms();


});