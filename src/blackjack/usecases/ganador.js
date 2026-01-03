import { crearConfetti } from './confetti.js';

let stopConfetti = null;

// Función para mostrar la animación de victoria
const mostrarVictoria = () => {
    const overlay = document.querySelector('#victoria-overlay');
    const audioVictoria = document.querySelector('#audio-victoria');
    
    if (overlay) {
        overlay.classList.add('show');
        stopConfetti = crearConfetti();
        
        // Reproducir sonido de victoria
        if (audioVictoria) {
            audioVictoria.volume = 0.5;
            audioVictoria.play().catch(e => console.log('Error reproduciendo audio:', e));
        }
        
        setTimeout(() => {
            overlay.classList.remove('show');
            if (stopConfetti) {
                stopConfetti();
                stopConfetti = null;
            }
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
    }
    // En caso de empate, solo se muestra en consola
};

export { determinarGanador };
