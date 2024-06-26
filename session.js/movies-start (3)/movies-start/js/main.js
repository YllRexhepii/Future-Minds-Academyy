const navigation = document.querySelector('#navigation');
const allgenres = document.querySelector('.allgenres');
const allMoviesListHTML = document.querySelector('.allMoviesListHTML');

let buildNavHTML = "<ul>";
for(let i=0; i<topNavigation.length; i++){
    buildNavHTML +=`<li><a href="#">${topNavigation[i]}></a></li>`;
};

buildNavHTML += "</ul>";
navigation.innerHTML = buildNavHTML;


let buildGenres = "";

for(let i=0; i<allMovies.length; i++){
    buildGenres += `<li><a href="javascript: loadGenres(${i})">${allMovies[i].genres}</a></li>`
};

allgenres.innerHTML = buildGenres;

let loadGenres = function(g){

};