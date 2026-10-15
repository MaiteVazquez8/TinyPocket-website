const pt = {
  meta: {
    htmlLang: 'pt',
    documentTitle: 'TinyPocket — Console de bolso',
    skipToContent: 'Ir para o conteúdo principal',
    openMenu: 'Abrir o menu de navegação',
    closeMenu: 'Fechar o menu de navegação',
    mainNavigation: 'Navegação principal',
    languageLabel: 'Idioma',
    themeLabel: 'Tema',
    themeLight: 'Tema claro',
    themeDark: 'Tema escuro',
    themeToLight: 'Mudar para o tema claro',
    themeToDark: 'Mudar para o tema escuro',
    decorative: 'Composição decorativa',
    primaryNavigation: 'Navegação principal',
  },

  nav: {
    about: 'Projeto',
    features: 'Como funciona',
    games: 'Jogos',
    hardware: 'Hardware',
    technologies: 'Tecnologia',
    links: 'Código',
    github: 'GitHub',
  },

  scope: {
    shared: 'As três',
    attiny85: 'ATtiny85',
    unoMega: 'Uno e Mega',
    uno: 'Arduino Uno',
    mega2560: 'Mega 2560',
  },

  hero: {
    eyebrow: 'Projeto pessoal · Eletrónica e programação embarcada',
    titleLead: 'Uma console de bolso',
    titleAccent: 'com três botões e nada mais',
    description:
      'Um ecrã pequeno, três botões e um menu com jogos. O programa inteiro vive dentro do microcontrolador: liga-se e já está, sem telemóvel, sem contas e sem cabos extra. Há três versões do firmware, uma por placa, e as três trazem os mesmos cinco jogos.',
    primaryCta: 'Ver o repositório',
    secondaryCta: 'Ver como funciona',
    scroll: 'Continuar a ler',
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
    eyebrow: 'O projeto',
    title: 'O que é o',
    accent: 'TinyPocket?',
    lead: 'Começou por uma ideia simples: uma consola pequena que funciona sozinha, com um ecrã e três botões. As três placas vieram depois.',
    versionsLabel: 'Três placas, um só projeto',
    sharedLabel: 'O que as três partilham',
    shared: [
      'Um menu, cinco minijogos e um ecrã de ajuda com os pinos.',
      'LEFT e direita movem a seleção, OK entra e manter OK volta atrás.',
      'Os três botões usam o pull-up interno do chip: HIGH solto, LOW premido.',
      'Um antirrebote de 35 ms no ATtiny85 e de 25 ms nas outras duas, que ainda distinguem pressão curta de longa.',
      'Todo o tempo é medido com millis(). No ciclo não há um único delay().',
      'O acaso vem de random(): cartas, comida, trajetórias e inícios de ronda.',
    ],
    paragraphs: [
      'O programa inteiro cabe dentro do microcontrolador. Não há ecrã tátil, nem conta de utilizador, nem ligação à internet. Dois botões para navegar e um para confirmar chegam para gerir os cinco jogos.',
      'A parte divertida é fazer tudo caber. Na versão do ATtiny85 o chip tem 512 bytes de RAM no total, e o buffer de píxeis de um OLED de 128×64 ocupa 1024: o dobro. Por isso essa versão usa um LCD de 16×2 de caracteres e desenha os gráficos com oito caracteres feitos à mão.',
      'É essa a razão de haver três versões em vez de uma. Não é o mesmo código com outros pinos: cada placa permite coisas diferentes, e isso nota-se na forma como se joga. Os mesmos cinco jogos, três maneiras muito diferentes de caber.',
    ],
    closing:
      'Acrescentar um modo novo é sempre o mesmo ritual: mais um estado no enum, as suas funções e uma entrada no menu. É o que tem permitido ao projeto continuar a crescer sem se desfazer.',
  },

  versions: {
    items: [
      {
        id: 'attiny85',
        name: 'TinyPocket · ATtiny85',
        board: 'ATtiny85',
        summary:
          'A mais pequena das três, e a que está mais perto da ideia original de uma consola de bolso. Um chip de 8 KB de flash e 512 bytes de RAM, com um LCD de 16×2 de caracteres em vez de um OLED gráfico, porque o buffer de vídeo não cabia de todo.',
        bullets: [
          'LCD de 16×2 caracteres com módulo I²C e LiquidCrystal_I2C.',
          'SDA em PB0 e SCL em PB2. Botões em PB3, PB4 e PB1.',
          'Os gráficos são oito caracteres desenhados à mão com createChar().',
          'Sem vírgula flutuante nem String, e todos os textos enviados para flash com F().',
          'Ocupa 5.622 bytes de flash (69 %) e 267 de SRAM (52 %).',
        ],
        source: 'ATtiny85/src/tinyPocket.ino',
      },
      {
        id: 'mega2560',
        name: 'TinyPocket · Mega 2560',
        board: 'Arduino Mega 2560',
        summary:
          'A que vai sobrada. Com 256 KB de flash e 8 KB de RAM cabe tudo: um OLED de 128×64 com buffer completo e animações suaves. Se já tens uma Mega à mão, é a forma mais prática de experimentar.',
        bullets: [
          'OLED de 128×64 com a biblioteca U8g2 e o buffer completo de 1.024 bytes.',
          'SDA em D20 e SCL em D21. Botões em D2, D3 e D4.',
          'Alimentação com interruptor e bateria de 9 V no pino VIN.',
          'Ping Pong sem adversário: uma raquete e um contador de pontos.',
          'Breakout com 32 blocos, quatro filas de oito.',
          'Ocupa 42.112 bytes de flash (17 %) e 3.220 de SRAM (39 %).',
        ],
        source: 'Mega 2560/src/tinyPocket.ino',
      },
      {
        id: 'uno',
        name: 'TinyPocket · Arduino Uno',
        board: 'Arduino Uno',
        summary:
          'A mesma ideia do Mega metida numa placa muito mais pequena. O ATmega328P tem 2 KB de RAM, por isso quase todo o programa é o mesmo com ajustes: buffer de uma página, uma única fonte tipográfica e inteiros em vez de vírgula flutuante.',
        bullets: [
          'OLED de 128×64 com U8g2, mas com o buffer de uma página (128 bytes).',
          'SDA em A4 e SCL em A5. Botões em D2, D3 e D4.',
          'Alimentação com interruptor e bateria no pino BAT-5V.',
          'Os títulos são desenhados duas vezes, deslocados um píxel, para parecerem negrito.',
          'Os mesmos jogos do Mega, com 24 segmentos de serpente em vez de 40.',
          'Ocupa 31.218 bytes de flash (97 %) e 1.240 de SRAM (61 %).',
        ],
        source: 'Arduino Uno/src/tinyPocket.ino',
      },
    ],
  },

  features: {
    eyebrow: 'Como funciona',
    title: 'Algumas decisões',
    accent: 'explicam quase tudo',
    lead: 'Meia dúzia de escolhas explica praticamente o que se vê no ecrã.',
    items: [
      {
        scope: 'attiny85',
        tag: 'createChar()',
        title: 'Gráficos feitos de caracteres',
        text: 'Quando não cabe um OLED, o ecrã são 32 células de texto. Oito delas estão desenhadas à mão: a bola, a raquete, a cabeça da serpente, os blocos e um coração.',
      },
      {
        scope: 'unoMega',
        tag: 'U8g2',
        title: 'Um OLED a sério de 128×64',
        text: 'No Mega e no Uno o ecrã é mesmo gráfico. Desenha-se sobre píxeis com linhas, caixas e discos, e as animações avançam de 16 em 16 ou de 20 em 20 milissegundos.',
      },
      {
        scope: 'shared',
        tag: '3 botões',
        title: 'Três botões são toda a interface',
        text: 'Cada botão é ligado entre o seu pino e o GND e lido pela resistência interna do chip. Sem resistências externas e sem gastar um único pino a mais.',
      },
      {
        scope: 'shared',
        tag: '35 / 25 ms',
        title: 'Antirrebote nos três botões',
        text: 'Um botão mecânico não dá um sinal ao ser premido, dá vários. O código compara cada leitura com a anterior e só a conta se se mantiver tempo suficiente.',
      },
      {
        scope: 'shared',
        tag: 'millis()',
        title: 'O ciclo nunca pára',
        text: 'Os jogos medem o tempo com millis() em vez de adormecerem com delay(). Por isso os botões respondem sempre, mesmo com uma animação a decorrer.',
      },
      {
        scope: 'shared',
        tag: 'enum Estado',
        title: 'Um switch e está feito',
        text: 'O menu, cada jogo e até as fases internas do Blackjack são estados de um enum. O loop() vê em qual está e desenha o que toca nesse momento.',
      },
      {
        scope: 'attiny85',
        tag: '512 B de RAM',
        title: 'Caber o projeto em 512 bytes',
        text: 'O firmware do ATtiny85 dispensa vírgula flutuante, String e menus dinâmicos. Os textos vão para flash com F() e há um único buffer de 32 caracteres para toda a aplicação.',
      },
      {
        scope: 'shared',
        tag: 'random()',
        title: 'Que não haja duas partidas iguais',
        text: 'O acaso reparte as cartas, coloca a comida da serpente e decide por onde sai a bola. Também é usado no arranque, para cada ronda começar de forma diferente.',
      },
    ],
  },

  games: {
    eyebrow: 'Modos de jogo',
    title: 'Cinco jogos',
    accent: 'e um ecrã de ajuda',
    lead: 'Os mesmos cinco jogos nas três placas, mas cada uma implementa-os como consegue. Escolhe uma versão para ver como.',
    versionLabel: 'Escolher versão',
    note: 'Os nomes coincidem, a implementação não: conforme a placa mudam o tabuleiro, as regras e por vezes os comandos.',
    controlsLabel: 'Controlos',
    controls: { left: 'LEFT', right: 'RIGHT', ok: 'OK' },
    visual: {
      you: 'TU',
      ai: 'IA',
      dealer: 'CASA',
      player: 'JOGADOR',
      dealerRule: 'Casa >= 17',
      points: 'Pts',
      cells: '32 células',
      segments: '8 segmentos',
      blocks: 'blocos',
      lives: 'vidas',
    },

    attiny85: [
      {
        id: 'pingpong',
        name: 'Ping Pong',
        tagline: 'Tu contra a máquina',
        description:
          'A bola salta de célula em célula pelas duas linhas do LCD, sempre na diagonal. Moves a tua raquete em baixo e a máquina move a sua em cima.',
        goal: 'Ganha quem chegar primeiro a 5 pontos.',
        controls: { left: 'Mover a raquete', right: 'Mover a raquete', ok: 'Manter: menu' },
      },
      {
        id: 'breakout',
        name: 'Breakout',
        tagline: '16 blocos numa fila',
        description:
          'A versão compacta. A linha de cima é a muralha e a de baixo é a raquete; a bola rebate na diagonal e vai abrindo buracos ao chegar ao topo.',
        goal: 'Ganhas ao deixar a muralha vazia. Começas com 3 vidas.',
        controls: { left: 'Mover a raquete', right: 'Mover a raquete', ok: 'Manter: menu' },
      },
      {
        id: 'mascota',
        name: 'Bichinho',
        tagline: 'Duas barras e uma cara',
        description:
          'Fome e felicidade, ambas de 0 a 9. Descem sozinhas com o tempo e tens de as voltar a subir com os botões antes que acabem. Em cima vê-se uma carinha que pestaneja e faz outros gestos.',
        goal: 'Se alguma chegar a 0 apaga-se. Sobreviver 60 segundos é vencer.',
        controls: { left: 'Alimentar', right: 'Brincar', ok: 'Manter: menu' },
      },
      {
        id: 'blackjack',
        name: 'Blackjack',
        tagline: 'Três vitórias ou três derrotas',
        description:
          'Sem baralho físico: cada carta é um número aleatório de 1 a 10. Pedes carta ou plantas-te, e a casa continua a sacar até chegar a 17.',
        goal: 'A partida ganha-se com 3 vitórias e perde-se com 3 derrotas.',
        controls: { left: 'Pedir carta', right: 'Plantar-se', ok: 'Curto: revanche' },
      },
      {
        id: 'snake',
        name: 'Snake',
        tagline: '32 células, duas linhas',
        description:
          'A serpente move-se célula a célula pelas 32 posições do LCD, com a cabeça desenhada como um dos caracteres personalizados.',
        goal: 'Ganha ao chegar a 12 segmentos. Se tocar na moldura ou no próprio corpo, acaba.',
        controls: { left: 'Virar à esquerda', right: 'Virar à direita', ok: 'Curto: pausa' },
      },
    ],

    mega2560: [
      {
        id: 'pingpong',
        name: 'Ping Pong',
        tagline: 'Sem adversário, só o saque',
        description:
          'Moves uma raquete com os botões enquanto a bola vai saltando pelo OLED, com um rasto atrás dela. Cada vez que a devolves, sobe um ponto.',
        goal: 'Não há fim: é a contagem de quantos saques aguentas.',
        controls: { left: 'Mover a raquete', right: 'Mover a raquete', ok: 'Manter: menu' },
      },
      {
        id: 'breakout',
        name: 'Breakout',
        tagline: '32 blocos e 3 vidas',
        description:
          'A mesma ideia do ATtiny85 mas em grande: uma grelha de 8 × 4 blocos e uma bola que vai ficando mais rápida. Ao cair em baixo custa-te uma vida.',
        goal: 'Ganhas ao limpar os 32 blocos.',
        controls: { left: 'Mover a raquete', right: 'Mover a raquete', ok: 'Curto: reiniciar' },
      },
      {
        id: 'mascota',
        name: 'Bichinho',
        tagline: 'Quatro barras e quatro ações',
        description:
          'Fome, higiene, felicidade e energia, todas de 0 a 100 e a descer de 10 em 10 segundos. Comer, banhar, acariciar e dormir são as quatro ações, e os olhos animam-se fotograma a fotograma.',
        goal: 'Não se ganha nem se perde: é um modo aberto para brincar com ele um bocado.',
        controls: { left: 'Ação anterior', right: 'Ação seguinte', ok: 'Fazer a ação' },
      },
      {
        id: 'blackjack',
        name: 'Blackjack',
        tagline: 'Baralho a sério de 52 cartas',
        description:
          'Aqui há mesmo baralho: 52 cartas que são baralhadas e distribuídas, com os naipes desenhados no ecrã e as cartas a entrar a voar pelos lados.',
        goal: ' Igual ao ATtiny85: 3 vitórias ganham e 3 derrotas perdem.',
        controls: { left: 'Pedir carta', right: 'Plantar-se', ok: 'Curto: outra ronda' },
      },
      {
        id: 'snake',
        name: 'Snake',
        tagline: 'Movimento suave',
        description:
          'A serpente move-se com coordenadas em vírgula flutuante dentro de uma moldura no ecrã, com cabeça redonda, rasto e comida que pulsa.',
        goal: 'Não há comprimento objetivo: acaba ao chocar com a moldura ou consigo própria.',
        controls: { left: 'Virar à esquerda', right: 'Virar à direita', ok: 'Curto: pausa' },
      },
    ],

    uno: [
      {
        id: 'pingpong',
        name: 'Ping Pong',
        tagline: 'Sem adversário, só o saque',
        description:
          'Tal como no Mega. Moves uma raquete com os botões e a bola rebate pelo OLED com um rasto atrás. Cada devolução soma um ponto.',
        goal: 'Não há fim: é a contagem de quantos saques aguentas.',
        controls: { left: 'Mover a raquete', right: 'Mover a raquete', ok: 'Manter: menu' },
      },
      {
        id: 'breakout',
        name: 'Breakout',
        tagline: '32 blocos e 3 vidas',
        description:
          'Grelha de 8 × 4 blocos, com a raquete em baixo. O mesmo jogo do Mega, desenhado com uma única fonte de 4×6 para poupar memória.',
        goal: 'Ganhas ao limpar os 32 blocos.',
        controls: { left: 'Mover a raquete', right: 'Mover a raquete', ok: 'Curto: reiniciar' },
      },
      {
        id: 'mascota',
        name: 'Bichinho',
        tagline: 'Quatro barras e quatro ações',
        description:
          'As mesmas quatro estatísticas e as mesmas quatro ações do Mega. Os nomes e as durações das animações vivem numa tabela em flash para não gastarem RAM.',
        goal: 'Não se ganha nem se perde: é um modo aberto para brincar com ele um bocado.',
        controls: { left: 'Ação anterior', right: 'Ação seguinte', ok: 'Fazer a ação' },
      },
      {
        id: 'blackjack',
        name: 'Blackjack',
        tagline: 'Baralho a sério de 52 cartas',
        description:
          'O mesmo jogo do Mega, com o baralho guardado num byte por carta e as coordenadas das cartas animadas em inteiros de 16 bits. Poupa o suficiente para caber.',
        goal: 'Igual ao ATtiny85: 3 vitórias ganham e 3 derrotas perdem.',
        controls: { left: 'Pedir carta', right: 'Plantar-se', ok: 'Curto: outra ronda' },
      },
      {
        id: 'snake',
        name: 'Snake',
        tagline: 'Movimento suave',
        description:
          'A mesma serpente do Mega, com coordenadas inteiras de 16 bits e 24 segmentos em vez de 40. As distâncias comparam-se ao quadrado para não trazer sqrt().',
        goal: 'Não há comprimento objetivo: acaba ao chocar com a moldura ou consigo própria.',
        controls: { left: 'Virar à esquerda', right: 'Virar à direita', ok: 'Curto: pausa' },
      },
    ],
  },

  hardware: {
    eyebrow: 'Componentes',
    title: 'Hardware',
    accent: 'e ligações',
    lead: 'Cada versão tem o seu esquema. Os pinos do ATtiny85 não servem num Mega, nem ao contrário.',
    versionLabel: 'Escolher versão',
    componentsLabel: 'Componentes',
    quantityLabel: 'Quantidade',
    pinColumn: 'Pino',
    functionColumn: 'Função',
    deviceColumn: 'Dispositivo',
    pinLegend: { i2c: 'I²C', button: 'Botão' },
    sharedNote:
      'O interruptor e a bateria só aparecem documentados nos sketches do Mega (9 V no VIN) e do Uno (bateria no BAT-5V). O README coloca a versão do ATtiny85 a 5 V, mas o seu sketch não detalha a alimentação.',

    attiny85: {
      components: [
        { name: 'ATtiny85', qty: '1', note: 'Microcontrolador de 8 bits a 8 MHz, sem bootloader. 8 KB de flash e 512 bytes de RAM.' },
        { name: 'LCD 16×2 com módulo I²C', qty: '1', note: 'Duas linhas de 16 caracteres. Ocupa uns 8 bytes de RAM, contra os 1.024 de um OLED.' },
        { name: 'Botões', qty: '3', note: 'LEFT em PB3, RIGHT em PB4 e OK em PB1. Cada um entre o seu pino e o GND.' },
        { name: 'Fonte de alimentação', qty: '1', note: 'A versão documentada trabalha a 5 V.' },
        { name: 'Fios', qty: 'Conforme necessário', note: 'Para ligar o microcontrolador, o ecrã e os botões.' },
      ],
      screenTitle: 'ATtiny85 → LCD I²C',
      buttonsTitle: 'Pinos dos botões',
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
      pinMapLabel: 'Pinos do ATtiny85',
      pinMap: [
        { pin: 'PB0', role: 'SDA', kind: 'i2c' },
        { pin: 'PB1', role: 'OK', kind: 'button' },
        { pin: 'PB2', role: 'SCL', kind: 'i2c' },
        { pin: 'PB3', role: 'LEFT', kind: 'button' },
        { pin: 'PB4', role: 'RIGHT', kind: 'button' },
        { pin: 'PB5', role: 'RESET', kind: 'idle' },
      ],
      noteTitle: 'Atenção ao endereço I²C',
      note:
        'O sketch usa o endereço 0x27, que é o mais comum, mas alguns módulos vêm com 0x3F. Se o ecrã ficar negro, procura os endereços do barramento e muda o LCD_ADDRESS. Confirma também a tensão do módulo antes de o ligar.',
    },

    mega2560: {
      components: [
        { name: 'Arduino Mega 2560', qty: '1', note: '256 KB de flash e 8 KB de RAM. De sobra para o OLED e todas as animações.' },
        { name: 'OLED 128×64 com I²C', qty: '1', note: 'Monocromático, controlado pelo U8g2. O sketch usa o SH1106 e deixa uma linha alternativa para o SSD1306.' },
        { name: 'Botões', qty: '3', note: 'LEFT em D2, RIGHT em D3 e OK em D4. Cada um entre o seu pino e o GND.' },
        { name: 'Interruptor', qty: '1', note: 'Interruptor geral de alimentação.' },
        { name: 'Bateria de 9 V', qty: '1', note: 'Com conector no pino VIN da placa.' },
        { name: 'Fios', qty: 'Conforme necessário', note: 'Para ligar a placa, o ecrã e os botões.' },
      ],
      screenTitle: 'Mega 2560 → OLED I²C',
      buttonsTitle: 'Pinos dos botões',
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
      pinMapLabel: 'Pinos do Mega 2560',
      pinMap: [
        { pin: 'D20', role: 'SDA', kind: 'i2c' },
        { pin: 'D21', role: 'SCL', kind: 'i2c' },
        { pin: 'D2', role: 'LEFT', kind: 'button' },
        { pin: 'D3', role: 'RIGHT', kind: 'button' },
        { pin: 'D4', role: 'OK', kind: 'button' },
      ],
      noteTitle: 'SH1106 ou SSD1306',
      note:
        'O sketch instancia o controlador U8g2 SH1106 de 128×64 e deixa comentada a linha equivalente para o SSD1306. Confirma qual dos dois é o teu módulo antes de compilar, porque não são intercambiáveis.',
    },

    uno: {
      components: [
        { name: 'Arduino Uno', qty: '1', note: 'ATmega328P: 32 KB de flash e 2 KB de RAM. O programa vai apertado, com 3 % de flash livre.' },
        { name: 'OLED 128×64 com I²C', qty: '1', note: 'Monocromático com U8g2. O sketch usa o buffer de uma página, obrigatório com 2 KB de RAM.' },
        { name: 'Botões', qty: '3', note: 'LEFT em D2, RIGHT em D3 e OK em D4. Cada um entre o seu pino e o GND.' },
        { name: 'Interruptor', qty: '1', note: 'Interruptor geral de alimentação.' },
        { name: 'Bateria', qty: '1', note: 'Com conector no pino BAT-5V da placa.' },
        { name: 'Fios', qty: 'Conforme necessário', note: 'Para ligar a placa, o ecrã e os botões.' },
      ],
      screenTitle: 'Arduino Uno → OLED I²C',
      buttonsTitle: 'Pinos dos botões',
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
      pinMapLabel: 'Pinos do Arduino Uno',
      pinMap: [
        { pin: 'A4', role: 'SDA', kind: 'i2c' },
        { pin: 'A5', role: 'SCL', kind: 'i2c' },
        { pin: 'D2', role: 'LEFT', kind: 'button' },
        { pin: 'D3', role: 'RIGHT', kind: 'button' },
        { pin: 'D4', role: 'OK', kind: 'button' },
      ],
      noteTitle: 'SH1106 ou SSD1306',
      note:
        'O mesmo controlador do Mega, também com a linha do SSD1306 comentada. Lembra-te de que A4 e A5 são os pinos I²C de hardware do ATmega328P e os últimos dois que sobram na porta analógica.',
    },
  },

  technologies: {
    eyebrow: 'Conhecimentos',
    title: 'A tecnologia',
    accent: 'por trás',
    lead: 'O que é preciso saber para ler o código e continuar a ampliá-lo.',
    items: [
      { scope: 'shared', term: 'C/C++', text: 'O firmware está escrito em C/C++ para Arduino, sem camadas por cima: cada linha acaba a falar com o hardware.' },
      { scope: 'shared', term: 'Arduino IDE', text: 'Onde se escreve, compila e carrega o programa. Cada versão compila à parte, com o seu núcleo e a sua placa.' },
      { scope: 'attiny85', term: 'ATtiny85', text: 'Um chip de 8 KB com apenas 512 bytes de RAM. É ele que obriga a pensar o projeto de outra forma: sem vírgula flutuante, sem String e com o texto na flash.' },
      { scope: 'mega2560', term: 'Arduino Mega 2560', text: '256 KB de flash e 8 KB de RAM. A placa que deixa trabalhar com um buffer de vídeo completo sem compromises.' },
      { scope: 'uno', term: 'ATmega328P', text: '32 KB de flash e 2 KB de RAM. O mesmo programa do Mega, com o buffer reduzido a uma página e as coordenadas em inteiros.' },
      { scope: 'shared', term: 'I²C', text: 'Os dois fios que ligam o ecrã: SDA e SCL. O pino muda conforme a placa, o resto é igual.' },
      { scope: 'attiny85', term: 'LiquidCrystal_I2C', text: 'A biblioteca que escreve caracteres no LCD do ATtiny85. O U8g2 simplesmente não cabe nessa memória.' },
      { scope: 'unoMega', term: 'U8g2', text: 'A biblioteca gráfica do Mega e do Uno. Desenha sobre píxeis com linhas, caixas e discos em vez de escrever caracteres.' },
      { scope: 'shared', term: 'INPUT_PULLUP', text: 'Os três botões usam a resistência interna do chip. HIGH quando soltos, LOW quando premidos, por isso não são precisas resistências externas.' },
      { scope: 'shared', term: 'Antirrebote', text: 'Um botão mecânico dá várias leituras ao ser premido. O código compara cada uma com a anterior e só a conta se se mantiver 35 ms no ATtiny85 ou 25 ms nos outros.' },
      { scope: 'shared', term: 'Máquinas de estado', text: 'O menu e cada jogo são estados de um enum. O ciclo principal vai passando por eles com um switch e executa o que estiver ativo.' },
      { scope: 'shared', term: 'millis()', text: 'Todas as animações medem o tempo com millis() em vez de usarem delay(). Assim o ciclo nunca fica à espera e os botões continuam a responder.' },
    ],
  },

  links: {
    eyebrow: 'Onde está',
    title: 'Código',
    accent: 'e simulação',
    lead: 'O projeto é aberto: pode ler, compilar e alterar.',
    externalNotice: 'As duas ligações abrem num separador novo, em sites externos a esta página.',
    github: {
      title: 'Repositório no GitHub',
      text: 'Cada versão vive na sua própria pasta, com o sketch final, a explicação do código e seis exemplos de animação para ver cada efeito isoladamente. Lá estão também o diagrama do circuito e as capturas da simulação.',
      cta: 'Ver o código',
      handle: 'MaiteVazquez8/TinyPocket',
    },
    tinkered: {
      title: 'Simulação no Tinkered',
      text: 'Ligação para a simulação do circuito publicada no Tinkered. Abre diretamente no site do Tinkered, fora desta página.',
      cta: 'Abrir a simulação',
      handle: 'app.tinkered.ai',
    },
  },

  closing: {
    eyebrow: 'Em resumo',
    title: 'Eletrónica, código e três botões',
    text:
      'O encanto deste tipo de projeto não está em fazer algo difícil, mas em fazer algo tão pequeno funcionar. Medir o tempo com millis(), ler três botões sem que façam bounce e escrever um texto que caiba na memória que sobra: com isso cabe uma consola inteira na palma da mão.',
    ctaPrimary: 'Ver o repositório',
    ctaSecondary: 'Abrir a simulação',
  },

  footer: {
    description:
      'Uma console de bolso com menu, cinco jogos, um bichinho e três botões. Uma versão para o ATtiny85, outra para o Arduino Uno e outra para o Arduino Mega 2560.',
    projectColumn: 'Projeto',
    resourcesColumn: 'Recursos',
    repository: 'Repositório',
    simulation: 'Simulação',
    note: 'Projeto de eletrónica e programação embarcada.',
    top: 'Voltar ao topo',
  },
};

export default pt;
