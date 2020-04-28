
let articles = {
    movies: [{ name: 'Pulp Fiction', score: 5 }, { name: 'Armageddon', score: 2 }],
    series: [{ name: 'Breaking Bad', score: 5 }, { name: 'House of Cards', score: 4 }]
};

// IMPRIMIR EL ARRAY RESULTANTE DE LA CONSOLA // 
function imprimeConsola() {
    console.log(articles)
}
imprimeConsola()

//Imprimir en pantalla un título “Séries” y una lista con los nombres y valoraciones de las series.

function imprimeSeries() {
    document.write(`<h1>Series</1>`)
    for (let clave of articles.series) {
        document.write(`<h2> Nombre: ${clave.name}, <br></br> Score ${clave.score} <br></br></h2>`)
    }
}
imprimeSeries()

// Imprimir en pantalla un título “Películas” y una lista con los nombres y valoraciones de las películas.

function imprimePeliculas() {
    document.write(`<h1>Peliculas</1>`)
    for (let clave of articles.movies) {
        document.write(`<h2> Nombre: ${clave.name}, <br></br> Score ${clave.score} <br></br></h2>`)
    }
}
imprimePeliculas();

// Si la valoración de la película es 5, la valoración debe aparecer en negrita y en verde.

function valoracionMasDeCinco() {
    for (let clave of articles.movies) {
        let green = ''
        if (clave.score >= 5) {
            green = `style = "color: green; font-weight: bold"`;
        }
        document.write(`<div ${green} > Nombre: ${clave.name}, <br></br> Score ${clave.score} <br></br></div>`);
    }
}

valoracionMasDeCinco()

// Si la valoración de la película es 1, la valoración debe aparecer en negrita y en rojo.
function valoracionEsUno() {
    for (let clave of articles.movies) {
        let red = ''
        if (clave.score <= 1) {
            red = `style = "color: red; font-weight: bold"`;
        }
        document.write(`<div ${red} > Nombre: ${clave.name}, <br></br> Score ${clave.score} <br></br></div>`);
    }
}

valoracionEsUno()


//  Imprimir en pantalla: Mejor película: NOMBRE - X estrellas // Mejor serie: NOMBRE - X estrellas

let peliculaMaxima = ''
let maxValoracion = 0

for (let clave in articles.score) {
    console.log(clave)
    if (articles.clave > maxValoracion) {
        maxValoracion = articles.clave
        peliculaMaxima = clave
    }
}
console.log(peliculaMaxima, maxValoracion)


// El programa debe pedir al usuario el nombre de la pelìcula o serie y el sistema debe mostrar su valoración.
let valoracion = prompt('Indique el nombre de la pelicula')

function valoracionDELaPelicula(pNombre) {
    for (let clave of pNombre.movies) {
        document.write(`<h2> Nombre: ${pNombre.movies}, <br></br> Score ${clave.score} <br></br></h2>`)
    }
}
valoracionDELaPelicula()

// Al iniciar, el programa debe iniciar preguntando al usuario un nombre de película, su valoración y un nombre de serie y su valoración.
// El sistema debe entonces guardar estos datos como nuevos objetos dentro del array de datos, una película y una serie.

