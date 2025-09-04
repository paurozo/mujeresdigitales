console.log("Ejemplo de If - else");
const n = 15;

if (isNaN(n)){
    console.log("El valor no es un número");
} else if (n % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}

console.log("Ejemplo de Switch - case");
const dia = 3;

switch (dia){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");  
        break;
    case 5:
        console.log("Viernes"); 
        break;
    case 6:
        console.log("Sábado"); 
        break;
    case 7:
        console.log("Domingo"); 
        break;
    default:
        console.log("No existe ese dia");
        break;
}


console.log("Ejemplo de For");
for (let i = 1; i <= 10; i++) {
    console.log(`Número ${i}`);
}

console.log("Ejemplo de While");
let contador = 1;

while (contador <= 5) {
    console.log(`Número ${contador}`);
    contador++;
}   

