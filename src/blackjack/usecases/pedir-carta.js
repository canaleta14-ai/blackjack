import { getDeck } from './crear-deck.js';

/**
 * Pide y devuelve la última carta del deck
 * @returns {string} La carta pedida
 * @throws {string} Error si no hay cartas en el deck
 */
export const pedirCarta = () => {
    const deck = getDeck();
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
};