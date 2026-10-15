const en = {
  meta: {
    htmlLang: 'en',
    documentTitle: 'TinyPocket — Pocket-sized console in two versions',
    skipToContent: 'Skip to main content',
    openMenu: 'Open the navigation menu',
    closeMenu: 'Close the navigation menu',
    mainNavigation: 'Main navigation',
    languageLabel: 'Language',
    themeLabel: 'Theme',
    themeLight: 'Light theme',
    themeDark: 'Dark theme',
    themeToLight: 'Switch to the light theme',
    themeToDark: 'Switch to the dark theme',
    decorative: 'Decorative composition',
    primaryNavigation: 'Primary navigation',
  },

  nav: {
    about: 'Project',
    features: 'Features',
    games: 'Modes',
    hardware: 'Hardware',
    technologies: 'Tech',
    links: 'Code',
    github: 'GitHub',
  },

  scope: {
    shared: 'Shared',
    attiny85: 'ATtiny85',
    mega2560: 'Mega 2560',
  },

  hero: {
    eyebrow: 'Open source · Embedded systems',
    titleLead: 'A pocket-sized console',
    titleAccent: 'in two versions',
    description:
      'TinyPocket is an electronics and embedded programming project with two documented implementations: one on an ATtiny85 with a 16×2 LCD over I²C, and another on an Arduino Mega 2560 with a 128×64 OLED. Both have three buttons, a menu, minigames and a virtual pet.',
    primaryCta: 'View the repository',
    secondaryCta: 'Explore the project',
    scroll: 'Scroll',
    chips: ['ATtiny85 · LCD 16×2', 'Mega 2560 · OLED 128×64', '3 buttons', 'C/C++'],
    device: {
      boardLabel: 'ATtiny85 · 8-bit',
      screenLabel: 'LCD 16×2 · I²C',
      prompt: 'OK: enter',
      buttons: { left: 'LEFT', right: 'RIGHT', ok: 'OK' },
      leds: ['I²C', 'PWR', 'ACT'],
      cursor: '▮',
    },
  },

  about: {
    eyebrow: 'The project',
    title: 'What is',
    accent: 'TinyPocket?',
    lead: 'An electronics and embedded programming project with two implementations on different hardware. They are not two modes of the same device: they are two projects that share the idea and the language, not the hardware or the code.',
    versionsLabel: 'The two implementations',
    sharedLabel: 'Common to both',
    shared: [
      'Firmware in C/C++ for Arduino, uploaded with the Arduino IDE.',
      'Three buttons —LEFT, RIGHT and OK— with INPUT_PULLUP and debounce.',
      'A menu that decides which module runs through a state switch.',
      'Timing with millis() so the loop never blocks.',
      'Randomness with random() for cards, food, trajectories and starts.',
    ],
    paragraphs: [
      'TinyPocket started as a pocket-sized console built around an ATtiny85, a 16×2 LCD with an I²C backpack and three buttons. The whole behaviour of the device lives in the firmware: there is no server, no graphical interface and no logic running outside the microcontroller.',
      'The project later grew into a second implementation on an Arduino Mega 2560, with a 128×64 pixel OLED and animations computed frame by frame. The menu keeps the same shape, but every game changes completely.',
      'That is why each mode should be read together with the version that implements it: the names match, the rules do not always.',
    ],
    closing:
      'In both versions the code is built to grow: adding a mode means creating its state, its variables and its functions, then registering it in the menu and in the switch of the main loop.',
  },

  versions: {
    items: [
      {
        id: 'attiny85',
        name: 'TinyPocket · ATtiny85',
        board: 'ATtiny85',
        summary:
          'The original implementation: an 8-bit AVR microcontroller running the whole console with a 16×2 character display. The firmware is text over a four-mode menu, and it is documented section by section in the repository.',
        bullets: [
          'The complete firmware lives in a single C/C++ sketch.',
          '16×2 character LCD with an I²C backpack.',
          'Three push buttons on PB3, PB4 and PB1, read with INPUT_PULLUP.',
          'Four modes in the menu: Ping Pong, Pet, Blackjack and Snake.',
          'I²C bus with Wire and the display handled by LiquidCrystal_I2C.',
          '35 ms debounce, and every press is consumed only once.',
        ],
        source: 'README.md · src/explicacion_codigo.md',
      },
      {
        id: 'mega2560',
        name: 'TinyPocket · Mega 2560',
        board: 'Arduino Mega 2560',
        summary:
          'The second implementation: the same menu and state machine on a much larger board, with a 128×64 pixel graphic OLED. It reuses the animated examples from the repository and adds frame-by-frame animations.',
        bullets: [
          'Arduino Mega 2560 as the board, with the same state machine.',
          'Monochrome 128×64 pixel OLED drawn with U8g2.',
          'The same three buttons, plus short press and long press.',
          'Five menu entries, including an Information screen.',
          'Ping Pong opens a submenu with two variants: Normal and Breakout.',
          'Eye, card and snake animations computed with millis().',
        ],
        source: 'src/examples/tinyPocket.ino',
      },
    ],
  },

  features: {
    eyebrow: 'What it solves',
    title: 'The features',
    accent: 'that matter',
    lead: 'Simple parts on the outside, engineering decisions on the inside. Every feature states which implementation it belongs to.',
    items: [
      {
        scope: 'attiny85',
        tag: 'struct Button',
        title: '8-bit hardware',
        text: 'An 8-bit AVR microcontroller, a display and three push buttons. That is the whole rig, and the firmware has to live within it.',
      },
      {
        scope: 'attiny85',
        tag: 'LiquidCrystal_I2C',
        title: '16×2 LCD over I²C',
        text: 'Two lines of 16 characters driven with Wire and LiquidCrystal_I2C, instead of wiring every LCD pin separately.',
      },
      {
        scope: 'mega2560',
        tag: 'U8g2',
        title: '128×64 OLED display',
        text: 'The second implementation trades characters for pixels: a monochrome 128×64 screen over I²C, drawn with the U8g2 library.',
      },
      {
        scope: 'shared',
        tag: 'INPUT_PULLUP',
        title: 'Three buttons, one interface',
        text: 'LEFT, RIGHT and OK control the whole console in both versions. Each button is wired between its pin and GND and read through the internal pull-up.',
      },
      {
        scope: 'shared',
        tag: 'millis()',
        title: 'Debounce and press events',
        text: 'Every button compares its reading with the previous one and only accepts the press after a stable interval: 35 ms on the ATtiny85 and 25 ms on the Mega 2560, which also tells short and long presses apart.',
      },
      {
        scope: 'shared',
        tag: 'enum Estado',
        title: 'State machines',
        text: 'An enum decides which part of the program runs on every loop iteration. The menu is one state, each mode is another, and Blackjack adds its own internal phases on top.',
      },
      {
        scope: 'shared',
        tag: 'handleMascota()',
        title: 'Virtual pet',
        text: 'The pet exists in both versions, but it is not the same one: two stats to keep fed on the ATtiny85, four bars and four actions on the Mega 2560.',
      },
      {
        scope: 'mega2560',
        tag: 'JUEGO_BREAKOUT',
        title: 'A submenu adds Breakout',
        text: 'On the Mega 2560, Ping Pong opens a submenu with the Normal and Breakout variants, each with its own block grid, lives and end condition.',
      },
    ],
  },

  games: {
    eyebrow: 'Game modes',
    title: 'Game modes',
    accent: 'in both versions',
    lead: 'The modes share a name, not an implementation. Pick a version to see exactly what each game does there.',
    versionLabel: 'Choose version',
    controlsLabel: 'Controls',
    controls: { left: 'LEFT', right: 'RIGHT', ok: 'OK' },
    note: 'Rules, controls and goals change completely between versions: these are not the same game with a different aspect ratio.',
    visual: {
      you: 'YOU',
      ai: 'AI',
      dealer: 'DEALER',
      player: 'PLAYER',
      dealerRule: 'Dealer >= 17',
      points: 'Pts',
      cells: '32 cells',
      segments: '8 segments',
      blocks: 'blocks',
      lives: 'lives',
    },
    attiny85: [
      {
        id: 'pingpong',
        name: 'Ping Pong',
        tagline: 'Paddle against the machine',
        description:
          'The player moves a paddle to return the ball while the machine answers on the opposite side. The ball changes direction when it hits a wall or either paddle.',
        goal: 'First to 5 points wins.',
        controls: { left: 'Move paddle up', right: 'Move paddle down', ok: 'Back to menu' },
      },
      {
        id: 'mascota',
        name: 'Pet',
        tagline: 'Two stats, one limit',
        description:
          'A virtual pet with hunger and happiness. Both start at their maximum and drain as time passes, so the display has to be watched closely.',
        goal: 'If either stat reaches 0 the round ends. Surviving 60 seconds is the win condition.',
        controls: { left: 'Feed', right: 'Play', ok: 'Back to menu' },
      },
      {
        id: 'blackjack',
        name: 'Blackjack',
        tagline: 'Three wins or three losses',
        description:
          'A simplified version with no physical deck: every card is generated from a random number between 1 and 10. The player hits or stands, and the dealer keeps drawing until reaching 17.',
        goal: 'The match is won with 3 victories and lost with 3 defeats.',
        controls: { left: 'Hit', right: 'Stand', ok: 'Continue or menu' },
      },
      {
        id: 'snake',
        name: 'Snake',
        tagline: '32 cells, two rows',
        description:
          'Snake adapted to the size of a 16×2 LCD: a board of 16 columns by 2 rows, that is, 32 positions. The food always appears on a free cell.',
        goal: 'You win at a length of 12. Every time the snake grows, it moves faster.',
        controls: { left: 'Turn left', right: 'Turn right', ok: 'Back to menu' },
      },
    ],
    mega2560: [
      {
        id: 'pingpong',
        name: 'Ping Pong',
        tagline: 'One rally and the count goes up',
        description:
          'Here the player moves a paddle with LEFT and RIGHT to return the ball. It bounces off the walls and the paddle, with a trail that follows it on every move.',
        goal: 'There is no opponent and no ending: every return adds a point to the on-screen counter.',
        controls: { left: 'Move paddle left', right: 'Move paddle right', ok: 'Hold: menu' },
      },
      {
        id: 'breakout',
        name: 'Breakout',
        tagline: '32 blocks and 3 lives',
        description:
          'The second variant of the Ping Pong submenu. A paddle returns the ball against a grid of blocks; every broken block speeds the ball up slightly.',
        goal: 'You win by breaking all 32 blocks. Every ball that falls costs one of the 3 lives.',
        controls: { left: 'Move paddle left', right: 'Move paddle right', ok: 'Hold: menu' },
      },
      {
        id: 'mascota',
        name: 'Pet',
        tagline: 'Four bars, four actions',
        description:
          'This version tracks hunger, hygiene, happiness and energy, which change every 10 seconds. The eyes animate frame by frame: blink, wink, surprise or sleep.',
        goal: 'There is no defeat and no victory: it is an open mode. Eating, bathing, petting and sleeping are the four actions.',
        controls: { left: 'Previous action', right: 'Next action', ok: 'Apply action or wake up' },
      },
      {
        id: 'blackjack',
        name: 'Blackjack',
        tagline: 'A real 52-card deck',
        description:
          'Unlike the ATtiny85 version, there is a real 52-card deck that gets shuffled and dealt. The suits are drawn on screen and the cards fly in from the sides.',
        goal: 'One-hand rounds: the dealer stands on 17 or more and the scores are compared. A short OK starts another round.',
        controls: { left: 'Hit', right: 'Stand', ok: 'Short: next round · Hold: menu' },
      },
      {
        id: 'snake',
        name: 'Snake',
        tagline: 'Smooth motion inside a frame',
        description:
          'The snake moves with floating point coordinates inside a frame on the 128×64 screen, with a round head, a trail and pulsing food. It starts with 8 segments.',
        goal: 'It ends on hitting the border or itself. There is no target length: a short OK pauses the game.',
        controls: { left: 'Turn left', right: 'Turn right', ok: 'Short: pause · Hold: menu' },
      },
    ],
  },

  hardware: {
    eyebrow: 'Components',
    title: 'Hardware',
    accent: 'and wiring',
    lead: 'Each version has its own wiring scheme. ATtiny85 pins and Mega 2560 pins are not mixed here.',
    versionLabel: 'Choose version',
    componentsLabel: 'Components',
    quantityLabel: 'Quantity',
    pinColumn: 'Pin',
    functionColumn: 'Function',
    deviceColumn: 'Device',
    pinLegend: { i2c: 'I²C', button: 'Button' },
    sharedNote:
      'The main switch and the power supply are documented for the ATtiny85 version. The Mega 2560 sketch does not mention them: check the circuit diagram before wiring them in.',
    attiny85: {
      components: [
        { name: 'ATtiny85', qty: '1', note: '8-bit AVR microcontroller. It runs the whole firmware.' },
        { name: '16×2 LCD with I²C backpack', qty: '1', note: 'Two lines of 16 characters. The only visual output.' },
        { name: 'Push buttons', qty: '3', note: 'LEFT, RIGHT and OK, wired between their pin and GND.' },
        { name: 'Switch', qty: '1', note: 'Main power switch.' },
        { name: 'Power supply or battery', qty: '1', note: 'Must match the operating voltage of the components.' },
        { name: 'Wires', qty: 'As needed', note: 'To connect the microcontroller, the display and the buttons.' },
      ],
      screenTitle: 'ATtiny85 → I²C LCD',
      buttonsTitle: 'Button pins',
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
      pinMapLabel: 'ATtiny85 pins in use',
      pinMap: [
        { pin: 'PB0', role: 'SDA', kind: 'i2c' },
        { pin: 'PB1', role: 'OK', kind: 'button' },
        { pin: 'PB2', role: 'SCL', kind: 'i2c' },
        { pin: 'PB3', role: 'LEFT', kind: 'button' },
        { pin: 'PB4', role: 'RIGHT', kind: 'button' },
        { pin: 'PB5', role: 'RESET', kind: 'idle' },
      ],
      noteTitle: 'Before wiring it up',
      note:
        'The I²C address depends on the module: 0x27 is one of the most common, but others use 0x3F. If the display does not respond, check the module address and change it in the code. Also verify the operating voltage of the display and the I²C backpack: many 16×2 LCD modules are designed to work at 5 V.',
    },
    mega2560: {
      components: [
        { name: 'Arduino Mega 2560', qty: '1', note: 'The board running the complete firmware, with graphics and frame-by-frame animations.' },
        { name: '128×64 OLED with I²C', qty: '1', note: 'Monochrome 128×64 pixel display. The sketch draws with U8g2.' },
        { name: 'Push buttons', qty: '3', note: 'LEFT on D2, RIGHT on D3 and OK on D4, each wired between its pin and GND.' },
        { name: 'Power supply', qty: '1', note: 'The sketch specifies VDD 3.3V for the display.' },
        { name: 'Wires', qty: 'As needed', note: 'To connect the board, the display and the buttons.' },
      ],
      screenTitle: 'Mega 2560 → I²C OLED',
      buttonsTitle: 'Button pins',
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
      pinMapLabel: 'Mega 2560 pins in use',
      pinMap: [
        { pin: 'D20', role: 'SDA', kind: 'i2c' },
        { pin: 'D21', role: 'SCL', kind: 'i2c' },
        { pin: 'D2', role: 'LEFT', kind: 'button' },
        { pin: 'D3', role: 'RIGHT', kind: 'button' },
        { pin: 'D4', role: 'OK', kind: 'button' },
      ],
      noteTitle: 'Before wiring it up',
      note:
        'The sketch selects the U8g2 SH1106 128×64 controller and includes a commented line for SSD1306, so you have to confirm which one your module uses. The connections above are the ones documented in the sketch header itself.',
    },
  },

  technologies: {
    eyebrow: 'Knowledge',
    title: 'Technologies',
    accent: 'and concepts',
    lead: 'What you need to know to understand, maintain and extend the project, with the version each item belongs to.',
    items: [
      { scope: 'shared', term: 'C/C++', text: 'The firmware of both versions is written in C/C++ for Arduino with no abstraction layers: every line ends up talking to the hardware.' },
      { scope: 'shared', term: 'Arduino IDE', text: 'The environment where sketches are written, libraries are installed and the program is uploaded to the board.' },
      { scope: 'attiny85', term: 'ATtiny85', text: 'Port and pin configuration, internal pull-up resistors and working within a very small memory budget.' },
      { scope: 'mega2560', term: 'Arduino Mega 2560', text: 'An 8-bit board with more memory and pins, needed to draw graphics and animate frame by frame.' },
      { scope: 'shared', term: 'I²C communication', text: 'The two-wire bus, SDA and SCL, connects the display in both versions. Only the pin behind each signal changes.' },
      { scope: 'attiny85', term: 'Wire · LiquidCrystal_I2C', text: 'The libraries of the ATtiny85 version: Wire handles the bus and LiquidCrystal_I2C writes the characters to the LCD.' },
      { scope: 'mega2560', term: 'U8g2', text: 'The library of the Mega 2560 version. It does not use characters: it works on a pixel buffer with drawing primitives like lines, boxes and discs.' },
      { scope: 'shared', term: 'INPUT_PULLUP', text: 'The three buttons are read with digital reads and INPUT_PULLUP: HIGH when released, LOW when pressed.' },
      { scope: 'shared', term: 'Debounce', text: 'Each button state is compared with the previous reading and only accepted after a stable interval: 35 ms on the ATtiny85, 25 ms on the Mega 2560.' },
      { scope: 'shared', term: 'State machines', text: 'Enums for the application modes and for each game phase; the main loop dispatches with a switch.' },
      { scope: 'shared', term: 'millis()', text: 'Time is measured with accumulated milliseconds and comparisons, never with fixed waits. On the Mega 2560 it also drives the animation frames.' },
      { scope: 'shared', term: 'Random numbers', text: 'Card dealing, Snake food, ball trajectories and machine starting positions in both versions.' },
    ],
  },

  links: {
    eyebrow: 'Where to find it',
    title: 'Code',
    accent: 'and simulation',
    lead: 'The project is open: you can read it, run it and modify it.',
    externalNotice: 'Both links open in a new tab, on sites external to this page.',
    github: {
      title: 'GitHub repository',
      text: 'It contains both implementations: the ATtiny85 firmware documented in the README with its line-by-line explanation, and the Mega 2560 sketch together with the animated examples it builds on. The circuit diagram and the simulation screenshots are there too.',
      cta: 'View code on GitHub',
      handle: 'MaiteVazquez8/TinyPocket',
    },
    tinkered: {
      title: 'Tinkered simulation',
      text: 'A link to the circuit simulation published on Tinkered. It opens directly on the Tinkered site, outside this page.',
      cta: 'Explore simulation',
      handle: 'app.tinkered.ai',
    },
  },

  closing: {
    eyebrow: 'In short',
    title: 'Electronics, code and three buttons',
    text: 'TinyPocket is a reminder that an embedded project does not need a complicated interface to be fun: measuring time properly and reading a few buttons without bounce is enough. Everything else is state design, and doing it twice on two different hardwares.',
    ctaPrimary: 'View the repository',
    ctaSecondary: 'Explore simulation',
  },

  footer: {
    description:
      'TinyPocket is a pocket-sized console with two documented implementations: one on an ATtiny85 with a 16×2 LCD, and another on an Arduino Mega 2560 with a 128×64 OLED. Both have three buttons.',
    projectColumn: 'Project',
    resourcesColumn: 'Resources',
    repository: 'Repository',
    simulation: 'Simulation',
    note: 'Electronics and embedded programming project.',
    top: 'Back to top',
  },
};

export default en;
