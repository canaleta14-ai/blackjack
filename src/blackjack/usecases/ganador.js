import { crearConfetti, crearLluviaMonedas } from './confetti.js';

let stopMonedas = null;

// Función para crear la cascada de cartas
const crearCascadaCartas = () => {
    const container = document.querySelector('#cartas-cascada-container');
    if (!container) return;
    
    container.innerHTML = ''; // Limpiar cartas previas
    
    const palos = ['C', 'D', 'H', 'S']; // Corazones, Diamantes, Picas, Tréboles
    const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    
    // Crear 5 cartas cayendo
    const cantidadCartas = 5;
    
    for (let i = 0; i < cantidadCartas; i++) {
        const palo = palos[Math.floor(Math.random() * palos.length)];
        const valor = valores[Math.floor(Math.random() * valores.length)];
        const carta = `${valor}${palo}`;
        
        const cartaElement = document.createElement('div');
        cartaElement.className = `carta-cascada fall-${i + 1}`;
        cartaElement.style.backgroundImage = `url('assets/cartas/${carta}.png')`;
        cartaElement.style.left = Math.random() * 80 + 10 + '%';
        cartaElement.style.top = Math.random() * -50 - 50 + 'px';
        
        container.appendChild(cartaElement);
    }
};

// Función para mostrar la animación de victoria
const mostrarVictoria = () => {
    const overlay = document.querySelector('#victoria-overlay');
    const audioVictoria = document.querySelector('#audio-victoria');
    
    if (overlay) {
        overlay.classList.add('show');
        crearCascadaCartas(); // Crear cascada de cartas
        
        // Reproducir sonido de victoria
        if (audioVictoria) {
            audioVictoria.volume = 0.5;
            audioVictoria.play().catch(e => console.log('Error reproduciendo audio:', e));
        }
        
        setTimeout(() => {
            overlay.classList.remove('show');
            if (audioVictoria) {
                audioVictoria.pause();
                audioVictoria.currentTime = 0;
            }
        }, 5000);
    }
};

// Función para mostrar la animación de derrota
const mostrarDerrota = () => {
    const overlay = document.querySelector('#derrota-overlay');
    const audioDerrota = document.querySelector('#audio-derrota');
    
    if (overlay) {
        overlay.classList.add('show');
        
        // Reproducir sonido de derrota
        if (audioDerrota) {
            audioDerrota.volume = 0.3;
            audioDerrota.play().catch(e => console.log('Error reproduciendo audio:', e));
        }
        
        setTimeout(() => {
            overlay.classList.remove('show');
            if (audioDerrota) {
                audioDerrota.pause();
                audioDerrota.currentTime = 0;
            }
        }, 4000);
    }
};

// Función para mostrar la animación de empate
const mostrarEmpate = () => {
    const overlay = document.querySelector('#empate-overlay');
    const audioEmpate = document.querySelector('#audio-empate');
    
    if (overlay) {
        overlay.classList.add('show');
        stopMonedas = crearLluviaMonedas();
        
        // Reproducir sonido de empate
        if (audioEmpate) {
            audioEmpate.volume = 0.4;
            audioEmpate.play().catch(e => console.log('Error reproduciendo audio:', e));
        }
        
        setTimeout(() => {
            overlay.classList.remove('show');
            if (stopMonedas) {
                stopMonedas();
                stopMonedas = null;
            }
            if (audioEmpate) {
                audioEmpate.pause();
                audioEmpate.currentTime = 0;
            }
        }, 4500);
    }
};

// Función que determina el ganador
const determinarGanador = (jugadores) => {
    const computadora = jugadores[1];
    const jugador = jugadores[0];
    let mensaje = '';
    let jugadorGana = false;
    let jugadorPierde = false;

    if (jugador.puntos > 21) {
        mensaje = `${jugador.nombre} pierde (se pasó de 21).`;
        jugadorPierde = true;
    } else if (computadora.puntos > 21) {
        mensaje = `${jugador.nombre} gana (computadora se pasó de 21).`;
        jugadorGana = true;
    } else if (jugador.puntos > computadora.puntos) {
        mensaje = `${jugador.nombre} gana (${jugador.puntos} > ${computadora.puntos}).`;
        jugadorGana = true;
    } else if (computadora.puntos > jugador.puntos) {
        mensaje = `${jugador.nombre} pierde (${jugador.puntos} < ${computadora.puntos}).`;
        jugadorPierde = true;
    } else {
        mensaje = `${jugador.nombre} empata con la computadora.`;
    }

    console.log(mensaje);
    
    // Mostrar animación según el resultado
    if (jugadorGana) {
        mostrarVictoria();
    } else if (jugadorPierde) {
        mostrarDerrota();
    } else {
        // Mostrar animación de empate
        mostrarEmpate();
    }
};

export { determinarGanador };
