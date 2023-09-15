"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMoviesDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMoviesDB.count >= 10 && personalMoviesDB < 30) {
    console.log('Вы классический зритель');
} else if (personalMoviesDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка')
}
console.log(personalMoviesDB);
