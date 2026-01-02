// Función que determina el ganador
const determinarGanador = (jugadores) => {
    const computadora = jugadores[1];
    const jugador = jugadores[0];
    let mensaje = '';

    if (jugador.puntos > 21) {
        mensaje = `${jugador.nombre} pierde (se pasó de 21).`;
    } else if (computadora.puntos > 21) {
        mensaje = `${jugador.nombre} gana (computadora se pasó de 21).`;
    } else if (jugador.puntos > computadora.puntos) {
        mensaje = `${jugador.nombre} gana (${jugador.puntos} > ${computadora.puntos}).`;
    } else if (computadora.puntos > jugador.puntos) {
        mensaje = `${jugador.nombre} pierde (${jugador.puntos} < ${computadora.puntos}).`;
    } else {
        mensaje = `${jugador.nombre} empata con la computadora.`;
    }

    console.log(mensaje);
    alert(mensaje);
}

export { determinarGanador };
