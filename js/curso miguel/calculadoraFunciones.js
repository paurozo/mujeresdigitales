function menu() {
    const prompt = require('prompt-sync')()
    let seleccion = prompt("Elija una de las siguientes opciones: " +
        "\n 1. Suma" +
        "\n 2. Resta" +
        "\n 3. Multiplicacion \n");
    return seleccion;
}

function suma(numero1, numero2) {
    console.log("el resultado es: " + (numero1 + numero2));
}

function multiplicar(numero3, numero4) {
    console.log("el resultado es: " + (numero3 * numero4));
}

function Resta(numero5, numero6) {
    console.log("el resultado es: " + (numero5 - numero6));
}

function dato_entrada() {
    const prompt = require('prompt-sync')()
    let dato = prompt("registrar un numero: ");
    return Number(dato);
}

function calculadora() {
    let opcion_menu = menu();
     let primer_dato;
     let segundo_dato;
    if (opcion_menu == 1 || opcion_menu == 2 || opcion_menu == 3) {
        primer_dato = dato_entrada();
        segundo_dato = dato_entrada();
    }
    if (opcion_menu == 1) {
        //suma
        suma(primer_dato, segundo_dato);
    } else if (opcion_menu == 2) {
        //resta
        Resta(primer_dato,segundo_dato);
    } else if (opcion_menu == 3) {
        //multiplicacion
        multiplicar(primer_dato,segundo_dato);
    } else {
        //imprimir error
        console.log("numero invalido");
    }

}

calculadora();


