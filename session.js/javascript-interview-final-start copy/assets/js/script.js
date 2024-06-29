const allgerne = document.querySelector("#allgerne");
const movieThumb = document.querySelector("movieThub")

for(let i=0; a<allMovies; i++){
    allgerne.innerHTML += 
    `
    <option value="${i}">${allMovies[i].gerne}</option>
    `;
}

function loadMovies(g){
    console.log(g);
}
let allMoviesHTML =
for(let i=0; i<8; i++){
    movieThumb.innerHTML =+ `
                <li>
                        <h4>${allMovies[g].title}Title</h4>
                        <img src="assets/img/ballerina.png" alt="">
                        <p>desc</p>
                        <p>Length: 100 min</p>
                        <p>Data: 10-20-2023</p>
                    </li> 
                    `;
}

