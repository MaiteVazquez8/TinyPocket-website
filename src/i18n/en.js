const en = {
  meta: {
    htmlLang: 'en',
    documentTitle: 'TinyPocket — Pocket-sized console',
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
    features: 'How it works',
    games: 'Games',
    hardware: 'Hardware',
    technologies: 'Tech',
    links: 'Code',
    github: 'GitHub',
  },

  scope: {
    shared: 'All three',
    attiny85: 'ATtiny85',
    unoMega: 'Uno & Mega',
    uno: 'Arduino Uno',
    mega2560: 'Mega 2560',
  },

  hero: {
    eyebrow: 'Personal project · Electronics and embedded programming',
    titleLead: 'A pocket-sized console',
    titleAccent: 'with three buttons, that’s all',
    description:
      'A small screen, three buttons and a menu full of games. The whole program lives inside the microcontroller: plug it in and it runs, no phone, no accounts, no extra cables. There are three versions of the firmware, one per board, and all three ship the same five games.',
    primaryCta: 'View the repository',
    secondaryCta: 'See how it works',
    scroll: 'Keep reading',
    chips: ['ATtiny85 · LCD 16×2', 'Arduino Uno · OLED 128×64', 'Mega 2560 · OLED 128×64', 'C/C++'],
    device: {
      boardLabel: 'ATtiny85 · 8 MHz',
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
    lead: 'It started as one simple idea: a small console that runs on its own, with a screen and three buttons. The three boards came later.',
    versionsLabel: 'Three boards, one project',
    sharedLabel: 'What all three share',
    shared: [
      'A menu, five minigames and a help screen that lists the pins.',
      'LEFT and RIGHT move the selection, OK enters, holding OK goes back.',
      'All three buttons use the chip’s internal pull-up: HIGH when released, LOW when pressed.',
      'A 35 ms debounce on the ATtiny85 and 25 ms on the other two, which also tell a short press from a long one.',
      'Time is always measured with millis(). There is not a single delay() in the loop.',
      'Randomness comes from random(): cards, food, trajectories and starting positions.',
    ],
    paragraphs: [
      'The whole program fits inside the microcontroller. There is no touchscreen, no user account and no internet connection. Two buttons to move around and one to confirm is enough to run all five games.',
      'The fun part is making all of it fit. On the ATtiny85 build the chip has 512 bytes of RAM in total, and the pixel buffer of a 128×64 OLED takes 1024: double. That is why this version uses a 16×2 character LCD and draws its graphics with eight hand-made characters.',
      'That is also why there are three versions instead of one. It is not the same code with different pins: each board can afford different things, and you can see it in how the games play. The same five games, three very different ways of fitting.',
    ],
    closing:
      'Adding a new mode always follows the same recipe: one more state in the enum, its functions and an entry in the menu. It is what has let the project keep growing without falling apart.',
  },

  versions: {
    items: [
      {
        id: 'attiny85',
        name: 'TinyPocket · ATtiny85',
        board: 'ATtiny85',
        summary:
          'The smallest of the three, and the one closest to the original idea of a pocket console. An 8 KB chip with 512 bytes of RAM and a 16×2 character LCD instead of a graphic OLED, because the framebuffer would never fit.',
        bullets: [
          '16×2 character LCD with an I²C backpack and LiquidCrystal_I2C.',
          'SDA on PB0 and SCL on PB2. Buttons on PB3, PB4 and PB1.',
          'The graphics are eight characters drawn by hand with createChar().',
          'No floating point, no String, and every string sent to flash with F().',
          'Uses 5,622 bytes of flash (69 %) and 267 of SRAM (52 %).',
        ],
        source: 'ATtiny85/src/tinyPocket.ino',
      },
      {
        id: 'mega2560',
        name: 'TinyPocket · Mega 2560',
        board: 'Arduino Mega 2560',
        summary:
          'The roomy one. With 256 KB of flash and 8 KB of RAM everything fits: a 128×64 OLED with a full framebuffer and smooth animations. If you already own a Mega, this is the easiest way to try it.',
        bullets: [
          '128×64 OLED with the U8g2 library and the full 1,024-byte buffer.',
          'SDA on D20 and SCL on D21. Buttons on D2, D3 and D4.',
          'Power with a switch and a 9 V battery into the VIN pin.',
          'Ping Pong has no opponent: one paddle and a point counter.',
          'Breakout with 32 bricks, four rows of eight.',
          'Uses 42,112 bytes of flash (17 %) and 3,220 of SRAM (39 %).',
        ],
        source: 'Mega 2560/src/tinyPocket.ino',
      },
      {
        id: 'uno',
        name: 'TinyPocket · Arduino Uno',
        board: 'Arduino Uno',
        summary:
          'The same idea as the Mega, squeezed into a much smaller board. The ATmega328P has 2 KB of RAM, so nearly all the code is the same with a few tweaks: a one-page buffer, a single font and integers instead of floating point.',
        bullets: [
          '128×64 OLED with U8g2, but using the one-page buffer (128 bytes).',
          'SDA on A4 and SCL on A5. Buttons on D2, D3 and D4.',
          'Power with a switch and a battery into the BAT-5V pin.',
          'Titles are drawn twice, one pixel apart, to look bold.',
          'The same games as the Mega, with 24 snake segments instead of 40.',
          'Uses 31,218 bytes of flash (97 %) and 1,240 of SRAM (61 %).',
        ],
        source: 'Arduino Uno/src/tinyPocket.ino',
      },
    ],
  },

  features: {
    eyebrow: 'How it works',
    title: 'A few decisions',
    accent: 'explain most of it',
    lead: 'Half a dozen choices account for almost everything you see on screen.',
    items: [
      {
        scope: 'attiny85',
        tag: 'createChar()',
        title: 'Graphics made of characters',
        text: 'When an OLED will not fit, the screen is 32 text cells. Eight of them are hand-drawn: the ball, the paddle, the snake’s head, the bricks and a heart.',
      },
      {
        scope: 'unoMega',
        tag: 'U8g2',
        title: 'A real 128×64 OLED',
        text: 'On the Mega and the Uno the display is genuinely graphical. It draws on pixels with lines, boxes and discs, and animations step every 16 or 20 milliseconds.',
      },
      {
        scope: 'shared',
        tag: '3 buttons',
        title: 'Three buttons are the whole interface',
        text: 'Each button is wired between its pin and GND and read through the chip’s internal pull-up. No extra resistors, not one pin wasted.',
      },
      {
        scope: 'shared',
        tag: '35 / 25 ms',
        title: 'Debounce on every button',
        text: 'A mechanical button does not give one signal when pressed, it gives several. The code compares each reading with the previous one and only counts it if it holds long enough.',
      },
      {
        scope: 'shared',
        tag: 'millis()',
        title: 'The loop never stops',
        text: 'Games keep time with millis() instead of sleeping on delay(). That is why the buttons always respond, even mid-animation.',
      },
      {
        scope: 'shared',
        tag: 'enum Estado',
        title: 'A switch and that is it',
        text: 'The menu, each game and even Blackjack’s internal phases are states of an enum. loop() looks up which one is active and draws it.',
      },
      {
        scope: 'attiny85',
        tag: '512 B of RAM',
        title: 'Fitting it all in 512 bytes',
        text: 'The ATtiny85 firmware avoids floating point, String and dynamic menus. Text goes to flash with F() and there is a single 32-character buffer for the whole app.',
      },
      {
        scope: 'shared',
        tag: 'random()',
        title: 'No two games alike',
        text: 'Randomness deals the cards, places the snake’s food and decides where the ball leaves from. It is also seeded at boot so every round starts differently.',
      },
    ],
  },

  games: {
    eyebrow: 'Game modes',
    title: 'Five games',
    accent: 'and a help screen',
    lead: 'The same five games on all three boards, but each one implements them as best it can. Pick a version to see how.',
    versionLabel: 'Choose version',
    note: 'The names match, the implementation does not: the board changes the board size, the rules and sometimes the controls.',
    controlsLabel: 'Controls',
    controls: { left: 'LEFT', right: 'RIGHT', ok: 'OK' },
    visual: {
      you: 'YOU',
      ai: 'AI',
      dealer: 'DEALER',
      player: 'PLAYER',
      dealerRule: 'Dealer >= 17',
      points: 'Pts',
      cells: '32 cells',
      segments: '8 segments',
      blocks: 'bricks',
      lives: 'lives',
    },

    attiny85: [
      {
        id: 'pingpong',
        name: 'Ping Pong',
        tagline: 'You against the machine',
        description:
          'The ball hops from cell to cell across both LCD rows, always on a diagonal. You move the paddle on the bottom row and the machine moves its own on the top one.',
        goal: 'First to 5 points wins.',
        controls: { left: 'Move the paddle', right: 'Move the paddle', ok: 'Hold: menu' },
      },
      {
        id: 'breakout',
        name: 'Breakout',
        tagline: '16 bricks in a row',
        description:
          'The compact version. The top row is the wall and the bottom one is your paddle; the ball bounces diagonally and chips away at the bricks.',
        goal: 'You win by clearing the wall. You start with 3 lives.',
        controls: { left: 'Move the paddle', right: 'Move the paddle', ok: 'Hold: menu' },
      },
      {
        id: 'mascota',
        name: 'Pet',
        tagline: 'Two bars and a face',
        description:
          'Hunger and happiness, both from 0 to 9. They drain on their own over time and you have to push them back up before they run out. A little face blinks and makes other gestures above them.',
        goal: 'If either one hits 0 the pet gives up. Surviving 60 seconds is the win.',
        controls: { left: 'Feed', right: 'Play', ok: 'Hold: menu' },
      },
      {
        id: 'blackjack',
        name: 'Blackjack',
        tagline: 'Three wins or three losses',
        description:
          'No physical deck: every card is a random number from 1 to 10. You hit or stand, and the dealer keeps drawing until it reaches 17.',
        goal: 'Three wins take the match, three losses lose it.',
        controls: { left: 'Hit', right: 'Stand', ok: 'Short: rematch' },
      },
      {
        id: 'snake',
        name: 'Snake',
        tagline: '32 cells, two rows',
        description:
          'The snake moves cell by cell across the 32 positions of the LCD, with its head drawn as one of the custom characters.',
        goal: 'You win at 12 segments. Hitting the border or your own body ends it.',
        controls: { left: 'Turn left', right: 'Turn right', ok: 'Short: pause' },
      },
    ],

    mega2560: [
      {
        id: 'pingpong',
        name: 'Ping Pong',
        tagline: 'No opponent, just the rally',
        description:
          'You move a paddle with the buttons while the ball bounces around the OLED with a trail behind it. Every time you return it, the score goes up.',
        goal: 'There is no ending: it is a count of how many rallies you can keep up.',
        controls: { left: 'Move the paddle', right: 'Move the paddle', ok: 'Hold: menu' },
      },
      {
        id: 'breakout',
        name: 'Breakout',
        tagline: '32 bricks and 3 lives',
        description:
          'The same idea as on the ATtiny85 but much bigger: a grid of 8 × 4 blocks and a ball that keeps getting faster. Dropping it costs you a life.',
        goal: 'You win by clearing all 32 blocks.',
        controls: { left: 'Move the paddle', right: 'Move the paddle', ok: 'Short: restart' },
      },
      {
        id: 'mascota',
        name: 'Pet',
        tagline: 'Four bars, four actions',
        description:
          'Hunger, hygiene, happiness and energy, all from 0 to 100 and draining every 10 seconds. Eating, bathing, petting and sleeping are the four actions, and the eyes animate frame by frame.',
        goal: 'Nothing to win or lose here: it is an open mode to play with for a while.',
        controls: { left: 'Previous action', right: 'Next action', ok: 'Do the action' },
      },
      {
        id: 'blackjack',
        name: 'Blackjack',
        tagline: 'A real 52-card deck',
        description:
          'Here there is a real deck: 52 cards shuffled and dealt, suits drawn on screen and the cards flying in from the sides.',
        goal: 'Same as the ATtiny85: three wins win, three losses lose.',
        controls: { left: 'Hit', right: 'Stand', ok: 'Short: next round' },
      },
      {
        id: 'snake',
        name: 'Snake',
        tagline: 'Smooth motion',
        description:
          'The snake moves with floating point coordinates inside a frame on the screen, with a round head, a trail and food that pulses.',
        goal: 'There is no target length: it ends when you hit the border or yourself.',
        controls: { left: 'Turn left', right: 'Turn right', ok: 'Short: pause' },
      },
    ],

    uno: [
      {
        id: 'pingpong',
        name: 'Ping Pong',
        tagline: 'No opponent, just the rally',
        description:
          'Just like the Mega. You move a paddle with the buttons and the ball bounces around the OLED with a trail behind it. Every return adds a point.',
        goal: 'There is no ending: it is a count of how many rallies you can keep up.',
        controls: { left: 'Move the paddle', right: 'Move the paddle', ok: 'Hold: menu' },
      },
      {
        id: 'breakout',
        name: 'Breakout',
        tagline: '32 bricks and 3 lives',
        description:
          'A grid of 8 × 4 blocks with the paddle at the bottom. The same game as on the Mega, drawn with a single 4×6 font to save memory.',
        goal: 'You win by clearing all 32 blocks.',
        controls: { left: 'Move the paddle', right: 'Move the paddle', ok: 'Short: restart' },
      },
      {
        id: 'mascota',
        name: 'Pet',
        tagline: 'Four bars, four actions',
        description:
          'The same four stats and the same four actions as the Mega. The names and timings of the animations live in a table in flash so they cost no RAM.',
        goal: 'Nothing to win or lose here: it is an open mode to play with for a while.',
        controls: { left: 'Previous action', right: 'Next action', ok: 'Do the action' },
      },
      {
        id: 'blackjack',
        name: 'Blackjack',
        tagline: 'A real 52-card deck',
        description:
          'The same game as the Mega, with the deck stored as one byte per card and card coordinates as 16-bit integers. It saves just enough to fit.',
        goal: 'Same as the ATtiny85: three wins win, three losses lose.',
        controls: { left: 'Hit', right: 'Stand', ok: 'Short: next round' },
      },
      {
        id: 'snake',
        name: 'Snake',
        tagline: 'Smooth motion',
        description:
          'The same snake as the Mega, with 16-bit integer coordinates and 24 segments instead of 40. Distances are compared squared to avoid pulling in sqrt().',
        goal: 'There is no target length: it ends when you hit the border or yourself.',
        controls: { left: 'Turn left', right: 'Turn right', ok: 'Short: pause' },
      },
    ],
  },

  hardware: {
    eyebrow: 'Components',
    title: 'Hardware',
    accent: 'and wiring',
    lead: 'Each version has its own wiring. ATtiny85 pins do not work on a Mega, and the other way round.',
    versionLabel: 'Choose version',
    componentsLabel: 'Components',
    quantityLabel: 'Quantity',
    pinColumn: 'Pin',
    functionColumn: 'Function',
    deviceColumn: 'Device',
    pinLegend: { i2c: 'I²C', button: 'Button' },
    sharedNote:
      'The switch and the battery only appear in the Mega sketch (9 V into VIN) and the Uno sketch (battery into BAT-5V). The README puts the ATtiny85 version at 5 V, but its sketch does not detail the power wiring.',

    attiny85: {
      components: [
        { name: 'ATtiny85', qty: '1', note: '8-bit microcontroller running at 8 MHz, no bootloader. 8 KB of flash and 512 bytes of RAM.' },
        { name: '16×2 LCD with I²C backpack', qty: '1', note: 'Two lines of 16 characters. It takes about 8 bytes of RAM, against 1,024 for an OLED.' },
        { name: 'Push buttons', qty: '3', note: 'LEFT on PB3, RIGHT on PB4 and OK on PB1. Each wired between its pin and GND.' },
        { name: 'Power supply', qty: '1', note: 'The documented version runs at 5 V.' },
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
      pinMapLabel: 'ATtiny85 pins',
      pinMap: [
        { pin: 'PB0', role: 'SDA', kind: 'i2c' },
        { pin: 'PB1', role: 'OK', kind: 'button' },
        { pin: 'PB2', role: 'SCL', kind: 'i2c' },
        { pin: 'PB3', role: 'LEFT', kind: 'button' },
        { pin: 'PB4', role: 'RIGHT', kind: 'button' },
        { pin: 'PB5', role: 'RESET', kind: 'idle' },
      ],
      noteTitle: 'Mind the I²C address',
      note:
        'The sketch uses 0x27, the most common one, but some modules ship with 0x3F. If the display stays blank, scan the bus addresses and change LCD_ADDRESS. Check the module’s operating voltage before wiring it up too.',
    },

    mega2560: {
      components: [
        { name: 'Arduino Mega 2560', qty: '1', note: '256 KB of flash and 8 KB of RAM. Plenty for the OLED and every animation.' },
        { name: '128×64 OLED with I²C', qty: '1', note: 'Monochrome, driven by U8g2. The sketch uses the SH1106 and leaves an alternative line for SSD1306.' },
        { name: 'Push buttons', qty: '3', note: 'LEFT on D2, RIGHT on D3 and OK on D4. Each wired between its pin and GND.' },
        { name: 'Switch', qty: '1', note: 'Main power switch.' },
        { name: '9 V battery', qty: '1', note: 'With a connector to the board’s VIN pin.' },
        { name: 'Wires', qty: 'As needed', note: 'To connect the board, the display and the buttons.' },
      ],
      screenTitle: 'Mega 2560 → I²C OLED',
      buttonsTitle: 'Button pins',
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
      pinMapLabel: 'Mega 2560 pins',
      pinMap: [
        { pin: 'D20', role: 'SDA', kind: 'i2c' },
        { pin: 'D21', role: 'SCL', kind: 'i2c' },
        { pin: 'D2', role: 'LEFT', kind: 'button' },
        { pin: 'D3', role: 'RIGHT', kind: 'button' },
        { pin: 'D4', role: 'OK', kind: 'button' },
      ],
      noteTitle: 'SH1106 or SSD1306',
      note:
        'The sketch instantiates the U8g2 SH1106 128×64 controller and leaves the SSD1306 line commented out. Check which one your module actually is before compiling, because they are not interchangeable.',
    },

    uno: {
      components: [
        { name: 'Arduino Uno', qty: '1', note: 'ATmega328P: 32 KB of flash and 2 KB of RAM. The program runs tight, with 3 % of flash to spare.' },
        { name: '128×64 OLED with I²C', qty: '1', note: 'Monochrome with U8g2. The sketch uses the one-page buffer, mandatory with 2 KB of RAM.' },
        { name: 'Push buttons', qty: '3', note: 'LEFT on D2, RIGHT on D3 and OK on D4. Each wired between its pin and GND.' },
        { name: 'Switch', qty: '1', note: 'Main power switch.' },
        { name: 'Battery', qty: '1', note: 'With a connector to the board’s BAT-5V pin.' },
        { name: 'Wires', qty: 'As needed', note: 'To connect the board, the display and the buttons.' },
      ],
      screenTitle: 'Arduino Uno → I²C OLED',
      buttonsTitle: 'Button pins',
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
      pinMapLabel: 'Arduino Uno pins',
      pinMap: [
        { pin: 'A4', role: 'SDA', kind: 'i2c' },
        { pin: 'A5', role: 'SCL', kind: 'i2c' },
        { pin: 'D2', role: 'LEFT', kind: 'button' },
        { pin: 'D3', role: 'RIGHT', kind: 'button' },
        { pin: 'D4', role: 'OK', kind: 'button' },
      ],
      noteTitle: 'SH1106 or SSD1306',
      note:
        'Same controller as the Mega, again with the SSD1306 line commented out. Remember that A4 and A5 are the ATmega328P’s hardware I²C pins and the last two left on the analog port.',
    },
  },

  technologies: {
    eyebrow: 'Knowledge',
    title: 'The tech',
    accent: 'behind it',
    lead: 'What you need to know to read the code and keep extending it.',
    items: [
      { scope: 'shared', term: 'C/C++', text: 'The firmware is written in C/C++ for Arduino with no layer on top: every line ends up talking to the hardware.' },
      { scope: 'shared', term: 'Arduino IDE', text: 'Where the code is written, compiled and uploaded. Each version is compiled on its own, with its own core and board.' },
      { scope: 'attiny85', term: 'ATtiny85', text: 'An 8 KB chip with just 512 bytes of RAM. It is what forces a different approach: no floats, no String, text in flash.' },
      { scope: 'mega2560', term: 'Arduino Mega 2560', text: '256 KB of flash and 8 KB of RAM. The board that lets you work with a full framebuffer and no compromises.' },
      { scope: 'uno', term: 'ATmega328P', text: '32 KB of flash and 2 KB of RAM. The same program as the Mega, with the buffer cut to one page and coordinates as integers.' },
      { scope: 'shared', term: 'I²C', text: 'The two wires that connect the display: SDA and SCL. The pin changes with the board, everything else is the same.' },
      { scope: 'attiny85', term: 'LiquidCrystal_I2C', text: 'The library that writes characters to the ATtiny85’s LCD. U8g2 simply does not fit in that memory.' },
      { scope: 'unoMega', term: 'U8g2', text: 'The graphics library on the Mega and the Uno. It draws on pixels with lines, boxes and discs instead of writing characters.' },
      { scope: 'shared', term: 'INPUT_PULLUP', text: 'All three buttons use the chip’s internal pull-up. HIGH when released, LOW when pressed, so no external resistors are needed.' },
      { scope: 'shared', term: 'Debounce', text: 'A mechanical button gives several readings when pressed. The code compares each one with the previous and only counts it if it holds for 35 ms on the ATtiny85 or 25 ms on the others.' },
      { scope: 'shared', term: 'State machines', text: 'The menu and each game are states of an enum. The main loop walks them with a switch and runs whichever one is active.' },
      { scope: 'shared', term: 'millis()', text: 'Every animation keeps time with millis() instead of using delay(). That way the loop is never left waiting and the buttons keep responding.' },
    ],
  },

  links: {
    eyebrow: 'Where it is',
    title: 'Code',
    accent: 'and simulation',
    lead: 'The project is open: you can read it, compile it and change it.',
    externalNotice: 'Both links open in a new tab, on sites external to this page.',
    github: {
      title: 'GitHub repository',
      text: 'Each version lives in its own folder, with its final sketch, the code walkthrough and six animation examples to look at each effect on its own. The circuit diagram and the simulation screenshots are there too.',
      cta: 'View the code',
      handle: 'MaiteVazquez8/TinyPocket',
    },
    tinkered: {
      title: 'Tinkered simulation',
      text: 'A link to the circuit simulation published on Tinkered. It opens directly on the Tinkered site, outside this page.',
      cta: 'Open the simulation',
      handle: 'app.tinkered.ai',
    },
  },

  closing: {
    eyebrow: 'In short',
    title: 'Electronics, code and three buttons',
    text:
      'The point of a project like this is not making something hard, it is making something small actually work. Keeping time with millis(), reading three buttons without them chattering and fitting a string into whatever memory is left: with that, you can hold a whole console in your hand.',
    ctaPrimary: 'View the repository',
    ctaSecondary: 'Open the simulation',
  },

  footer: {
    description:
      'A pocket-sized console with a menu, five games, a virtual pet and three buttons. One version for the ATtiny85, one for the Arduino Uno and one for the Arduino Mega 2560.',
    projectColumn: 'Project',
    resourcesColumn: 'Resources',
    repository: 'Repository',
    simulation: 'Simulation',
    note: 'Electronics and embedded programming project.',
    top: 'Back to top',
  },
};

export default en;
