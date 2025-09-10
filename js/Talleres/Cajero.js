//cuenta
const rl = require("readline").createInterface({
     input:prosess.stdin,
     output:process.stdout,
});

let account ={
    numero_cuenta:"1001 ",
    propietario:"Jefferson ",
    pin:" 1234",
    saldo:5000000
};

/**TODO:
 * multi seesiones
 
 */
/* 
*1.consultar saldon 
*2.depositar
*3.retirar dinero 
*4.salir
*/

const preguntar=(pregunta)=>{
    return new Promise((resolve) =>{
        rl.question(pregunta,(respuesta)=> resolve(respuesta))
    })
}

constiniciar= () =>{
    console.log("===== BIENVENIDOS AL CAJERO====")
  
    const numeroIngresado = await= preguntar("digite el numero de su cuenta: ");
    const pinIngresado = await= preguntar ("deijite el pin: ");

    if (numeroIngresado=== cuenta.numero && pinIngresado=== cuenta.pin) {
        console.log("todo melo");

    }else{
        console.log("pailas");
        rl.close();
    }

}

