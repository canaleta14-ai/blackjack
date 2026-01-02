// Función que calcula el valor numérico de una carta
const valorCarta = (carta) => {
    const valor = carta.slice(0, -1);
    return isNaN(valor) ? (valor === 'A' ? 11 : 10) : Number(valor);
};

// Función que calcula el valor total de una mano de cartas, ajustando los ases
const valorMano = (cartas) => {
    let valor = 0;
    let ases = 0;

    cartas.forEach(carta => {
        valor += valorCarta(carta);
        if (carta.startsWith('A')) ases++;
    });

    while (valor > 21 && ases > 0) {
        valor -= 10;
        ases--;
    }

    return valor;
}

export { valorCarta, valorMano };
