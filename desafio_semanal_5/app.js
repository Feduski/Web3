fetch('https://randomuser.me/api/') 
  .then(function(respuesta) {
    return respuesta.json();
  })
  .then(function(myJson) {
    const usuario = myJson.results[0];
    
    const persona = {
        nombre: usuario.name.first,
        apellido : usuario.name.last,
        lugar : usuario.location,
        telefono : usuario.phone,
        mail : usuario.email,
        foto : usuario.picture.medium
    }
    
    crearTarjeta(persona);

  })

function crearTarjeta(persona) {
    let body = document.getElementById('main');
    body.innerHTML = `
            <section class="tarjeta">
              <img src="${persona.foto}">
              <h1>Hola soy <span>${persona.nombre} ${persona.apellido}</span></h1>
              <h4>Desarrollador Web Frontend</h4>
              <hr>
               <div id="mailbox"> 
                <a href="${persona.foto}">${persona.mail}</a>
                </div>
              <h6>Localidad:</h6>
              <h5 class="textt">${persona.lugar.city}, ${persona.lugar.country}</h5>
              <h6>Teléfono:</h6>
              <h5 class="textt">${persona.telefono}</h5>
            </section>
              `;
  };
