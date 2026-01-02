// Función que muestra las cartas
const mostrarCartas = (cartas, contenedor) => {
    contenedor.innerHTML = '';
    for (let carta of cartas) {
        const img = document.createElement('img');
        img.src = `assets/cartas/${carta}.png`;
        img.classList.add('carta');
        contenedor.appendChild(img);
    }
}

// Función que muestra las cartas de todos los jugadores
const mostrarCartasJugadores = (jugadores, computadoraJugo) => {
    jugadores.forEach((jugador, index) => {
        const contenedor = document.querySelector(`#cartas-jugador${index + 1}`);
        if (contenedor) {
            const cartasMostrar = (jugador.esComputadora && !computadoraJugo) 
                ? [jugador.cartas[0]] 
                : jugador.cartas;
            mostrarCartas(cartasMostrar, contenedor);
        }
    });
}

// Función que actualiza los puntos en la UI
const actualizarPuntuaciones = (jugadores, computadoraJugo) => {
    jugadores.forEach((jugador, index) => {
        const elemento = document.querySelector(`#puntos-jugador${index + 1}`);
        if (elemento) {
            if (jugador.esComputadora && !computadoraJugo) {
                elemento.textContent = '?';
            } else {
                elemento.textContent = jugador.puntos;
            }
        }
    });
}

export { mostrarCartas, mostrarCartasJugadores, actualizarPuntuaciones };
