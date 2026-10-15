const es = {
  meta: {
    htmlLang: 'es',
    documentTitle: 'TinyPocket — Mini consola de bolsillo',
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
    games: 'Juegos',
    hardware: 'Hardware',
    technologies: 'Tecnología',
    links: 'Código',
    github: 'GitHub',
  },

  scope: {
    shared: 'Las tres',
    attiny85: 'ATtiny85',
    unoMega: 'Uno y Mega',
    uno: 'Arduino Uno',
    mega2560: 'Mega 2560',
  },

  hero: {
    eyebrow: 'Proyecto personal · Electrónica y programación embebida',
    titleLead: 'Una mini consola de bolsillo',
    titleAccent: 'con tres botones y nada más',
    description:
      'Una pantalla pequeña, tres botones y un menú con juegos. Todo el programa vive dentro del microcontrolador: se enchufa y ya está, sin móvil, sin cuentas y sin cables extra. Hay tres versiones del firmware, una por placa, y las tres llevan los mismos cinco juegos.',
    primaryCta: 'Ver el repositorio',
    secondaryCta: 'Ver cómo funciona',
    scroll: 'Seguir leyendo',
    chips: ['ATtiny85 · LCD 16×2', 'Arduino Uno · OLED 128×64', 'Mega 2560 · OLED 128×64', 'C/C++'],
    device: {
      boardLabel: 'ATtiny85 · 8 MHz',
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
    lead: 'La idea es una sola: una consola pequeña que funcione sola, con una pantalla y tres botones. Después vinieron las tres placas.',
    versionsLabel: 'Tres placas, un mismo proyecto',
    sharedLabel: 'Lo que tienen en común',
    shared: [
      'Un menú, cinco minijuegos y una pantalla de ayuda con los pines.',
      'LEFT y derecha mueven la selección, OK entra y mantener OK vuelve atrás.',
      'Los tres pulsadores usan el pull-up interno del chip: sin pulsar se lee HIGH, al pulsar LOW.',
      'Un antirrebote de 35 ms en el ATtiny85 y de 25 ms en las otras dos, que además distinguen pulsación corta de larga.',
      'Todo el tiempo se mide con millis(). En el bucle no hay ni un solo delay().',
      'El azar sale de random(): cartas, comida, trayectorias e inicios de partida.',
    ],
    paragraphs: [
      'El programa entero cabe dentro del microcontrolador. No hay pantalla táctil, ni cuenta de usuario, ni conexión a internet. Con dos botones para moverte y uno para entrar ya alcanza para manejar los cinco juegos.',
      'Lo divertido del proyecto es que todo tiene que entrar. En la versión del ATtiny85 el chip tiene 512 bytes de RAM en total, y el búfer de píxeles de un OLED de 128×64 ocupa 1024: el doble. Por eso esa versión usa un LCD de 16×2 de caracteres y dibuja los gráficos con ocho caracteres hechos a mano.',
      'Ese es el motivo de que haya tres versiones y no una. No es el mismo código con otros pines: cada placa puede permitirse cosas distintas, y eso se nota en cómo se juega. Los mismos cinco juegos, tres formas muy distintas de caber.',
    ],
    closing:
      'Añadir un modo nuevo es siempre el mismo ritual: un estado más en el enum, sus funciones y una entrada en el menú. Es lo que ha permitido que el proyecto siga creciendo sin romperse.',
  },

  versions: {
    items: [
      {
        id: 'attiny85',
        name: 'TinyPocket · ATtiny85',
        board: 'ATtiny85',
        summary:
          'La más pequeña de las tres, y la que más se acerca a la idea de una consola de bolsillo. Un chip de 8 KB de flash y 512 bytes de RAM, con un LCD de 16×2 de caracteres en lugar de un OLED gráfico, porque el búfer de vídeo no entraría ni de lejos.',
        bullets: [
          'LCD de 16×2 caracteres con módulo I²C y LiquidCrystal_I2C.',
          'SDA en PB0 y SCL en PB2. Botones en PB3, PB4 y PB1.',
          'Los gráficos son ocho caracteres dibujados a mano con createChar().',
          'Sin coma flotante ni String, y todos los textos enviados a flash con F().',
          'Ocupa 5.622 bytes de flash (69 %) y 267 de SRAM (52 %).',
        ],
        source: 'ATtiny85/src/tinyPocket.ino',
      },
      {
        id: 'mega2560',
        name: 'TinyPocket · Mega 2560',
        board: 'Arduino Mega 2560',
        summary:
          'La que va sobrada. Con 256 KB de flash y 8 KB de RAM entra de todo: un OLED de 128×64 con búfer completo y animaciones suaves. Si ya tenés una Mega a mano, es la forma más cómoda de probarlo.',
        bullets: [
          'OLED de 128×64 con la librería U8g2 y búfer completo de 1.024 bytes.',
          'SDA en D20 y SCL en D21. Botones en D2, D3 y D4.',
          'Alimentación con switch y batería de 9 V al pin VIN.',
          'Ping Pong sin rival: una sola paleta y un contador de puntos.',
          'Breakout con 32 ladrillos, cuatro filas de ocho.',
          'Ocupa 42.112 bytes de flash (17 %) y 3.220 de SRAM (39 %).',
        ],
        source: 'Mega 2560/src/tinyPocket.ino',
      },
      {
        id: 'uno',
        name: 'TinyPocket · Arduino Uno',
        board: 'Arduino Uno',
        summary:
          'La misma idea del Mega metida en una placa mucho más pequeña. El ATmega328P tiene 2 KB de RAM, así que casi todo el programa es el mismo con ajustes: búfer de una página, una sola fuente tipográfica y enteros en lugar de coma flotante.',
        bullets: [
          'OLED de 128×64 con U8g2, pero con búfer de una página (128 bytes).',
          'SDA en A4 y SCL en A5. Botones en D2, D3 y D4.',
          'Alimentación con switch y batería al pin BAT-5V.',
          'Los títulos se dibujan dos veces desplazadas un píxel para parecer negrita.',
          'Los mismos juegos que el Mega, con 24 segmentos de serpiente en vez de 40.',
          'Ocupa 31.218 bytes de flash (97 %) y 1.240 de SRAM (61 %).',
        ],
        source: 'Arduino Uno/src/tinyPocket.ino',
      },
    ],
  },

  features: {
    eyebrow: 'Cómo está hecho',
    title: 'Lo que hay dentro',
    accent: 'que importan',
    lead: 'Unas cuantas decisiones explican casi todo lo que se ve en pantalla.',
    items: [
      {
        scope: 'attiny85',
        tag: 'createChar()',
        title: 'Gráficos con caracteres',
        text: 'Cuando no cabe un OLED, la pantalla son 32 casillas de texto. Ocho de ellas están dibujadas a mano: la pelota, la paleta, la cabeza de la serpiente, los ladrillos y el corazón.',
      },
      {
        scope: 'unoMega',
        tag: 'U8g2',
        title: 'Un OLED de 128×64',
        text: 'En el Mega y el Uno la pantalla es gráfica de verdad. Se dibuja sobre píxeles con líneas, cajas y discos, y las animaciones avanzan cada 16 o 20 milisegundos.',
      },
      {
        scope: 'shared',
        tag: '3 botones',
        title: 'Toda la interfaz son tres botones',
        text: 'Cada pulsador va entre su pin y GND y se lee con la resistencia interna del chip. Ni un resistor externo, ni un pin de más.',
      },
      {
        scope: 'shared',
        tag: '35 / 25 ms',
        title: 'Antirrebote en los tres botones',
        text: 'Un pulsador mecánico al presionarse no da una señal, da varias. El código compara cada lectura con la anterior y solo cuenta como pulsación si se mantiene el tiempo suficiente.',
      },
      {
        scope: 'shared',
        tag: 'millis()',
        title: 'El bucle nunca se para',
        text: 'Los juegos miden el tiempo con millis() en vez de dormirse con delay(). Por eso los botones responden siempre, incluso con una animación en marcha.',
      },
      {
        scope: 'shared',
        tag: 'enum Estado',
        title: 'Un switch y ya está',
        text: 'El menú, cada juego y hasta las fases internas del Blackjack son estados de un enum. loop() mira en cuál está y dibuja lo que toca en ese momento.',
      },
      {
        scope: 'attiny85',
        tag: '512 B de RAM',
        title: 'Meter el proyecto en 512 bytes',
        text: 'El firmware del ATtiny85 prescinde de coma flotante, de String y de menús dinámicos. Los textos van a flash con F() y hay un único buffer de 32 caracteres para toda la aplicación.',
      },
      {
        scope: 'shared',
        tag: 'random()',
        title: 'Que no haya dos partidas iguales',
        text: 'El azar reparte las cartas, coloca la comida de la serpiente y decide por dónde sale la pelota. También se usa al arrancar, para que cada partida empiece de una forma distinta.',
      },
    ],
  },

  games: {
    eyebrow: 'Modos de juego',
    title: 'Cinco juegos',
    accent: 'y una pantalla de ayuda',
    lead: 'Los mismos cinco juegos en las tres versiones, pero cada placa los implementa como puede. Elegí una versión para ver cómo.',
    versionLabel: 'Elegir versión',
    note: 'Los nombres coinciden, el desarrollo no: según la placa cambie el tablero, las reglas y hasta los controles.',
    controlsLabel: 'Controles',
    controls: { left: 'LEFT', right: 'RIGHT', ok: 'OK' },
    visual: {
      you: 'TÚ',
      ai: 'IA',
      dealer: 'CASA',
      player: 'JUGADOR',
      dealerRule: 'Casa >= 17',
      points: 'Pts',
      cells: '32 casillas',
      segments: '8 segmentos',
      blocks: 'ladrillos',
      lives: 'vidas',
    },

    attiny85: [
      {
        id: 'pingpong',
        name: 'Ping Pong',
        tagline: 'Tú contra la máquina',
        description:
          'La pelota salta de casilla en casilla por las dos filas del LCD, siempre en diagonal. Movés tu paleta por abajo y la máquina mueve la suya por arriba.',
        goal: 'Gana quien llegue antes a 5 puntos.',
        controls: { left: 'Mover la paleta', right: 'Mover la paleta', ok: 'Mantener: menú' },
      },
      {
        id: 'breakout',
        name: 'Breakout',
        tagline: '16 ladrillos en una fila',
        description:
          'La versión compacta. La fila de arriba es la muralla y la de abajo la paleta; la pelota rebota en diagonal y va abriendo hueco al llegar arriba.',
        goal: 'Ganas al dejar la muralla vacía. Empiezas con 3 vidas.',
        controls: { left: 'Mover la paleta', right: 'Mover la paleta', ok: 'Mantener: menú' },
      },
      {
        id: 'mascota',
        name: 'Mascota',
        tagline: 'Dos barras y una cara',
        description:
          'Hambre y felicidad, las dos de 0 a 9. Bajan solas con el tiempo y hay que subirlas con los botones antes de que se agoten. Arriba se ve una carita que parpadea y hace otros gestos.',
        goal: 'Si alguna llega a 0 se apaga. Sobrevivir 60 segundos es ganar.',
        controls: { left: 'Alimentar', right: 'Jugar', ok: 'Mantener: menú' },
      },
      {
        id: 'blackjack',
        name: 'Blackjack',
        tagline: 'Tres victorias o tres derrotas',
        description:
          'Sin baraja física: cada carta es un número aleatorio del 1 al 10. Pedís carta o te plantás, y la banca sigue sacando hasta llegar a 17.',
        goal: 'La partida se gana con 3 victorias y se pierde con 3 derrotas.',
        controls: { left: 'Pedir carta', right: 'Plantarse', ok: 'Corto: revancha' },
      },
      {
        id: 'snake',
        name: 'Snake',
        tagline: '32 casillas, dos filas',
        description:
          'La serpiente se mueve casilla a casilla por las 32 posiciones del LCD, con la cabeza dibujada como un carácter propio.',
        goal: 'Gana al llegar a 12 segmentos. Si toca el borde o su propio cuerpo, se acaba.',
        controls: { left: 'Girar a la izquierda', right: 'Girar a la derecha', ok: 'Corto: pausa' },
      },
    ],

    mega2560: [
      {
        id: 'pingpong',
        name: 'Ping Pong',
        tagline: 'Sin rival, solo el saque',
        description:
          'Movés una paleta con los botones y la pelota va rebotando por el OLED, con una estela que la acompaña. Cada vez que la devolvés, sube un punto.',
        goal: 'No hay final: es un contador de cuántos saques aguantás.',
        controls: { left: 'Mover la paleta', right: 'Mover la paleta', ok: 'Mantener: menú' },
      },
      {
        id: 'breakout',
        name: 'Breakout',
        tagline: '32 ladrillos y 3 vidas',
        description:
          'La misma idea que en el ATtiny85 pero en grande: una rejilla de 8 × 4 bloques y la pelota cada vez más rápida. Al caer por abajo te cuesta una vida.',
        goal: 'Ganas al limpiar los 32 bloques.',
        controls: { left: 'Mover la paleta', right: 'Mover la paleta', ok: 'Corto: reiniciar' },
      },
      {
        id: 'mascota',
        name: 'Mascota',
        tagline: 'Cuatro barras y cuatro acciones',
        description:
          'Hambre, higiene, felicidad y energía, todas de 0 a 100 y bajando cada 10 segundos. Comer, bañar, acariciar y dormir son las cuatro acciones, y los ojos se animan fotograma a fotograma.',
        goal: 'No se gana ni se pierde: es un modo abierto para trastearla un rato.',
        controls: { left: 'Acción anterior', right: 'Acción siguiente', ok: 'Aplicar la acción' },
      },
      {
        id: 'blackjack',
        name: 'Blackjack',
        tagline: 'Mazo real de 52 cartas',
        description:
          'Aquí sí hay baraja: 52 cartas que se mezclan y se reparten, con los palos dibujados en pantalla y las cartas entrando volando desde los lados.',
        goal: 'Igual que en el ATtiny85: 3 victorias ganan y 3 derrotas pierden.',
        controls: { left: 'Pedir carta', right: 'Plantarse', ok: 'Corto: otra ronda' },
      },
      {
        id: 'snake',
        name: 'Snake',
        tagline: 'Movimiento suave',
        description:
          'La serpiente se mueve con coordenadas en coma flotante dentro de un marco en la pantalla, con cabeza redonda, estela y comida que late.',
        goal: 'No hay largo objetivo: se acaba al chocar con el borde o consigo misma.',
        controls: { left: 'Girar a la izquierda', right: 'Girar a la derecha', ok: 'Corto: pausa' },
      },
    ],

    uno: [
      {
        id: 'pingpong',
        name: 'Ping Pong',
        tagline: 'Sin rival, solo el saque',
        description:
          'Igual que en el Mega. Movés una paleta con los botones y la pelota rebota por el OLED con una estela detrás. Cada devolución suma un punto.',
        goal: 'No hay final: es un contador de cuántos saques aguantás.',
        controls: { left: 'Mover la paleta', right: 'Mover la paleta', ok: 'Mantener: menú' },
      },
      {
        id: 'breakout',
        name: 'Breakout',
        tagline: '32 ladrillos y 3 vidas',
        description:
          'Rejilla de 8 × 4 bloques, con la paleta abajo. El mismo juego que en el Mega, dibujado con una única fuente de 4×6 píxeles para no gastar memoria.',
        goal: 'Ganas al limpiar los 32 bloques.',
        controls: { left: 'Mover la paleta', right: 'Mover la paleta', ok: 'Corto: reiniciar' },
      },
      {
        id: 'mascota',
        name: 'Mascota',
        tagline: 'Cuatro barras y cuatro acciones',
        description:
          'Las mismas cuatro estadísticas y las mismas cuatro acciones que en el Mega. Los nombres y las duraciones de las animaciones viven en una tabla en flash para no ocupar RAM.',
        goal: 'No se gana ni se pierde: es un modo abierto para trastearla un rato.',
        controls: { left: 'Acción anterior', right: 'Acción siguiente', ok: 'Aplicar la acción' },
      },
      {
        id: 'blackjack',
        name: 'Blackjack',
        tagline: 'Mazo real de 52 cartas',
        description:
          'Mismo juego que el Mega, con el mazo guardado en un byte por carta y las coordenadas de las cartas animadas en enteros de 16 bits. Ahorra lo justo para que quepa.',
        goal: 'Igual que en el ATtiny85: 3 victorias ganan y 3 derrotas pierden.',
        controls: { left: 'Pedir carta', right: 'Plantarse', ok: 'Corto: otra ronda' },
      },
      {
        id: 'snake',
        name: 'Snake',
        tagline: 'Movimiento suave',
        description:
          'La misma serpiente que en el Mega, con coordenadas enteras de 16 bits y 24 segmentos en lugar de 40. Las distancias se comparan al cuadrado para no cargar sqrt().',
        goal: 'No hay largo objetivo: se acaba al chocar con el borde o consigo misma.',
        controls: { left: 'Girar a la izquierda', right: 'Girar a la derecha', ok: 'Corto: pausa' },
      },
    ],
  },

  hardware: {
    eyebrow: 'Componentes',
    title: 'Hardware',
    accent: 'y conexiones',
    lead: 'Cada versión tiene su propio esquema. Los pines del ATtiny85 no sirven para el Mega, ni al revés.',
    versionLabel: 'Elegir versión',
    componentsLabel: 'Componentes',
    quantityLabel: 'Cantidad',
    pinColumn: 'Pin',
    functionColumn: 'Función',
    deviceColumn: 'Dispositivo',
    pinLegend: { i2c: 'I²C', button: 'Botón' },
    sharedNote:
      'El interruptor y la batería solo aparecen documentados en los sketches del Mega (9 V al pin VIN) y del Uno (batería al pin BAT-5V). El README sitúa la versión del ATtiny85 en 5 V, pero su sketch no detalla la alimentación.',

    attiny85: {
      components: [
        { name: 'ATtiny85', qty: '1', note: 'Microcontrolador de 8 bits a 8 MHz, sin bootloader. 8 KB de flash y 512 bytes de RAM.' },
        { name: 'LCD 16×2 con módulo I²C', qty: '1', note: 'Dos líneas de 16 caracteres. Ocupa unos 8 bytes de RAM, frente a los 1.024 de un OLED.' },
        { name: 'Pulsadores', qty: '3', note: 'LEFT en PB3, RIGHT en PB4 y OK en PB1. Cada uno entre su pin y GND.' },
        { name: 'Fuente de alimentación', qty: '1', note: 'La versión documentada trabaja a 5 V.' },
        { name: 'Cables', qty: 'Según necesidad', note: 'Para unir el microcontrolador, la pantalla y los pulsadores.' },
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
      pinMapLabel: 'Pines del ATtiny85',
      pinMap: [
        { pin: 'PB0', role: 'SDA', kind: 'i2c' },
        { pin: 'PB1', role: 'OK', kind: 'button' },
        { pin: 'PB2', role: 'SCL', kind: 'i2c' },
        { pin: 'PB3', role: 'LEFT', kind: 'button' },
        { pin: 'PB4', role: 'RIGHT', kind: 'button' },
        { pin: 'PB5', role: 'RESET', kind: 'idle' },
      ],
      noteTitle: 'Ojo con la dirección I²C',
      note:
        'El sketch usa la dirección 0x27, que es la más común, pero algunos módulos vienen con 0x3F. Si la pantalla se queda en blanco, escaneá las direcciones del bus y cambiá LCD_ADDRESS. Verificá también la tensión del módulo antes de conectarlo.',
    },

    mega2560: {
      components: [
        { name: 'Arduino Mega 2560', qty: '1', note: '256 KB de flash y 8 KB de RAM. De sobra para el OLED y todas las animaciones.' },
        { name: 'OLED 128×64 con I²C', qty: '1', note: 'Monocromo, controlado con U8g2. El sketch usa el SH1106 y deja una línea alternativa para SSD1306.' },
        { name: 'Pulsadores', qty: '3', note: 'LEFT en D2, RIGHT en D3 y OK en D4. Cada uno entre su pin y GND.' },
        { name: 'Switch', qty: '1', note: 'Interruptor general de alimentación.' },
        { name: 'Batería de 9 V', qty: '1', note: 'Con conector al pin VIN de la placa.' },
        { name: 'Cables', qty: 'Según necesidad', note: 'Para unir la placa, la pantalla y los pulsadores.' },
      ],
      screenTitle: 'Mega 2560 → OLED I²C',
      buttonsTitle: 'Pines de los botones',
      screenRows: [
        { pin: 'D20', role: 'SDA' },
        { pin: 'D21', role: 'SCL' },
        { pin: 'GND', role: 'GND' },
      ],
      buttonRows: [
        { pin: 'D2', role: 'LEFT' },
        { pin: 'D3', role: 'RIGHT' },
        { pin: 'D4', role: 'OK' },
      ],
      pinMapLabel: 'Pines del Mega 2560',
      pinMap: [
        { pin: 'D20', role: 'SDA', kind: 'i2c' },
        { pin: 'D21', role: 'SCL', kind: 'i2c' },
        { pin: 'D2', role: 'LEFT', kind: 'button' },
        { pin: 'D3', role: 'RIGHT', kind: 'button' },
        { pin: 'D4', role: 'OK', kind: 'button' },
      ],
      noteTitle: 'SH1106 o SSD1306',
      note:
        'El sketch instancia el controlador U8g2 SH1106 de 128×64 y deja comentada la línea equivalente para SSD1306. Confirmá cuál de los dos lleva tu módulo antes de compilar, porque no son intercambiables.',
    },

    uno: {
      components: [
        { name: 'Arduino Uno', qty: '1', note: 'ATmega328P: 32 KB de flash y 2 KB de RAM. El programa va justo, con un 3 % de flash libre.' },
        { name: 'OLED 128×64 con I²C', qty: '1', note: 'Monocromo con U8g2. El sketch usa el búfer de una página, obligatorio con 2 KB de RAM.' },
        { name: 'Pulsadores', qty: '3', note: 'LEFT en D2, RIGHT en D3 y OK en D4. Cada uno entre su pin y GND.' },
        { name: 'Switch', qty: '1', note: 'Interruptor general de alimentación.' },
        { name: 'Batería', qty: '1', note: 'Con conector al pin BAT-5V de la placa.' },
        { name: 'Cables', qty: 'Según necesidad', note: 'Para unir la placa, la pantalla y los pulsadores.' },
      ],
      screenTitle: 'Arduino Uno → OLED I²C',
      buttonsTitle: 'Pines de los botones',
      screenRows: [
        { pin: 'A4', role: 'SDA' },
        { pin: 'A5', role: 'SCL' },
        { pin: 'GND', role: 'GND' },
      ],
      buttonRows: [
        { pin: 'D2', role: 'LEFT' },
        { pin: 'D3', role: 'RIGHT' },
        { pin: 'D4', role: 'OK' },
      ],
      pinMapLabel: 'Pines del Arduino Uno',
      pinMap: [
        { pin: 'A4', role: 'SDA', kind: 'i2c' },
        { pin: 'A5', role: 'SCL', kind: 'i2c' },
        { pin: 'D2', role: 'LEFT', kind: 'button' },
        { pin: 'D3', role: 'RIGHT', kind: 'button' },
        { pin: 'D4', role: 'OK', kind: 'button' },
      ],
      noteTitle: 'SH1106 o SSD1306',
      note:
        'Mismo controlador que en el Mega, también con la línea de SSD1306 comentada. Recordá que A4 y A5 son los pines I²C de hardware del ATmega328P y los últimos dos que quedan libres en el puerto analógico.',
    },
  },

  technologies: {
    eyebrow: 'Conocimientos',
    title: 'Tecnología',
    accent: 'que hay detrás',
    lead: 'Lo que hace falta saber para entender el código y seguir ampliándolo.',
    items: [
      { scope: 'shared', term: 'C/C++', text: 'El firmware está escrito en C/C++ para Arduino, sin capas por encima: cada línea acaba hablando con el hardware.' },
      { scope: 'shared', term: 'Arduino IDE', text: 'Donde se escribe, se compila y se sube a la placa. Cada versión se compila por separado, con su núcleo y su placa.' },
      { scope: 'attiny85', term: 'ATtiny85', text: 'Un chip de 8 KB con apenas 512 bytes de RAM. Es el que obliga a plantear el proyecto de otra manera: sin coma flotante, sin String y con los textos en flash.' },
      { scope: 'mega2560', term: 'Arduino Mega 2560', text: '256 KB de flash y 8 KB de RAM. Es la placa que deja trabajar con un búfer de vídeo completo sin recortes.' },
      { scope: 'uno', term: 'ATmega328P', text: '32 KB de flash y 2 KB de RAM. El mismo programa que en el Mega, pero con el búfer reducido a una página y las coordenadas en enteros.' },
      { scope: 'shared', term: 'I²C', text: 'Las dos líneas que conectan la pantalla: SDA y SCL. Cambia el pin según la placa, el resto es igual.' },
      { scope: 'attiny85', term: 'LiquidCrystal_I2C', text: 'La librería que escribe caracteres en el LCD del ATtiny85. U8g2 simplemente no entra en esa memoria.' },
      { scope: 'unoMega', term: 'U8g2', text: 'La librería gráfica del Mega y del Uno. Dibuja sobre píxeles con líneas, cajas y discos en vez de escribir caracteres.' },
      { scope: 'shared', term: 'INPUT_PULLUP', text: 'Los tres pulsadores usan la resistencia interna del chip. Sin pulsar se lee HIGH y al pulsar LOW, así que no hacen falta resistencias externas.' },
      { scope: 'shared', term: 'Antirrebote', text: 'Un pulsador mecánico al presionarse da varias lecturas seguidas. El código compara cada una con la anterior y solo cuenta la pulsación si aguanta 35 ms en el ATtiny85 o 25 ms en las otras dos.' },
      { scope: 'shared', term: 'Máquinas de estados', text: 'El menú y cada juego son estados de un enum. El bucle principal los va mirando en un switch y ejecuta el que toca en cada vuelta.' },
      { scope: 'shared', term: 'millis()', text: 'Todas las animaciones miden el tiempo con millis() en vez de usar delay(). Así el bucle nunca se queda esperando y los botones siguen respondiendo.' },
    ],
  },

  links: {
    eyebrow: 'Dónde está',
    title: 'Código',
    accent: 'y simulación',
    lead: 'El proyecto es abierto: se puede leer, compilar y modificar.',
    externalNotice: 'Los dos enlaces se abren en una pestaña nueva, en sitios externos a esta página.',
    github: {
      title: 'Repositorio en GitHub',
      text: 'Cada versión vive en su propia carpeta, con su sketch final, la explicación del código y seis ejemplos de animación para ver cada efecto por separado. También están el diagrama del circuito y las capturas de la simulación.',
      cta: 'Ver el código',
      handle: 'MaiteVazquez8/TinyPocket',
    },
    tinkered: {
      title: 'Simulación en Tinkered',
      text: 'Enlace a la simulación del circuito publicada en Tinkered. Se abre directamente en el sitio de Tinkered, fuera de esta página.',
      cta: 'Abrir la simulación',
      handle: 'app.tinkered.ai',
    },
  },

  closing: {
    eyebrow: 'En resumen',
    title: 'Electrónica, código y tres botones',
    text:
      'La gracia de este tipo de proyecto no está en hacer algo difícil, sino en que algo tan pequeño funcione. Medir el tiempo con millis(), leer tres pulsadores sin que salten y escribir un texto que entre en el hueco de memoria que queda: con eso se puede tener una consola entera en la palma de la mano.',
    ctaPrimary: 'Ver el repositorio',
    ctaSecondary: 'Abrir la simulación',
  },

  footer: {
    description:
      'Mini consola portátil con menú, cinco juegos, una mascota y tres botones. Con una versión para ATtiny85, otra para Arduino Uno y otra para Arduino Mega 2560.',
    projectColumn: 'Proyecto',
    resourcesColumn: 'Recursos',
    repository: 'Repositorio',
    simulation: 'Simulación',
    note: 'Proyecto de electrónica y programación embebida.',
    top: 'Volver arriba',
  },
};

export default es;
