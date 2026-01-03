// Efecto de confetti
export const crearConfetti = () => {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiPieces = [];
    const confettiCount = 150;
    const colors = ['#FFD700', '#FF6347', '#4169E1', '#32CD32', '#FF69B4', '#FFA500'];

    class ConfettiPiece {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - canvas.height;
            this.w = Math.random() * 10 + 5;
            this.h = Math.random() * 5 + 5;
            this.speed = Math.random() * 3 + 2;
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 10 - 5;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.opacity = 1;
        }

        update() {
            this.y += this.speed;
            this.rotation += this.rotationSpeed;
            
            if (this.y > canvas.height) {
                this.y = -20;
                this.x = Math.random() * canvas.width;
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x + this.w / 2, this.y + this.h / 2);
            ctx.rotate((this.rotation * Math.PI) / 180);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
            ctx.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
            ctx.restore();
        }
    }

    // Crear confetti
    for (let i = 0; i < confettiCount; i++) {
        confettiPieces.push(new ConfettiPiece());
    }

    let animationId;
    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confettiPieces.forEach(piece => {
            piece.update();
            piece.draw();
        });

        animationId = requestAnimationFrame(animate);
    };

    animate();

    // Retornar función para detener la animación
    return () => {
        cancelAnimationFrame(animationId);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
};

// Efecto de monedas cayendo para empate
export const crearLluviaMonedas = () => {
    const canvas = document.getElementById('monedas-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const monedas = [];
    const monedasCount = 80;
    const colores = ['#FFD700', '#FFC107', '#FFB300'];

    class Moneda {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - canvas.height;
            this.size = Math.random() * 20 + 15;
            this.speed = Math.random() * 3 + 2;
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 15 - 7.5;
            this.color = colores[Math.floor(Math.random() * colores.length)];
            this.swingAngle = Math.random() * Math.PI * 2;
            this.swingSpeed = Math.random() * 0.05 + 0.02;
        }

        update() {
            this.y += this.speed;
            this.rotation += this.rotationSpeed;
            this.swingAngle += this.swingSpeed;
            this.x += Math.sin(this.swingAngle) * 2;
            
            if (this.y > canvas.height) {
                this.y = -20;
                this.x = Math.random() * canvas.width;
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate((this.rotation * Math.PI) / 180);
            
            // Dibujar moneda (círculo con símbolo de dólar)
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(0, 0, this.size, 0, Math.PI * 2);
            ctx.fill();
            
            // Borde de la moneda
            ctx.strokeStyle = '#B8860B';
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // Símbolo de dólar
            ctx.fillStyle = '#B8860B';
            ctx.font = `bold ${this.size}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('$', 0, 0);
            
            ctx.restore();
        }
    }

    // Crear monedas
    for (let i = 0; i < monedasCount; i++) {
        monedas.push(new Moneda());
    }

    let animationId;
    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        monedas.forEach(moneda => {
            moneda.update();
            moneda.draw();
        });
        
        animationId = requestAnimationFrame(animate);
    };

    animate();

    // Función para detener la animación
    const stop = () => {
        cancelAnimationFrame(animationId);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    return stop;
};
