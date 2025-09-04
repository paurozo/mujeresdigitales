//const numero =5;

//if (isNaN(numero)){    
   // console.log ("entrada invalida no es un numero");
//   return;
 //} else if (numero % 2 === 0) {
 //   console.log ("el numero es par");
 //} else {
   // console.log ("es impar");
 //}
//

const Terminal = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

Terminal.question("Ingrese un número: ", (n) => {
    const numero2 = Number(n);
    if (isNaN(numero2)) {
        console.log("El valor no es un número");
        // Con sabemos % calcula el resduo, si el resultado es 0 es par, si no es impar
    } else if (numero2 % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }

    Terminal.close();
});
