//cuenta
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

let cuentas = [
    {
        numero: "101",
        propietario: "Jefferson",
        pin: "1234",
        saldo: 50000000,
    },
    {
        numero: "102",
        propietario: "Andrea",
        pin: "5678",
        saldo: 98000000,
    },
    {
        numero: "103",
        propietario: "Paola",
        pin: "9876",
        saldo: 105000000,
    },
    {
        numero: "104",
        propietario: "Melissa",
        pin: "4321",
        saldo: 0,
    },
];
// cuenta logueada 

let cuentaActiva= null;


const preguntar=(pregunta)=>{
    return new Promise((resolve) =>{
        rl.question(pregunta,(respuesta)=> resolve(respuesta))
    })
};

const menu =async() =>{
    console.log("\n====MENU====");
    Console.log(
         `Usuario: ${cuentaActiva.propietario} | Cuenta: ${cuentaActiva.numero}`
    );
    console.log("1. Consultar saldo ");
    console.log("2. Depositar dinero");
    console.log("3. Retirar dinero");
    console.log("4. Cerrar sesion");
    console.log("salir\n");

const opcionIngresada= await preguntar ("selecciona una opcion: ");

switch(opcionIngresada){
    case "1":
        console.clear();
        console.log("===Consulta de saldo===");
        console.log(`\n💵 tu saldo actual es : $${cuentaActiva.saldo}`);
        breack;
        
    case "2":
        console.clear();
        console.log("====Depositar dinero===");
         const valorDeposito=Number(
            await preguntar ("Monto a despositar: ")
         );

         if (valorDeposito > 0) {
                cuentaActiva.saldo += valorDeposito;
                console.log(
                    `✅ Deposito exitoso. Su nuevo saldo es: $${cuentaActiva.saldo}`
                );
            } else {
                console.log("⚠️ Monto invalido");
            }

            break;
        case "3":
            console.clear();
            console.log("===== Retirar dinero =====");
            const valorRetiro = Number(await preguntar("Monto a retirar: "));

            if (valorRetiro > 0 && valorRetiro <= cuentaActiva.saldo) {
                cuentaActiva.saldo -= valorRetiro;
                console.log(
                    `✅ Retiro exitoso. Su nuevo saldo es: $${cuentaActiva.saldo}`
                );
            } else {
                console.log("⚠️ Fondos insuficientes o Monto invalido");
            }

            break;
        case "4":
            console.clear();
            console.log(
                "===== Sesion cerrada, ¡Hasta luego! ====="
            );
            cuentaActiva === null;
            return iniciar();
        case "5":
            console.log(
                "===== Gracias por usar el cajero, ¡Hasta luego! ====="
            );
            rl.close();
            return;
        default:
            console.log("❌ Opcion no valida");
            break;
    }

    menu();
};

const iniciar = async () => {
    console.clear();
    console.log("===== BIENVENIDOS AL CAJERO =====");

    const numeroIngresado = await preguntar("Digite el numero de su cuenta: ");
    const pinIngresado = await preguntar("Digite el pin: ");

    const cuentaEncontrada = cuentas.find(
        (cuenta) =>
            cuenta.numero === numeroIngresado && cuenta.pin === pinIngresado
    );

    if (cuentaEncontrada) {
        cuentaActiva = cuentaEncontrada;
        console.log(
            `\n✅ Bienvenida/o ${cuentaActiva.propietario ?? "Invitado"} ✅`
        );
        menu();
    } else {
        console.log("❌ Credenciales invalidas ❌");
        rl.close();
    }
};

iniciar();
        


