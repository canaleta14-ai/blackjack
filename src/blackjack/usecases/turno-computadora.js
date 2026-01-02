import { pedirCarta } from './pedir-carta.js';
import { valorMano } from './valor-carta.js';
import { mostrarCartasJugadores, actualizarPuntuaciones } from './ui.js';
import { determinarGanador } from './ganador.js';
import { getJugador, getJugadores, getComputadoraJugo, setComputadoraJugo } from '../data/estado-juego.js';
import { PUNTOS_MINIMOS_COMPUTADORA } from '../data/constantes.js';

/**
 * Ejecuta el turno de la computadora
 */
export const turnoComputadora = () => {
    const computadora = getJugador(1);
    
    while (computadora.puntos < PUNTOS_MINIMOS_COMPUTADORA) {
        const carta = pedirCarta();
        computadora.cartas.push(carta);
        computadora.puntos = valorMano(computadora.cartas);
        console.log('Computadora pide:', carta, 'Puntos:', computadora.puntos);
    }

    setComputadoraJugo(true);
    mostrarCartasJugadores(getJugadores(), getComputadoraJugo());
    actualizarPuntuaciones(getJugadores(), getComputadoraJugo());

    determinarGanador(getJugadores());
};
