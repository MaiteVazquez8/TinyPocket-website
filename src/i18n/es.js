const es = {
  meta: {
    htmlLang: 'es',
    documentTitle: 'TinyPocket — Mini consola portátil en dos versiones',
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

  scope: {
    shared: 'Compartido',
    attiny85: 'ATtiny85',
    mega2560: 'Mega 2560',
  },

  hero: {
    eyebrow: 'Código abierto · Sistemas embebidos',
    titleLead: 'Una mini consola portátil',
    titleAccent: 'en dos versiones',
    description:
      'TinyPocket es un proyecto de electrónica y programación embebida con dos implementaciones documentadas: una sobre un ATtiny85 con pantalla LCD 16×2 por I²C y otra sobre un Arduino Mega 2560 con pantalla OLED 128×64. En las dos, tres botones, un menú, minijuegos y una mascota virtual.',
    primaryCta: 'Ver repositorio',
    secondaryCta: 'Explorar el proyecto',
    scroll: 'Desplazarse',
    chips: ['ATtiny85 · LCD 16×2', 'Mega 2560 · OLED 128×64', '3 botones', 'C/C++'],
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
    lead: 'Un proyecto de electrónica y programación embebida con dos implementaciones sobre hardware distinto. No son dos modos del mismo aparato: son dos proyectos que comparten la idea y el lenguaje, no el hardware ni el código.',
    versionsLabel: 'Las dos implementaciones',
    sharedLabel: 'Base común a las dos',
    shared: [
      'Firmware en C/C++ para Arduino, cargado con el Arduino IDE.',
      'Tres botones —LEFT, RIGHT y OK— con INPUT_PULLUP y antirrebote.',
      'Un menú que decide qué módulo se ejecuta mediante un switch de estados.',
      'Temporización con millis() para que el bucle nunca se bloquee.',
      'Aleatoriedad con random() para cartas, comida, trayectorias e inicios.',
    ],
    paragraphs: [
      'TinyPocket nació como una mini consola portátil construida alrededor de un ATtiny85, una pantalla LCD 16×2 con módulo I²C y tres botones. Todo el comportamiento del dispositivo está en el firmware: no hay servidor, ni interfaz gráfica, ni lógica repartida fuera del microcontrolador.',
      'Más adelante el proyecto creció hacia una segunda implementación sobre un Arduino Mega 2560, con una pantalla OLED de 128×64 píxeles y animaciones calculadas fotograma a fotograma. El menú mantiene la misma forma, pero cada juego cambia por completo.',
      'Por eso conviene leer cada modo junto a la versión que lo implementa: los nombres coinciden, las reglas no siempre.',
    ],
    closing:
      'En ambas versiones el código está preparado para crecer: añadir un modo consiste en crear su estado, sus variables, sus funciones y registrarlo en el menú y en el switch del bucle principal.',
  },

  versions: {
    items: [
      {
        id: 'attiny85',
        name: 'TinyPocket · ATtiny85',
        board: 'ATtiny85',
        summary:
          'La implementación original: un microcontrolador AVR de 8 bits que gestiona toda la consola, con una pantalla de 16×2 caracteres. El firmware es texto sobre un menú de cuatro modos y está descrito sección por sección en la documentación del repositorio.',
        bullets: [
          'Firmware completo en un solo sketch de C/C++.',
          'Pantalla LCD de 16×2 caracteres con módulo I²C.',
          'Tres pulsadores en PB3, PB4 y PB1, leídos con INPUT_PULLUP.',
          'Cuatro modos en el menú: Ping Pong, Mascota, Blackjack y Snake.',
          'Bus I²C con Wire y pantalla manejada con LiquidCrystal_I2C.',
          'Antirrebote de 35 ms y cada pulsación se consume una sola vez.',
        ],
        source: 'README.md · src/explicacion_codigo.md',
      },
      {
        id: 'mega2560',
        name: 'TinyPocket · Mega 2560',
        board: 'Arduino Mega 2560',
        summary:
          'La segunda implementación: la misma estructura de menú y estados sobre una placa mucho mayor, con una pantalla OLED gráfica de 128×64 píxeles. Reutiliza los ejemplos animados del repositorio y añade animaciones por fotogramas.',
        bullets: [
          'Arduino Mega 2560 como placa, con la misma máquina de estados.',
          'Pantalla OLED monocroma de 128×64 píxeles dibujada con U8g2.',
          'Mismos tres pulsadores, más pulsación corta y pulsación larga.',
          'Cinco entradas de menú, incluyendo una pantalla de Información.',
          'Ping Pong tiene un submenú con dos variantes: Normal y Breakout.',
          'Animaciones de ojos, cartas y serpiente calculadas con millis().',
        ],
        source: 'src/examples/tinyPocket.ino',
      },
    ],
  },

  features: {
    eyebrow: 'Qué resuelve',
    title: 'Características',
    accent: 'que importan',
    lead: 'Piezas sencillas por fuera, decisiones de ingeniería por dentro. Cada característica indica a qué implementación pertenece.',
    items: [
      {
        scope: 'attiny85',
        tag: 'struct Button',
        title: 'Hardware de 8 bits',
        text: 'Un microcontrolador AVR de 8 bits, una pantalla y tres pulsadores. Ese es todo el equipo, y el firmware tiene que vivir dentro de él.',
      },
      {
        scope: 'attiny85',
        tag: 'LiquidCrystal_I2C',
        title: 'Pantalla LCD 16×2 por I²C',
        text: 'Dos líneas de 16 caracteres controladas con Wire y LiquidCrystal_I2C, en lugar de cablear cada pin del LCD por separado.',
      },
      {
        scope: 'mega2560',
        tag: 'U8g2',
        title: 'Pantalla OLED 128×64',
        text: 'La segunda implementación cambia los caracteres por píxeles: una pantalla monocroma de 128×64 sobre I²C, dibujada con la librería U8g2.',
      },
      {
        scope: 'shared',
        tag: 'INPUT_PULLUP',
        title: 'Tres botones, una interfaz',
        text: 'LEFT, RIGHT y OK controlan la consola completa en las dos versiones. Cada pulsador se conecta entre su pin y GND y se lee con la resistencia interna.',
      },
      {
        scope: 'shared',
        tag: 'millis()',
        title: 'Antirrebote y pulsaciones',
        text: 'Cada botón compara su lectura con la anterior y solo acepta la pulsación tras un intervalo estable: 35 ms en el ATtiny85 y 25 ms en el Mega 2560, que además distingue pulsación corta y larga.',
      },
      {
        scope: 'shared',
        tag: 'enum Estado',
        title: 'Máquinas de estados',
        text: 'Un enumerado decide qué parte del programa se ejecuta en cada vuelta del bucle. El menú es un estado, cada modo es otro, y el Blackjack tiene además sus propias fases internas.',
      },
      {
        scope: 'shared',
        tag: 'handleMascota()',
        title: 'Mascota virtual',
        text: 'La mascota existe en las dos versiones, pero no es la misma: dos estadísticas que hay que alimentar en el ATtiny85, cuatro barras y cuatro acciones en el Mega 2560.',
      },
      {
        scope: 'mega2560',
        tag: 'JUEGO_BREAKOUT',
        title: 'Un submenú añade Breakout',
        text: 'En el Mega 2560, Ping Pong abre un submenú con las variantes Normal y Breakout, con su propia rejilla de bloques, vidas y final de partida.',
      },
    ],
  },

  games: {
    eyebrow: 'Modos de juego',
    title: 'Modos de juego',
    accent: 'en las dos versiones',
    lead: 'Los modos comparten nombre, no implementación. Elegí una versión para ver exactamente qué hace cada juego en ella.',
    versionLabel: 'Elegir versión',
    controlsLabel: 'Controles',
    controls: { left: 'LEFT', right: 'RIGHT', ok: 'OK' },
    note: 'Las reglas, los controles y los objetivos cambian por completo entre versiones: no son el mismo juego con distinto aspect ratio.',
    visual: {
      you: 'TÚ',
      ai: 'IA',
      dealer: 'CASA',
      player: 'JUGADOR',
      dealerRule: 'Casa >= 17',
      points: 'Pts',
      cells: '32 casillas',
      segments: '8 segmentos',
      blocks: 'bloques',
      lives: 'vidas',
    },
    attiny85: [
      {
        id: 'pingpong',
        name: 'Ping Pong',
        tagline: 'La paleta contra la máquina',
        description:
          'El jugador mueve una paleta para devolver la pelota mientras la máquina responde en el lado contrario. La pelota cambia de dirección al tocar las paredes o alguna de las dos paletas.',
        goal: 'Gana quien llegue primero a 5 puntos.',
        controls: { left: 'Subir la paleta', right: 'Bajar la paleta', ok: 'Volver al menú' },
      },
      {
        id: 'mascota',
        name: 'Mascota',
        tagline: 'Dos estadísticas, un límite',
        description:
          'Una mascota virtual con hambre y felicidad. Las dos empiezan al máximo y van bajando con el pasar del tiempo, así que hay que estar atento a la pantalla.',
        goal: 'Si alguna de las dos llega a 0, termina la partida. Sobrevivir 60 segundos es la victoria.',
        controls: { left: 'Alimentar', right: 'Jugar', ok: 'Volver al menú' },
      },
      {
        id: 'blackjack',
        name: 'Blackjack',
        tagline: 'Tres victorias o tres derrotas',
        description:
          'Versión simplificada sin baraja física: cada carta se genera con un número aleatorio entre 1 y 10. El jugador pide cartas o se planta, y la casa sigue repartiéndose hasta llegar a 17.',
        goal: 'La partida se gana con 3 victorias y se pierde con 3 derrotas.',
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
    mega2560: [
      {
        id: 'pingpong',
        name: 'Ping Pong',
        tagline: 'Un saque y la cuenta sube',
        description:
          'Aquí el jugador mueve una paleta con LEFT y RIGHT para devolver la pelota. Rebota en las paredes y en la paleta, con una estela que acompaña a la bola en cada movimiento.',
        goal: 'No hay rival ni final: cada devolución suma un punto al contador de la pantalla.',
        controls: { left: 'Mover la paleta a la izquierda', right: 'Mover la paleta a la derecha', ok: 'Mantener: menú' },
      },
      {
        id: 'breakout',
        name: 'Breakout',
        tagline: '32 bloques y 3 vidas',
        description:
          'La segunda variante del submenú de Ping Pong. Una paleta devuelve la pelota contra una rejilla de bloques; cada bloque roto aumenta un poco la velocidad de la bola.',
        goal: 'Gana al romper los 32 bloques. Cada bola que se cae cuesta una de las 3 vidas.',
        controls: { left: 'Mover la paleta a la izquierda', right: 'Mover la paleta a la derecha', ok: 'Mantener: menú' },
      },
      {
        id: 'mascota',
        name: 'Mascota',
        tagline: 'Cuatro barras, cuatro acciones',
        description:
          'La mascota de esta versión sigue hambre, higiene, felicidad y energía, que cambian cada 10 segundos. Los ojos se animan fotograma a fotograma: parpadeo, guiño, sorpresa o sueño.',
        goal: 'No hay derrota ni victoria: es un modo abierto. Comer, bañar, acariciar y dormir son las cuatro acciones.',
        controls: { left: 'Acción anterior', right: 'Acción siguiente', ok: 'Aplicar acción o despertar' },
      },
      {
        id: 'blackjack',
        name: 'Blackjack',
        tagline: 'Mazo real de 52 cartas',
        description:
          'A diferencia de la versión del ATtiny85, aquí hay un mazo real de 52 cartas que se mezcla y se reparte. Los palos se dibujan en pantalla y las cartas entran volando desde los laterales.',
        goal: 'Rondas de una mano: la casa se planta en 17 o más y se comparan los puntajes. OK corto abre otra ronda.',
        controls: { left: 'Pedir carta', right: 'Plantarse', ok: 'Corto: otra ronda · Mantener: menú' },
      },
      {
        id: 'snake',
        name: 'Snake',
        tagline: 'Movimiento suave sobre un marco',
        description:
          'La serpiente se mueve con coordenadas en coma flotante sobre un marco interior de la pantalla de 128×64, con cabeza redonda, estela y comida que late. Empieza con 8 segmentos.',
        goal: 'Termina al chocar con el borde o consigo misma. No hay longitud objetivo: OK corto pausa la partida.',
        controls: { left: 'Girar a la izquierda', right: 'Girar a la derecha', ok: 'Corto: pausa · Mantener: menú' },
      },
    ],
  },

  hardware: {
    eyebrow: 'Componentes',
    title: 'Hardware',
    accent: 'y conexiones',
    lead: 'Cada versión tiene su propio esquema. Los pines del ATtiny85 y los del Mega 2560 no se mezclan.',
    versionLabel: 'Elegir versión',
    componentsLabel: 'Componentes',
    quantityLabel: 'Cantidad',
    pinColumn: 'Pin',
    functionColumn: 'Función',
    deviceColumn: 'Dispositivo',
    pinLegend: { i2c: 'I²C', button: 'Botón' },
    sharedNote:
      'El interruptor general y la fuente de alimentación están documentados para la versión del ATtiny85. El sketch del Mega 2560 no los menciona: hay que verificarlos en el diagrama del circuito antes de cablearlos.',
    attiny85: {
      components: [
        { name: 'ATtiny85', qty: '1', note: 'Microcontrolador AVR de 8 bits. Ejecuta todo el firmware.' },
        { name: 'LCD 16×2 con módulo I²C', qty: '1', note: 'Pantalla de dos líneas de 16 caracteres. Única salida visual.' },
        { name: 'Pulsadores', qty: '3', note: 'LEFT, RIGHT y OK, conectados entre su pin y GND.' },
        { name: 'Switch', qty: '1', note: 'Interruptor general de alimentación.' },
        { name: 'Fuente de alimentación o batería', qty: '1', note: 'Debe ser compatible con la tensión de los componentes.' },
        { name: 'Cables', qty: 'Según necesidad', note: 'Para unir microcontrolador, pantalla y pulsadores.' },
      ],
      screenTitle: 'ATtiny85 → LCD I²C',
      buttonsTitle: 'Pines de los botones',
      screenRows: [
        { pin: 'PB0', role: 'SDA' },
        { pin: 'PB2', role: 'SCL' },
        { pin: 'VCC', role: 'VCC' },
        { pin: 'GND', role: 'GND' },
      ],
      buttonRows: [
        { pin: 'PB3', role: 'LEFT' },
        { pin: 'PB4', role: 'RIGHT' },
        { pin: 'PB1', role: 'OK' },
      ],
      pinMapLabel: 'Pines utilizados del ATtiny85',
      pinMap: [
        { pin: 'PB0', role: 'SDA', kind: 'i2c' },
        { pin: 'PB1', role: 'OK', kind: 'button' },
        { pin: 'PB2', role: 'SCL', kind: 'i2c' },
        { pin: 'PB3', role: 'LEFT', kind: 'button' },
        { pin: 'PB4', role: 'RIGHT', kind: 'button' },
        { pin: 'PB5', role: 'RESET', kind: 'idle' },
      ],
      noteTitle: 'Antes de conectar',
      note:
        'La dirección I²C depende del módulo: 0x27 es una de las más habituales, pero otros usan 0x3F. Si la pantalla no responde, comprobá la dirección del módulo y cambiala en el código. Verificá también la tensión de funcionamiento de la pantalla y del módulo I²C: muchos módulos LCD 16×2 están diseñados para trabajar a 5 V.',
    },
    mega2560: {
      components: [
        { name: 'Arduino Mega 2560', qty: '1', note: 'Placa donde corre el firmware completo, con gráficos y animaciones por fotogramas.' },
        { name: 'OLED 128×64 con I²C', qty: '1', note: 'Pantalla monocroma de 128×64 píxeles. El sketch dibuja con U8g2.' },
        { name: 'Pulsadores', qty: '3', note: 'LEFT en D2, RIGHT en D3 y OK en D4, cada uno entre su pin y GND.' },
        { name: 'Fuente de alimentación', qty: '1', note: 'El sketch indica VDD 3.3V para la pantalla.' },
        { name: 'Cables', qty: 'Según necesidad', note: 'Para unir la placa, la pantalla y los pulsadores.' },
      ],
      screenTitle: 'Mega 2560 → OLED I²C',
      buttonsTitle: 'Pines de los botones',
      screenRows: [
        { pin: 'D20', role: 'SDA' },
        { pin: 'D21', role: 'SCL' },
        { pin: 'VDD', role: '3.3V' },
        { pin: 'GND', role: 'GND' },
      ],
      buttonRows: [
        { pin: 'D2', role: 'LEFT' },
        { pin: 'D3', role: 'RIGHT' },
        { pin: 'D4', role: 'OK' },
      ],
      pinMapLabel: 'Pines utilizados del Mega 2560',
      pinMap: [
        { pin: 'D20', role: 'SDA', kind: 'i2c' },
        { pin: 'D21', role: 'SCL', kind: 'i2c' },
        { pin: 'D2', role: 'LEFT', kind: 'button' },
        { pin: 'D3', role: 'RIGHT', kind: 'button' },
        { pin: 'D4', role: 'OK', kind: 'button' },
      ],
      noteTitle: 'Antes de conectar',
      note:
        'El sketch selecciona el controlador U8g2 SH1106 de 128×64 e incluye una línea comentada para SSD1306, así que hay que confirmar cuál de los dos usa tu módulo. Las conexiones que figuran arriba son las que documenta el encabezado del propio sketch.',
    },
  },

  technologies: {
    eyebrow: 'Conocimientos',
    title: 'Tecnologías',
    accent: 'y conceptos',
    lead: 'Lo que hay que saber para entender, mantener y ampliar el proyecto, con la versión a la que pertenece cada cosa.',
    items: [
      { scope: 'shared', term: 'C/C++', text: 'El firmware de ambas versiones está escrito en C/C++ para Arduino, sin capas de abstracción: cada línea termina hablando con el hardware.' },
      { scope: 'shared', term: 'Arduino IDE', text: 'El entorno donde se escriben los sketches, se instalan las librerías y se carga el programa en la placa.' },
      { scope: 'attiny85', term: 'ATtiny85', text: 'Configuración de puertos y pines, resistencias pull-up internas y trabajo dentro de un presupuesto de memoria muy pequeño.' },
      { scope: 'mega2560', term: 'Arduino Mega 2560', text: 'Una placa de 8 bits con más memoria y pines, necesaria para dibujar gráficos y animar fotograma a fotograma.' },
      { scope: 'shared', term: 'Comunicación I²C', text: 'El bus de dos hilos, SDA y SCL, conecta la pantalla en las dos versiones. Solo cambia cuál es el pin de cada señal.' },
      { scope: 'attiny85', term: 'Wire · LiquidCrystal_I2C', text: 'Las librerías de la versión del ATtiny85: Wire maneja el bus y LiquidCrystal_I2C escribe los caracteres en el LCD.' },
      { scope: 'mega2560', term: 'U8g2', text: 'La librería de la versión Mega 2560. No usa caracteres: trabaja con un búfer de píxeles y primitivas de dibujo como líneas, cajas y discos.' },
      { scope: 'shared', term: 'INPUT_PULLUP', text: 'Los tres pulsadores se leen con lecturas digitales e INPUT_PULLUP: sin pulsar se lee HIGH y al pulsar LOW.' },
      { scope: 'shared', term: 'Antirrebote', text: 'El estado de cada botón se compara con la lectura anterior y solo se acepta tras un intervalo estable: 35 ms en el ATtiny85, 25 ms en el Mega 2560.' },
      { scope: 'shared', term: 'Máquinas de estados', text: 'Enumerados para los modos de la aplicación y para las fases internas de cada juego; el bucle principal decide con un switch.' },
      { scope: 'shared', term: 'millis()', text: 'El tiempo se mide con milisegundos acumulados y comparaciones, nunca con esperas fijas. En el Mega 2560 además controla los fotogramas de animación.' },
      { scope: 'shared', term: 'Números aleatorios', text: 'Reparto de cartas, comida de Snake, trayectorias de la pelota e iniciales de la máquina en las dos versiones.' },
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
      text: 'Contiene las dos implementaciones: el firmware del ATtiny85 documentado en el README y con su explicación línea a línea, y el sketch del Mega 2560 junto con los ejemplos animados en los que se apoya. También están el diagrama del circuito y las imágenes de la simulación.',
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
    text: 'TinyPocket recuerda que un proyecto de embebidos no necesita una interfaz complicada para ser entretenido: alcanza con medir bien el tiempo, leer unos pulsadores sin que reboten y comunicarse con un periférico por dos hilos. El resto es diseñar estados, y hacerlo dos veces con dos hardwares distintos.',
    ctaPrimary: 'Ver repositorio',
    ctaSecondary: 'Explorar simulación',
  },

  footer: {
    description:
      'TinyPocket es una mini consola portátil con dos implementaciones documentadas: una sobre ATtiny85 con pantalla LCD 16×2 y otra sobre Arduino Mega 2560 con pantalla OLED 128×64. En las dos, tres botones.',
    projectColumn: 'Proyecto',
    resourcesColumn: 'Recursos',
    repository: 'Repositorio',
    simulation: 'Simulación',
    note: 'Proyecto de electrónica y programación embebida.',
    top: 'Volver arriba',
  },
};

export default es;
