const prompt = require('prompt-sync')();

function menu() {
  console.log(`
1. Suma ➕
2. Resta ➖
3. Multiplicación ✖️
4. División ➗
5. Salir 👋`);
  return Number(prompt("Elige una opción: "));
}

function pedirNumero(texto) {
  return Number(prompt(texto));
}

function calculadora() {
  let opcion;
  do {
    opcion = menu();
    if (opcion >= 1 && opcion <= 4) {
      const a = pedirNumero("Primer número: ");
      const b = pedirNumero("Segundo número: ");

      const operaciones = {
        1: () => console.log(`Resultado: ${a + b}`),
        2: () => console.log(`Resultado: ${a - b}`),
        3: () => console.log(`Resultado: ${a * b}`),
        4: () => b === 0 ? console.log("❌ No se puede dividir entre 0") : console.log(`Resultado: ${a / b}`)
      };

      operaciones[opcion]();
    } else if (opcion !== 5) {
      console.log("⚠️ Opción inválida");
    }
  } while (opcion !== 5);

  console.log("👋 Saliendo de la calculadora...");
}

calculadora();


