import { crearDeck, shuffleDeck } from './crear-deck.js';
import { pedirCarta } from './pedir-carta.js';
import { valorMano } from './valor-carta.js';
import { mostrarCartasJugadores, actualizarPuntuaciones } from './ui.js';
import { getJugadores, getComputadoraJugo, reiniciarJugadores } from '../data/estado-juego.js';
import { TIPOS, ESPECIALES } from '../data/constantes.js';

/**
 * Inicializa el juego creando el deck, repartiendo cartas y actualizando la UI
 * @param {Object} botones - Objeto con referencias a los botones del juego
 */
export const inicializarJuego = (botones) => {
    crearDeck(TIPOS, ESPECIALES);
    shuffleDeck();

    reiniciarJugadores();

    const jugadores = getJugadores();

    // Reparte 2 cartas a cada jugador alternadamente
    for (let i = 0; i < 2; i++) {
        for (let jugador of jugadores) {
            const carta = pedirCarta();
            jugador.cartas.push(carta);
            jugador.puntos = valorMano(jugador.cartas);
        }
    }

    // Logs en consola para depuración
    jugadores.forEach(jugador => {
        console.log(`${jugador.nombre} cartas:`, jugador.cartas, 'Puntos:', jugador.puntos);
    });

    mostrarCartasJugadores(jugadores, getComputadoraJugo());
    actualizarPuntuaciones(jugadores, getComputadoraJugo());

    // Habilita botones para jugar
    if (botones) {
        botones.pedir.disabled = false;
        botones.detener.disabled = false;
    }
};
