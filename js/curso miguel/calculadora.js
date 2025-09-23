/*
Crear calculadora que a travez de un menu de opciones se seleccione: 
1. Suma
2. Multiplicacion
3. Resta
4. Salir

La caculadora al entrar en los operadores de suma resta multiplicacion debe pedir dos datos e imprimir el resultado de la operacion

ejemplo: 

Menu: 
1. Suma.
2. Multiplicacion
3. Resta

2

Ingrese el primer numero 
10
Ingrese segundo numero:
2
El resultado es: 
20

let menu = pedir datos 
let dato1 = 0;
let dato2=  0;

if(menu==1)(
    dato1=pido eldato
    dato2 = pido el dato1
    imprimo el resultado

)else if(menu == 2){

}else if(menu == 3){

}else {
    imprimes que se digito una opcion incorrecdta 
}


*/

const prompt = require("prompt-sync")();
let seleccion = prompt(
  "Elija una de las siguientes opciones: " +
    "\n 1. Suma" +
    "\n 2. Resta" +
    "\n 3. Multiplicacion \n"
);

let primer_dato;
let segundo_dato;
let total;

if (seleccion == 1 || seleccion == 2 || seleccion == 3) {
  primer_dato = prompt("registrar el primer numero: ");
  segundo_dato = prompt("registrar el segundo numero: ");
}

if (seleccion == "1") {
  total = Number(primer_dato) + Number(segundo_dato);
  console.log("el total de la suma es" + " " + total);
} else if (seleccion == "2") {
  total = Number(primer_dato) - Number(segundo_dato);
  console.log("el total de la resta es" + " " + total);
} else if (seleccion == "3") {
  total = Number(primer_dato) * Number(segundo_dato);
  console.log("el total de la multiplicacion es" + " " + total);
} else {
  console.log("opcion incorrecta");
}
