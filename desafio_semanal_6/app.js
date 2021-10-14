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
    let mayus = poke.name[0].toUpperCase();
    let restoDelPokemon = poke.name.slice(1);
    let nombredelPokemon = mayus + restoDelPokemon
    let boton = `<button id ="btn" onclick="cargarPokemon('${poke.url}')">${nombredelPokemon}</button>`;
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
    <h3>${nombredelPokemon}</h3>
    <img src="${poke.sprites.front_default}">
    `
    let contenedor = document.getElementById("contenedor-carta")

    contenedor.innerHTML=carta;
}