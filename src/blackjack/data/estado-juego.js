/**
 * Estado del juego
 */

let jugadores = [
    { nombre: 'Jugador', cartas: [], puntos: 0, esComputadora: false, activo: true },
    { nombre: 'Computadora', cartas: [], puntos: 0, esComputadora: true, activo: true }
];

let computadoraJugo = false;

export const getJugadores = () => jugadores;
export const getJugador = (index) => jugadores[index];
export const getComputadoraJugo = () => computadoraJugo;
export const setComputadoraJugo = (valor) => { computadoraJugo = valor; };

export const reiniciarJugadores = () => {
    jugadores.forEach(jugador => {
        jugador.cartas = [];
        jugador.puntos = 0;
        jugador.activo = true;
    });
    computadoraJugo = false;
};
