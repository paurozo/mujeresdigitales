const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const preguntar = (pregunta) => {
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => resolve(respuesta));
    });
};


const Suma = (numero1, numero2) => numero1 + numero2;
const Resta = (numero1, numero2) => numero1 - numero2;
const Multiplicacion = (numero1, numero2) => numero1 * numero2;
const Division = (numero1, numero2) => (numero2 !== 0 ? numero1 / numero2 : "Error: División por 0 ❌");

function menu() {
    console.log("😊 Bienvenidos a la Calculadora 😊");
    console.log("1. Suma ➕");
    console.log("2. Resta ➖");
    console.log("3. Multiplicación ✖️");
    console.log("4. División ➗");
    console.log("5. Salir 👋");
}

async function main() {
    let Salir = true;
    while (Salir) {
        menu();
        const opcionIngresada = await preguntar("Selecciona una opción: ");

        switch (opcionIngresada) {
            case "1":
                console.clear();
                console.log("=== Suma ===");
                var numero1 = parseFloat(await preguntar("Ingresa el primer número: "));
                var numero2 = parseFloat(await preguntar("Ingresa el segundo número: "));
                console.log("El resultado de la suma es:" + Suma(numero1, numero2));
                break;

            case "2":
                console.clear();
                console.log("=== Resta ===");
                var numero1 = parseFloat(await preguntar("Ingresa el primer número: "));
                var numero2 = parseFloat(await preguntar("Ingresa el segundo número: "));
                console.log("El resultado de la resta es:" + Resta(numero1, numero2));
                break;

            case "3":
                console.clear();
                console.log("=== Multiplicación ===");
                var numero1 = parseFloat(await preguntar("Ingresa el primer número: "));
                var numero2 = parseFloat(await preguntar("Ingresa el segundo número: "));
                console.log("El resultado de la multiplicación es:" + Multiplicacion(numero1, numero2));
                break;

            case "4":
                console.clear();
                console.log("=== División ===");
                var numero1 = parseFloat(await preguntar("Ingresa el primer número: "));
                var numero2 = parseFloat(await preguntar("Ingresa el segundo número: "));
                console.log("El resultado de la división es:" + Division(numero1, numero2));
                break;

            case "5":
                console.log("Saliendo de la calculadora 👋");
                Salir = false;
                rl.close();
                return;

            default:
                console.log("❌ Opción no válida. Intenta de nuevo.");
        }
    }
}


main();
