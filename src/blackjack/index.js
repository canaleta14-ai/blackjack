/**
 * Juego de Blackjack
 * @author Jesús Hidalgo
 * @version 2.0.0
 * @license MIT
 */
import { inicializarJuego } from './usecases/inicializar-juego.js';
import { turnoJugador } from './usecases/turno-jugador.js';
import { turnoComputadora } from './usecases/turno-computadora.js';

(() => {

    'use strict'

    // Cache de selectores DOM
    let btnNuevo, btnPedir, btnDetener;

    // Event listener que se ejecuta cuando el DOM está cargado
    document.addEventListener('DOMContentLoaded', () => {
        btnNuevo = document.querySelector('#btnNuevo');
        btnPedir = document.querySelector('#btnPedir');
        btnDetener = document.querySelector('#btnDetener');

        const botones = {
            nuevo: btnNuevo,
            pedir: btnPedir,
            detener: btnDetener
        };

        btnNuevo.addEventListener('click', () => inicializarJuego(botones));
        btnPedir.addEventListener('click', () => turnoJugador(turnoComputadora));
        btnDetener.addEventListener('click', turnoComputadora);
        
        // Deshabilitar botones inicialmente
        btnPedir.disabled = true;
        btnDetener.disabled = true;
    });

})();