function Taxi (tipoMotor, capacidadL) {
    this.tipoMotor = tipoMotor;
    this.capacidadL = capacidadL;
    alert('Se ha creado un objeto taxi con tipo motor: ' + this.tipoMotor);
    alert('Se ha creado un objeto taxi con capacidad de : ' + this.capacidadL + ' litros');     
}
function ejemploObjetos(){
    let taxi1 = new Taxi("Diesel", 40);
    let taxi2 = new Taxi("Gasolina", 35);
}

/*
Pongo el HTML acá porque en el Campus no deja poner archivo .rar para poner la carpeta :(
HTML:
<!DOCTYPE html>
<html>
    <head>
        <title>Desafío N°4</title><meta charset="utf-8">
    </head>
    <body>
        <div id="cabecera">
            <h2>Objetos</h2>
            <h3>Propiedades y Métodos</h3>
            <div style="color:blue;" id ="pulsador" onclick="ejemploObjetos()"> Probar </div>
        </div>
    </body>
    <script src="./desafio_semanal_4.js"></script>
</html>
*/