const es = {
  meta: {
    htmlLang: 'es',
    documentTitle: 'TinyPocket — Mini consola portátil con ATtiny85',
    skipToContent: 'Saltar al contenido principal',
    openMenu: 'Abrir el menú de navegación',
    closeMenu: 'Cerrar el menú de navegación',
    mainNavigation: 'Navegación principal',
    languageLabel: 'Idioma',
    themeLabel: 'Tema',
    themeLight: 'Tema claro',
    themeDark: 'Tema oscuro',
    themeToLight: 'Cambiar a tema claro',
    themeToDark: 'Cambiar a tema oscuro',
    decorative: 'Composición decorativa',
    primaryNavigation: 'Navegación principal',
  },

  nav: {
    about: 'Proyecto',
    features: 'Características',
    games: 'Modos',
    hardware: 'Hardware',
    technologies: 'Tecnología',
    links: 'Código',
    github: 'GitHub',
  },

  hero: {
    eyebrow: 'Código abierto · Sistemas embebidos',
    titleLead: 'Una mini consola portátil',
    titleAccent: 'construida sobre un ATtiny85',
    description:
      'Pantalla LCD 16×2 conectada por I²C, tres botones y cuatro modos de juego. El menú, los minijuegos, la mascota virtual y las máquinas de estados viven en el firmware de un microcontrolador de 8 bits.',
    primaryCta: 'Ver repositorio',
    secondaryCta: 'Explorar el proyecto',
    scroll: 'Desplazarse',
    chips: ['ATtiny85', 'LCD 16×2 · I²C', '3 botones', 'C/C++', 'Arduino IDE'],
    device: {
      boardLabel: 'ATtiny85 · 8-bit',
      screenLabel: 'LCD 16×2 · I²C',
      prompt: 'OK: entrar',
      buttons: { left: 'LEFT', right: 'RIGHT', ok: 'OK' },
      leds: ['I²C', 'PWR', 'ACT'],
      cursor: '▮',
    },
  },

  about: {
    eyebrow: 'El proyecto',
    title: '¿Qué es',
    accent: 'TinyPocket?',
    lead: 'Un proyecto de electrónica y programación embebida en el que la interacción con el usuario no necesita nada más que tres pulsadores y una pantalla de 16×2.',
    facts: [
      { label: 'Microcontrolador', value: 'ATtiny85' },
      { label: 'Pantalla', value: 'LCD 16×2 · I²C' },
      { label: 'Controles', value: 'LEFT · RIGHT · OK' },
      { label: 'Modos de juego', value: '4' },
    ],
    paragraphs: [
      'TinyPocket es una mini consola portátil construida alrededor de un ATtiny85, una pantalla LCD 16×2 con módulo I²C y tres botones. Todo el comportamiento del dispositivo está en el firmware: no hay servidor, ni interfaz gráfica, ni lógica repartida fuera del microcontrolador.',
      'El objetivo es reunir en un aparato pequeño lo que hace un proyecto de embebidos real: leer entradas digitales, hablar con un periférico por un bus de dos hilos, medir el tiempo, generar números aleatorios y reaccionar a partir de todo eso para crear minijuegos y una mascota virtual.',
      'Al encender el dispositivo se inicializan los botones, la comunicación I²C y la pantalla, y aparece el menú principal. LEFT y RIGHT recorren las opciones, OK entra en el modo elegido. Al terminar una partida se vuelve al menú y se puede seleccionar otro.',
    ],
    closing:
      'El código está preparado para crecer: añadir un modo nuevo consiste en crear su estado, sus variables, sus funciones y registrarlo en el menú y en el switch del bucle principal.',
  },

  features: {
    eyebrow: 'Qué resuelve',
    title: 'Características',
    accent: 'que importan',
    lead: 'Piezas sencillas por fuera, decisiones de ingeniería por dentro. Esto es lo que hace que TinyPocket funcione.',
    items: [
      {
        tag: 'ATtiny85',
        title: 'Hardware compacto',
        text: 'Un microcontrolador AVR de 8 bits, una pantalla y tres pulsadores. Ese es todo el equipo, y con eso hay que vivir.',
      },
      {
        tag: 'LiquidCrystal_I2C',
        title: 'Pantalla LCD 16×2 por I²C',
        text: 'Dos líneas de 16 caracteres controladas con Wire y LiquidCrystal_I2C, en lugar de cablear cada pin del LCD por separado.',
      },
      {
        tag: 'INPUT_PULLUP',
        title: 'Tres botones, una interfaz',
        text: 'LEFT, RIGHT y OK controlan la interfaz completa. Cada pulsador se conecta entre su pin y GND y se lee con la resistencia interna del microcontrolador.',
      },
      {
        tag: 'DEBOUNCE_MS 35',
        title: 'Antirrebote de pulsadores',
        text: 'Un pulsador mecánico genera varias lecturas al presionarse. Cada botón guarda su estado estable y la hora del cambio: la pulsación solo cuenta si se mantiene el intervalo de antirrebote.',
      },
      {
        tag: 'enum Estado',
        title: 'Máquinas de estados',
        text: 'Un enumerado decide qué parte del programa se ejecuta en cada vuelta del bucle. El menú es un estado, cada modo es otro, y el Blackjack tiene además sus propias fases internas.',
      },
      {
        tag: 'handleMascota()',
        title: 'Mascota virtual',
        text: 'Hambre y felicidad empiezan al máximo y bajan con el tiempo. Hay que alimentarla y jugar con ella para que no lleguen a cero.',
      },
      {
        tag: 'millis()',
        title: 'Temporización sin delay()',
        text: 'Los juegos avanzan comparando milisegundos, nunca bloqueando con delay(). Así el bucle sigue leyendo los botones mientras la partida corre.',
      },
      {
        tag: 'random()',
        title: 'Aleatoriedad y lógica de juego',
        text: 'Números aleatorios para las cartas, para la comida de Snake y para la trayectoria de la pelota, combinadas con constantes de configuración que ajustan la dificultad.',
      },
    ],
  },

  games: {
    eyebrow: 'Modos de juego',
    title: 'Los cuatro modos',
    accent: 'en un chip de 8 bits',
    lead: 'Mismo microcontrolador, misma pantalla de 16 caracteres y tres botones. Cuatro formas distintas de usarlos.',
    controlsLabel: 'Controles',
    controls: { left: 'LEFT', right: 'RIGHT', ok: 'OK' },
    visual: {
      you: 'TÚ',
      ai: 'IA',
      dealer: 'CASA',
      player: 'JUGADOR',
      dealerRule: 'Casa >= 17',
      cells: '32 casillas',
    },
    items: [
      {
        id: 'pingpong',
        name: 'Ping Pong',
        tagline: 'La paleta contra la máquina',
        description:
          'El jugador mueve una paleta para devolver la pelota mientras la máquina hace lo mismo en el lado contrario. La pelota cambia de dirección al tocar las paredes o alguna de las dos paletas.',
        goal: 'Gana quien llegue primero a 5 puntos.',
        controls: { left: 'Subir la paleta', right: 'Bajar la paleta', ok: 'Volver al menú' },
      },
      {
        id: 'mascota',
        name: 'Mascota',
        tagline: 'Mantenerla viva',
        description:
          'Una mascota virtual con dos estadísticas, hambre y felicidad. Las dos empiezan al máximo y van bajando con el pasar del tiempo, así que hay que estar atento al panel de la pantalla.',
        goal: 'Si alguna de las dos llega a 0, termina la partida. Sobrevivir 60 segundos es la victoria.',
        controls: { left: 'Alimentar', right: 'Jugar', ok: 'Volver al menú' },
      },
      {
        id: 'blackjack',
        name: 'Blackjack',
        tagline: 'Tres victorias o tres derrotas',
        description:
          'Una versión simplificada del juego de cartas, sin baraja física: cada carta se genera con un número aleatorio. El jugador pide cartas o se planta, y la casa sigue repartiéndose hasta llegar a 17.',
        goal: 'Tres victorias ganan la partida; tres derrotas la pierden.',
        controls: { left: 'Pedir carta (Hit)', right: 'Plantarse (Stand)', ok: 'Continuar o menú' },
      },
      {
        id: 'snake',
        name: 'Snake',
        tagline: '32 casillas, dos filas',
        description:
          'Snake adaptado a las dimensiones de una pantalla LCD 16×2: un tablero de 16 columnas por 2 filas, es decir, 32 posiciones. La comida aparece siempre en una casilla libre.',
        goal: 'Gana al alcanzar una longitud de 12. Cada vez que crece, los movimientos se aceleran.',
        controls: { left: 'Girar a la izquierda', right: 'Girar a la derecha', ok: 'Volver al menú' },
      },
    ],
  },

  hardware: {
    eyebrow: 'Componentes',
    title: 'Hardware',
    accent: 'y conexiones',
    lead: 'Una lista de piezas corta a propósito, y un esquema de conexiones igual de sencillo.',
    componentsLabel: 'Componentes',
    quantityLabel: 'Cantidad',
    components: [
      { name: 'ATtiny85', qty: '1', note: 'Microcontrolador AVR de 8 bits. Ejecuta todo el firmware.' },
      { name: 'LCD 16×2 con módulo I²C', qty: '1', note: 'Pantalla de dos líneas de 16 caracteres. Única salida visual.' },
      { name: 'Pulsadores', qty: '3', note: 'LEFT, RIGHT y OK, conectados entre su pin y GND.' },
      { name: 'Switch', qty: '1', note: 'Interruptor general de alimentación.' },
      { name: 'Fuente de alimentación o batería', qty: '1', note: 'Debe ser compatible con la tensión de los componentes.' },
      { name: 'Cables', qty: 'Según necesidad', note: 'Para unir microcontrolador, pantalla y pulsadores.' },
    ],
    pinMapLabel: 'Pines utilizados del ATtiny85',
    pinLegend: { i2c: 'I²C', button: 'Botón', idle: 'Sin uso' },
    pinMap: [
      { pin: 'PB0', role: 'SDA', kind: 'i2c' },
      { pin: 'PB1', role: 'OK', kind: 'button' },
      { pin: 'PB2', role: 'SCL', kind: 'i2c' },
      { pin: 'PB3', role: 'LEFT', kind: 'button' },
      { pin: 'PB4', role: 'RIGHT', kind: 'button' },
      { pin: 'PB5', role: 'RESET', kind: 'idle' },
    ],
    lcdTitle: 'ATtiny85 → LCD I²C',
    buttonsTitle: 'Pines de los botones',
    pinColumn: 'Pin',
    functionColumn: 'Función',
    deviceColumn: 'Dispositivo',
    noteTitle: 'Antes de conectar',
    note:
      'La dirección I²C depende del módulo: 0x27 es una de las más habituales, pero otros usan 0x3F. Si la pantalla no responde, comprobá la dirección del módulo y cambiala en el código. Verificá también la tensión de funcionamiento de la pantalla y del módulo I²C: muchos módulos LCD 16×2 están diseñados para trabajar a 5 V.',
  },

  technologies: {
    eyebrow: 'Conocimientos',
    title: 'Tecnologías',
    accent: 'y conceptos',
    lead: 'Lo que hay que saber para entender, mantener y ampliar el proyecto.',
    items: [
      { term: 'C/C++', text: 'El firmware está escrito en C/C++ para Arduino, sin capas de abstracción: cada línea termina hablando con el hardware.' },
      { term: 'Arduino IDE', text: 'El entorno donde se escriben los sketches, se instalan las librerías y se carga el programa en el microcontrolador.' },
      { term: 'ATtiny85', text: 'Configuración de puertos y pines, resistencias pull-up internas y trabajo dentro de un presupuesto de memoria muy pequeño.' },
      { term: 'Comunicación I²C', text: 'Wire se encarga del bus de dos hilos, SDA y SCL. La pantalla es el único esclavo del bus.' },
      { term: 'Entradas digitales', text: 'Los tres pulsadores se leen con lecturas digitales e INPUT_PULLUP: sin pulsar se lee HIGH y al pulsar LOW.' },
      { term: 'Antirrebote', text: 'El estado de cada botón se compara con la lectura anterior y solo se acepta como pulsación tras un intervalo estable.' },
      { term: 'Máquinas de estados', text: 'Enumerados para los modos de la aplicación y para las fases de cada juego; el bucle principal decide con un switch.' },
      { term: 'millis()', text: 'El tiempo se mide con milisegundos acumulados y comparaciones, nunca con esperas fijas.' },
      { term: 'Números aleatorios', text: 'Reparto de cartas, comida de Snake, trayectorias de la pelota e iniciales de la máquina.' },
      { term: 'Gestión de recursos', text: 'Posiciones de la pantalla, longitud de la serpiente, cartas visibles y puntuaciones tienen un máximo declarado para no salirse de los límites.' },
    ],
  },

  links: {
    eyebrow: 'Dónde encontrarlo',
    title: 'Código',
    accent: 'y simulación',
    lead: 'El proyecto es abierto: se puede leer, ejecutar y modificar.',
    externalNotice: 'Los dos enlaces se abren en una pestaña nueva, en sitios externos a esta página.',
    github: {
      title: 'Repositorio de GitHub',
      text: 'El firmware completo, el diagrama del circuito, las imágenes de la simulación y la documentación del código, con la explicación de cada sección del programa.',
      cta: 'Ver código en GitHub',
      handle: 'MaiteVazquez8/TinyPocket',
    },
    tinkered: {
      title: 'Simulación en Tinkered',
      text: 'Enlace a la simulación del circuito publicada en Tinkered. Se abre directamente en el sitio de Tinkered, fuera de esta página.',
      cta: 'Explorar simulación',
      handle: 'app.tinkered.ai',
    },
  },

  closing: {
    eyebrow: 'En resumen',
    title: 'Electrónica, código y tres botones',
    text: 'TinyPocket recuerda que un proyecto de embebidos no necesita una interfaz complicada para ser entretenido: alcanza con medir bien el tiempo, leer unos pulsadores sin que reboten y comunicarse con un periférico por dos hilos. El resto es diseñar estados.',
    ctaPrimary: 'Ver repositorio',
    ctaSecondary: 'Explorar simulación',
  },

  footer: {
    description:
      'TinyPocket es una mini consola portátil basada en un ATtiny85, una pantalla LCD 16×2 con comunicación I²C y tres botones.',
    projectColumn: 'Proyecto',
    resourcesColumn: 'Recursos',
    repository: 'Repositorio',
    simulation: 'Simulación',
    note: 'Proyecto de electrónica y programación embebida.',
    top: 'Volver arriba',
  },
};

export default es;
