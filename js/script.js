"use strict";

const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//         b = prompt("На сколько оцените его?", "");

//     if (a != null && b != null && a != '' && b != '' && a.length <= 50 && b.length <= 50) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }
// }

// let i = 0;
// while (i < 2) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//         b = prompt("На сколько оцените его?", "");

//     if (a != null && b != null && a != '' && b != '' && a.length <= 50 && b.length <= 50) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }
//     i++;
// }

let i = 0;
do {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "");

    if (a != null && b != null && a != '' && b != '' && a.length <= 50 && b.length <= 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
    i++;
} while (i < 2);

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довльно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);