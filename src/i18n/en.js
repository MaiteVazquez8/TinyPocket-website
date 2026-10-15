const en = {
  meta: {
    htmlLang: 'en',
    documentTitle: 'TinyPocket — Pocket-sized console built on an ATtiny85',
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

  hero: {
    eyebrow: 'Open source · Embedded systems',
    titleLead: 'A pocket-sized console',
    titleAccent: 'built on a single ATtiny85',
    description:
      'A 16×2 LCD over I²C, three buttons and four game modes. The menu, the minigames, the virtual pet and the state machines all live in the firmware of one 8-bit microcontroller.',
    primaryCta: 'View the repository',
    secondaryCta: 'Explore the project',
    scroll: 'Scroll',
    chips: ['ATtiny85', 'LCD 16×2 · I²C', '3 buttons', 'C/C++', 'Arduino IDE'],
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
    lead: 'An electronics and embedded programming project where interacting with the device needs nothing more than three push buttons and a 16×2 display.',
    facts: [
      { label: 'Microcontroller', value: 'ATtiny85' },
      { label: 'Display', value: '16×2 LCD · I²C' },
      { label: 'Controls', value: 'LEFT · RIGHT · OK' },
      { label: 'Game modes', value: '4' },
    ],
    paragraphs: [
      'TinyPocket is a pocket-sized console built around an ATtiny85, a 16×2 LCD with an I²C backpack and three buttons. The whole behaviour of the device lives in the firmware: there is no server, no graphical interface and no logic running anywhere outside the microcontroller.',
      'The goal is to gather, in one small device, what a real embedded project involves: reading digital inputs, talking to a peripheral over a two-wire bus, measuring time, generating random numbers and reacting to all of that to build minigames and a virtual pet.',
      'When the device is switched on, the buttons, the I²C bus and the screen are initialised and the main menu appears. LEFT and RIGHT move through the options, OK enters the selected mode. Once a round finishes you go back to the menu and can pick another one.',
    ],
    closing:
      'The code is built to grow: adding a mode means creating its state, its variables and its functions, then registering it in the menu and in the switch of the main loop.',
  },

  features: {
    eyebrow: 'What it solves',
    title: 'The features',
    accent: 'that matter',
    lead: 'Simple parts on the outside, engineering decisions on the inside. This is what makes TinyPocket work.',
    items: [
      {
        tag: 'ATtiny85',
        title: 'Compact hardware',
        text: 'An 8-bit AVR microcontroller, a display and three push buttons. That is the whole rig, and the firmware has to live within it.',
      },
      {
        tag: 'LiquidCrystal_I2C',
        title: '16×2 LCD over I²C',
        text: 'Two lines of 16 characters driven with Wire and LiquidCrystal_I2C, instead of wiring every LCD pin separately.',
      },
      {
        tag: 'INPUT_PULLUP',
        title: 'Three buttons, one interface',
        text: 'LEFT, RIGHT and OK control the entire interface. Each button is wired between its pin and GND and read through the microcontroller internal pull-up.',
      },
      {
        tag: 'DEBOUNCE_MS 35',
        title: 'Button debounce',
        text: 'A mechanical button produces several readings when pressed. Each one keeps its stable state and the time of the change: a press only counts if it holds for the debounce interval.',
      },
      {
        tag: 'enum Estado',
        title: 'State machines',
        text: 'An enum decides which part of the program runs on every loop iteration. The menu is one state, each mode is another, and Blackjack adds its own internal phases on top.',
      },
      {
        tag: 'handleMascota()',
        title: 'Virtual pet',
        text: 'Hunger and happiness start at their maximum and drain over time. You have to feed it and play with it so they never reach zero.',
      },
      {
        tag: 'millis()',
        title: 'Timing without delay()',
        text: 'Games advance by comparing milliseconds, never by blocking on delay(). That keeps the loop reading buttons while a round is running.',
      },
      {
        tag: 'random()',
        title: 'Randomness and game logic',
        text: 'Random numbers for the cards, for the Snake food and for the ball trajectory, combined with configuration constants that tune the difficulty.',
      },
    ],
  },

  games: {
    eyebrow: 'Game modes',
    title: 'The four modes',
    accent: 'on an 8-bit chip',
    lead: 'Same microcontroller, same 16-character display and three buttons. Four different ways to use them.',
    controlsLabel: 'Controls',
    controls: { left: 'LEFT', right: 'RIGHT', ok: 'OK' },
    visual: {
      you: 'YOU',
      ai: 'AI',
      dealer: 'DEALER',
      player: 'PLAYER',
      dealerRule: 'Dealer >= 17',
      cells: '32 cells',
    },
    items: [
      {
        id: 'pingpong',
        name: 'Ping Pong',
        tagline: 'Paddle against the machine',
        description:
          'The player moves a paddle to return the ball while the machine does the same on the opposite side. The ball changes direction when it hits a wall or either paddle.',
        goal: 'First to 5 points wins.',
        controls: { left: 'Move paddle up', right: 'Move paddle down', ok: 'Back to menu' },
      },
      {
        id: 'mascota',
        name: 'Pet',
        tagline: 'Keep it alive',
        description:
          'A virtual pet with two stats: hunger and happiness. Both start at their maximum and drain as time passes, so the panel on the display has to be watched closely.',
        goal: 'If either stat reaches 0 the round ends. Surviving 60 seconds is the win condition.',
        controls: { left: 'Feed', right: 'Play', ok: 'Back to menu' },
      },
      {
        id: 'blackjack',
        name: 'Blackjack',
        tagline: 'Three wins or three losses',
        description:
          'A simplified card game with no physical deck: every card is generated from a random number. The player hits or stands, and the dealer keeps drawing until reaching 17.',
        goal: 'Three wins take the match; three losses lose it.',
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
  },

  hardware: {
    eyebrow: 'Components',
    title: 'Hardware',
    accent: 'and wiring',
    lead: 'A deliberately short parts list, and an equally simple wiring scheme.',
    componentsLabel: 'Components',
    quantityLabel: 'Quantity',
    components: [
      { name: 'ATtiny85', qty: '1', note: '8-bit AVR microcontroller. It runs the whole firmware.' },
      { name: '16×2 LCD with I²C backpack', qty: '1', note: 'Two lines of 16 characters. The only visual output.' },
      { name: 'Push buttons', qty: '3', note: 'LEFT, RIGHT and OK, wired between their pin and GND.' },
      { name: 'Switch', qty: '1', note: 'Main power switch.' },
      { name: 'Power supply or battery', qty: '1', note: 'Must match the operating voltage of the components.' },
      { name: 'Wires', qty: 'As needed', note: 'To connect the microcontroller, the display and the buttons.' },
    ],
    pinMapLabel: 'ATtiny85 pins in use',
    pinLegend: { i2c: 'I²C', button: 'Button', idle: 'Unused' },
    pinMap: [
      { pin: 'PB0', role: 'SDA', kind: 'i2c' },
      { pin: 'PB1', role: 'OK', kind: 'button' },
      { pin: 'PB2', role: 'SCL', kind: 'i2c' },
      { pin: 'PB3', role: 'LEFT', kind: 'button' },
      { pin: 'PB4', role: 'RIGHT', kind: 'button' },
      { pin: 'PB5', role: 'RESET', kind: 'idle' },
    ],
    lcdTitle: 'ATtiny85 → I²C LCD',
    buttonsTitle: 'Button pins',
    pinColumn: 'Pin',
    functionColumn: 'Function',
    deviceColumn: 'Device',
    noteTitle: 'Before wiring it up',
    note:
      'The I²C address depends on the module: 0x27 is one of the most common, but others use 0x3F. If the display does not respond, check the module address and change it in the code. Also verify the operating voltage of the display and the I²C backpack: many 16×2 LCD modules are designed to work at 5 V.',
  },

  technologies: {
    eyebrow: 'Knowledge',
    title: 'Technologies',
    accent: 'and concepts',
    lead: 'What you need to know to understand, maintain and extend the project.',
    items: [
      { term: 'C/C++', text: 'The firmware is written in C/C++ for Arduino with no abstraction layers: every line ends up talking to the hardware.' },
      { term: 'Arduino IDE', text: 'The environment where sketches are written, libraries are installed and the program is uploaded to the microcontroller.' },
      { term: 'ATtiny85', text: 'Port and pin configuration, internal pull-up resistors and working within a very small memory budget.' },
      { term: 'I²C communication', text: 'Wire handles the two-wire bus, SDA and SCL. The display is the only slave on it.' },
      { term: 'Digital inputs', text: 'The three buttons are read with digital reads and INPUT_PULLUP: HIGH when released, LOW when pressed.' },
      { term: 'Debounce', text: 'Each button state is compared with the previous reading and only accepted as a press after a stable interval.' },
      { term: 'State machines', text: 'Enums for the application modes and for each game phase; the main loop dispatches with a switch.' },
      { term: 'millis()', text: 'Time is measured with accumulated milliseconds and comparisons, never with fixed waits.' },
      { term: 'Random numbers', text: 'Card dealing, Snake food, ball trajectories and the machine starting positions.' },
      { term: 'Resource management', text: 'Screen positions, snake length, visible cards and scores all have a declared maximum so nothing overflows.' },
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
      text: 'The complete firmware, the circuit diagram, the simulation screenshots and the code documentation, including an explanation of every section of the program.',
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
    text: 'TinyPocket is a reminder that an embedded project does not need a complicated interface to be fun: measuring time properly and reading a few buttons without bounce is enough. Everything else is state design.',
    ctaPrimary: 'View the repository',
    ctaSecondary: 'Explore simulation',
  },

  footer: {
    description:
      'TinyPocket is a pocket-sized console based on an ATtiny85, a 16×2 LCD with I²C communication and three buttons.',
    projectColumn: 'Project',
    resourcesColumn: 'Resources',
    repository: 'Repository',
    simulation: 'Simulation',
    note: 'Electronics and embedded programming project.',
    top: 'Back to top',
  },
};

export default en;
