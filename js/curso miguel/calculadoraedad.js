const prompt = require('prompt-sync')()
let nombres = prompt("resgistre nombres: ");
let apellidos=prompt("registre apellidos: ");
let fecha_nacimiento=prompt("registre año de nacimiento: ");

let edad=(2025-Number(fecha_nacimiento));

let mensage=("hola miguel tienes estos años de edad: ");
console.log(mensage+edad);



