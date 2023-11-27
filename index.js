function calcularValores (vitoria, derrota) {
    return vitoria - derrota
}

function verificarElo (resultado){
    if(resultado <= 10){
        return 'ferro'
    }else if (resultado >=11 && resultado <=20) {
        return 'bronze'
    }else if (resultado >=21 && resultado <=50){
        return 'prata'
    }else if (resultado >=51 && resultado <=80){
        return 'ouro'
    }else if (resultado >=81 && resultado <=90){
        return 'diamante'
    }else if (resultado >=91 && resultado <=100){
        return 'lendário'
    }else if (resultado >=101){
        return 'IMORTAL'
    }
}

function mostrarMensagem (vitoria,derrota){
    const saldo = calcularValores (vitoria, derrota)
    const dizerElo = verificarElo(saldo)
    console.log(`O Herói tem o saldo de ${saldo} está no nível de ${dizerElo}.`)

}

mostrarMensagem(120,30)