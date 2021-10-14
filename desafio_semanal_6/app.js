function cargarListado(){
    fetch("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0")
    .then(function (response){
        return response.json();
    })
    .then(function(objetoJson){
        pokemons = objetoJson.results;
        pokemons.forEach(element => {
            crearBoton(element)
        });
    })
}
cargarListado()


function crearBoton(poke) {
    let boton = `<button onclick="cargarPokemon('${poke.url}')">${poke.name}</button>`;
    document.getElementById("contenedor-listado").innerHTML+=boton
}   

function cargarPokemon(url){
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(objetoJson){
        const carga = objetoJson;
        crearCarta(carga);
    })
}

function crearCarta(poke){
    let mayus = poke.name[0].toUpperCase();
    let restoDelPokemon = poke.name.slice(1);
    let nombredelPokemon = mayus + restoDelPokemon
    
    let carta = `
    <h2>${nombredelPokemon}</h2>
    <img src="${poke.sprites.front_default}">
    `
    let contenedor = document.getElementById("contenedor-carta")

    contenedor.innerHTML=carta;
}