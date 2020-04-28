let articles = {
    movies: [{ name: 'Pulp Fiction', score: 5 }, { name: 'Armageddon', score: 2 }],
    series: [{ name: 'Breaking Bad', score: 5 }, { name: 'House of Cards', score: 4 }]
};


// Al iniciar, el programa debe iniciar preguntando al usuario un nombre de película, su valoración y un nombre de serie y su valoración.
// El sistema debe entonces guardar estos datos como nuevos objetos dentro del array de datos, una película y una serie.

let valoracion2 = prompt('Indique un nombre de pelicula y su valoracion')
let valoracion3 = prompt('Indique un nombre de serie y su valoracion')

function añadirPelicula(pPelicula, pValoracion) {
    for (let clave in articles.movies) {
        clave.movies.push(pPelicula, pValoracion)
    }
}

console.log(añadirPelicula())

function añadirSerie(pSerie, pValoracion) {
    for (let clave in articles.series) {
        clave.series.push(pSerie, pValoracion)
    }
}
console.log(añadirSerie())