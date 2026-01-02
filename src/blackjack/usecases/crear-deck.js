import _ from 'underscore';

let deck = [];

// Función que crea el deck de cartas con 52 cartas estándar
const crearDeck = (tipos, especiales) => {
    deck = [];
    const valores = [2, 3, 4, 5, 6, 7, 8, 9, 10, ...especiales];
    for (let valor of valores) {
        for (let tipo of tipos) {
            deck.push(valor + tipo);
        }
    }
    return deck;
}

// Función que baraja el deck de cartas de manera aleatoria (Fisher-Yates)
const shuffleDeck = () => {
    deck = _.shuffle(deck);
    return deck;
}

export { crearDeck, shuffleDeck, deck };

export const getDeck = () => deck;
export const setDeck = (newDeck) => { deck = newDeck; };