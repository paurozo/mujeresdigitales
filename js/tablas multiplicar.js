for (let multiplicando = 1; multiplicando <= 10; multiplicando++) {
    console.log(`Número ${multiplicando}`);  

    let multiplicador = 1;
    while ( multiplicador <= 10) {
        console.log(`${multiplicando} x ${multiplicador} = ${multiplicando * multiplicador}`);
        multiplicador++;
    }
}