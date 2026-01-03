# 🃏 Blackjack Vite

Un juego de Blackjack interactivo desarrollado con JavaScript modular y Vite, con soporte para aplicaciones móviles mediante Capacitor.

## 🎮 Características

- 🎴 Juego de Blackjack completo con baraja de 52 cartas
- 🎨 Interfaz responsive con Bootstrap 5
- 🎉 Animaciones de victoria y derrota
- 🎊 Efectos de confetti al ganar
- 🔊 Efectos de sonido
- 📱 Soporte para aplicaciones Android con Capacitor
- ⚡ Desarrollo rápido con Vite

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone <tu-repositorio>

# Navegar al directorio del proyecto
cd 04-blackjack-vite

# Instalar dependencias
npm install
```

## 💻 Uso

### Modo Desarrollo
```bash
npm run dev
```
Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Producción
```bash
# Construir para producción
npm run build

# Previsualizar la build de producción
npm run preview
```

## 📱 Desarrollo Móvil (Android)

Este proyecto incluye soporte para Capacitor para crear aplicaciones Android nativas:

```bash
# Sincronizar con Capacitor
npx cap sync

# Abrir en Android Studio
npx cap open android
```

## 🎯 Cómo Jugar

1. Haz clic en "Pedir carta" para solicitar una nueva carta
2. Tu objetivo es llegar a 21 puntos sin pasarte
3. Haz clic en "Detener" cuando estés satisfecho con tu mano
4. La computadora jugará automáticamente
5. Gana quien tenga la puntuación más cercana a 21 sin pasarse
6. Haz clic en "Nuevo juego" para comenzar una nueva partida

## 📁 Estructura del Proyecto

```
src/
├── blackjack/
│   ├── index.js              # Punto de entrada del juego
│   ├── data/
│   │   ├── constantes.js     # Constantes del juego
│   │   └── estado-juego.js   # Estado global del juego
│   └── usecases/
│       ├── confetti.js       # Animación de confetti
│       ├── crear-deck.js     # Creación de la baraja
│       ├── ganador.js        # Lógica del ganador
│       ├── inicializar-juego.js
│       ├── pedir-carta.js    # Lógica para pedir cartas
│       ├── turno-computadora.js
│       ├── turno-jugador.js
│       ├── ui.js             # Manipulación del DOM
│       └── valor-carta.js    # Cálculo del valor de cartas
├── main.js
└── style.css
```

## 🛠️ Tecnologías

- **JavaScript ES6+**: Código modular y moderno
- **Vite**: Build tool y servidor de desarrollo
- **Bootstrap 5**: Framework CSS para diseño responsive
- **Capacitor**: Framework para aplicaciones móviles nativas
- **Underscore.js**: Utilidades JavaScript

## 🌐 Deploy

El proyecto está configurado para despliegue en Netlify mediante el archivo `netlify.toml`.

## 📝 Licencia

Este proyecto es de uso educativo.

## 👤 Autor

Proyecto desarrollado como parte del curso de JavaScript.

---

⭐ ¡Si te gusta este proyecto, dale una estrella!
