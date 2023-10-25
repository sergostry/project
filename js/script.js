"use strict";


const personalMoviesDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMoviesDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMoviesDB.count == ''|| personalMoviesDB.count == null || isNaN(personalMoviesDB.count)) {
            personalMoviesDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');

            if (a != null && b != null &&  a!= '' && b != '' && a.length < 50) {
                personalMoviesDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        
        }
    },
    detectPersonalLevel: function () {
        if (personalMoviesDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMoviesDB.count >= 10 && personalMoviesDB < 30) {
            console.log('Вы классический зритель');
        } else if (personalMoviesDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка')
        }
    },
    showMyDB: function (hidden) {
        if (!hidden){
            console.log(personalMoviesDB);
        }
    },
    writeYouGeners: function () {
        for (let i = 1; i <= 3; i++) {
            personalMoviesDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        }
    }
};
