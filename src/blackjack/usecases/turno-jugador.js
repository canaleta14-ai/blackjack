import { pedirCarta } from './pedir-carta.js';
import { valorMano } from './valor-carta.js';
import { mostrarCartasJugadores, actualizarPuntuaciones } from './ui.js';
import { getJugador, getJugadores, getComputadoraJugo } from '../data/estado-juego.js';
import { PUNTOS_MAXIMOS } from '../data/constantes.js';

/**
 * Ejecuta el turno del jugador
 * @param {Function} callbackFinTurno - Callback a ejecutar si el jugador pierde
 */
export const turnoJugador = (callbackFinTurno) => {
    const jugador = getJugador(0);
    if (!jugador.activo) return;

    const carta = pedirCarta();
    jugador.cartas.push(carta);
    jugador.puntos = valorMano(jugador.cartas);
    
    console.log(`${jugador.nombre} pide:`, carta, 'Puntos:', jugador.puntos);

    mostrarCartasJugadores(getJugadores(), getComputadoraJugo());
    actualizarPuntuaciones(getJugadores(), getComputadoraJugo());

    if (jugador.puntos > PUNTOS_MAXIMOS) {
        console.log(`${jugador.nombre} pierde`);
        jugador.activo = false;
        callbackFinTurno();
    }
};
