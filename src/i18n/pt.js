const pt = {
  meta: {
    htmlLang: 'pt',
    documentTitle: 'TinyPocket — Console de bolso em duas versões',
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
    features: 'Características',
    games: 'Modos',
    hardware: 'Hardware',
    technologies: 'Tecnologia',
    links: 'Código',
    github: 'GitHub',
  },

  scope: {
    shared: 'Partilhado',
    attiny85: 'ATtiny85',
    mega2560: 'Mega 2560',
  },

  hero: {
    eyebrow: 'Código aberto · Sistemas embarcados',
    titleLead: 'Uma console de bolso',
    titleAccent: 'em duas versões',
    description:
      'O TinyPocket é um projeto de eletrónica e programação embarcada com duas implementações documentadas: uma sobre um ATtiny85 com ecrã LCD 16×2 via I²C e outra sobre um Arduino Mega 2560 com ecrã OLED 128×64. Nas duas, três botões, um menu, minijogos e um bichinho virtual.',
    primaryCta: 'Ver o repositório',
    secondaryCta: 'Explorar o projeto',
    scroll: 'Deslizar',
    chips: ['ATtiny85 · LCD 16×2', 'Mega 2560 · OLED 128×64', '3 botões', 'C/C++'],
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
    eyebrow: 'O projeto',
    title: 'O que é o',
    accent: 'TinyPocket?',
    lead: 'Um projeto de eletrónica e programação embarcada com duas implementações sobre hardware diferente. Não são dois modos do mesmo aparelho: são dois projetos que partilham a ideia e a linguagem, não o hardware nem o código.',
    versionsLabel: 'As duas implementações',
    sharedLabel: 'Base comum às duas',
    shared: [
      'Firmware em C/C++ para Arduino, carregado com o Arduino IDE.',
      'Três botões —LEFT, RIGHT e OK— com INPUT_PULLUP e antirrebote.',
      'Um menu que decide que módulo corre através de um switch de estados.',
      'Temporização com millis() para que o ciclo nunca bloqueie.',
      'Aleatoriedade com random() para cartas, comida, trajetórias e inícios.',
    ],
    paragraphs: [
      'O TinyPocket nasceu como uma console de bolso construída em torno de um ATtiny85, um ecrã LCD 16×2 com módulo I²C e três botões. Todo o comportamento do aparelho está no firmware: não há servidor, nem interface gráfica, nem lógica a correr fora do microcontrolador.',
      'Mais tarde o projeto cresceu para uma segunda implementação sobre um Arduino Mega 2560, com um ecrã OLED de 128×64 píxeis e animações calculadas fotograma a fotograma. O menu mantém a mesma forma, mas cada jogo muda por completo.',
      'Por isso convém ler cada modo junto com a versão que o implementa: os nomes coincidem, as regras nem sempre.',
    ],
    closing:
      'Em ambas as versões o código foi pensado para crescer: acrescentar um modo significa criar o estado, as variáveis e as funções dele, e registá-lo no menu e no switch do ciclo principal.',
  },

  versions: {
    items: [
      {
        id: 'attiny85',
        name: 'TinyPocket · ATtiny85',
        board: 'ATtiny85',
        summary:
          'A implementação original: um microcontrolador AVR de 8 bits que gere toda a consola, com um ecrã de 16×2 caracteres. O firmware é texto sobre um menu de quatro modos e está descrito secção a secção na documentação do repositório.',
        bullets: [
          'O firmware completo vive num único sketch de C/C++.',
          'Ecrã LCD de 16×2 caracteres com módulo I²C.',
          'Três botões em PB3, PB4 e PB1, lidos com INPUT_PULLUP.',
          'Quatro modos no menu: Ping Pong, Bichinho, Blackjack e Snake.',
          'Barramento I²C com Wire e ecrã controlado por LiquidCrystal_I2C.',
          'Antirrebote de 35 ms e cada pressão é consumida uma única vez.',
        ],
        source: 'README.md · src/explicacion_codigo.md',
      },
      {
        id: 'mega2560',
        name: 'TinyPocket · Mega 2560',
        board: 'Arduino Mega 2560',
        summary:
          'A segunda implementação: a mesma estrutura de menu e estados sobre uma placa muito maior, com um ecrã OLED gráfico de 128×64 píxeis. Reutiliza os exemplos animados do repositório e acrescenta animações por fotogramas.',
        bullets: [
          'Arduino Mega 2560 como placa, com a mesma máquina de estados.',
          'Ecrã OLED monocromático de 128×64 píxeis desenhado com U8g2.',
          'Os mesmos três botões, mais pressão curta e pressão longa.',
          'Cinco entradas de menu, incluindo um ecrã de Informação.',
          'O Ping Pong tem um submenu com duas variantes: Normal e Breakout.',
          'Animações de olhos, cartas e serpente calculadas com millis().',
        ],
        source: 'src/examples/tinyPocket.ino',
      },
    ],
  },

  features: {
    eyebrow: 'O que resolve',
    title: 'As características',
    accent: 'que importam',
    lead: 'Peças simples por fora, decisões de engenharia por dentro. Cada característica indica a que implementação pertence.',
    items: [
      {
        scope: 'attiny85',
        tag: 'struct Button',
        title: 'Hardware de 8 bits',
        text: 'Um microcontrolador AVR de 8 bits, um ecrã e três botões. É todo o equipamento, e o firmware tem de caber nele.',
      },
      {
        scope: 'attiny85',
        tag: 'LiquidCrystal_I2C',
        title: 'LCD 16×2 via I²C',
        text: 'Duas linhas de 16 caracteres controladas com Wire e LiquidCrystal_I2C, em vez de ligar cada pino do LCD separadamente.',
      },
      {
        scope: 'mega2560',
        tag: 'U8g2',
        title: 'Ecrã OLED 128×64',
        text: 'A segunda implementação troca caracteres por píxeis: um ecrã monocromático de 128×64 via I²C, desenhado com a biblioteca U8g2.',
      },
      {
        scope: 'shared',
        tag: 'INPUT_PULLUP',
        title: 'Três botões, uma interface',
        text: 'LEFT, RIGHT e OK controlam toda a consola nas duas versões. Cada botão é ligado entre o seu pino e o GND e lido através da resistência interna.',
      },
      {
        scope: 'shared',
        tag: 'millis()',
        title: 'Antirrebote e eventos de pressão',
        text: 'Cada botão compara a leitura com a anterior e só aceita a pressão depois de um intervalo estável: 35 ms no ATtiny85 e 25 ms no Mega 2560, que ainda distingue pressão curta de longa.',
      },
      {
        scope: 'shared',
        tag: 'enum Estado',
        title: 'Máquinas de estado',
        text: 'Uma enumeração decide que parte do programa corre em cada volta do ciclo. O menu é um estado, cada modo é outro, e o Blackjack acrescenta ainda as suas fases internas.',
      },
      {
        scope: 'shared',
        tag: 'handleMascota()',
        title: 'Bichinho virtual',
        text: 'O bichinho existe nas duas versões, mas não é o mesmo: duas estatísticas para alimentar no ATtiny85, quatro barras e quatro ações no Mega 2560.',
      },
      {
        scope: 'mega2560',
        tag: 'JUEGO_BREAKOUT',
        title: 'Um submenu acrescenta Breakout',
        text: 'No Mega 2560, o Ping Pong abre um submenu com as variantes Normal e Breakout, cada uma com a sua grelha de blocos, vidas e fim de partida.',
      },
    ],
  },

  games: {
    eyebrow: 'Modos de jogo',
    title: 'Modos de jogo',
    accent: 'nas duas versões',
    lead: 'Os modos partilham o nome, não a implementação. Escolhe uma versão para ver exatamente o que cada jogo faz nela.',
    versionLabel: 'Escolher versão',
    controlsLabel: 'Controlos',
    controls: { left: 'LEFT', right: 'RIGHT', ok: 'OK' },
    note: 'As regras, os controlos e os objetivos mudam completamente entre versões: não são o mesmo jogo com um aspeto diferente.',
    visual: {
      you: 'TU',
      ai: 'IA',
      dealer: 'CASA',
      player: 'JOGADOR',
      dealerRule: 'Casa >= 17',
      points: 'Pts',
      cells: '32 casas',
      segments: '8 segmentos',
      blocks: 'blocos',
      lives: 'vidas',
    },
    attiny85: [
      {
        id: 'pingpong',
        name: 'Ping Pong',
        tagline: 'A raquete contra a máquina',
        description:
          'O jogador mexe numa raquete para devolver a bola enquanto a máquina responde do lado oposto. A bola muda de direção quando bate numa parede ou numa das duas raquetes.',
        goal: 'Ganha quem chegar primeiro a 5 pontos.',
        controls: { left: 'Subir a raquete', right: 'Descer a raquete', ok: 'Voltar ao menu' },
      },
      {
        id: 'mascota',
        name: 'Bichinho',
        tagline: 'Duas estatísticas, um limite',
        description:
          'Um bichinho virtual com fome e felicidade. Ambas começam no máximo e descem com o passar do tempo, por isso é preciso estar atento ao ecrã.',
        goal: 'Se alguma chegar a 0, a ronda termina. Sobreviver 60 segundos é a condição de vitória.',
        controls: { left: 'Alimentar', right: 'Brincar', ok: 'Voltar ao menu' },
      },
      {
        id: 'blackjack',
        name: 'Blackjack',
        tagline: 'Três vitórias ou três derrotas',
        description:
          'Versão simplificada sem baralho físico: cada carta é gerada a partir de um número aleatório entre 1 e 10. O jogador pede cartas ou planta-se, e a casa continua a sacar até chegar a 17.',
        goal: 'A partida ganha-se com 3 vitórias e perde-se com 3 derrotas.',
        controls: { left: 'Pedir carta (Hit)', right: 'Plantar-se (Stand)', ok: 'Continuar ou menu' },
      },
      {
        id: 'snake',
        name: 'Snake',
        tagline: '32 casas, duas linhas',
        description:
          'Snake adaptada às dimensões de um LCD 16×2: um tabuleiro de 16 colunas por 2 linhas, ou seja, 32 posições. A comida aparece sempre numa casa livre.',
        goal: 'Ganha ao atingir um comprimento de 12. Cada vez que cresce, os movimentos aceleram.',
        controls: { left: 'Virar à esquerda', right: 'Virar à direita', ok: 'Voltar ao menu' },
      },
    ],
    mega2560: [
      {
        id: 'pingpong',
        name: 'Ping Pong',
        tagline: 'Um saque e a conta sobe',
        description:
          'Aqui o jogador mexe numa raquete com LEFT e RIGHT para devolver a bola. Ela rebate nas paredes e na raquete, com um rasto que a acompanha em cada movimento.',
        goal: 'Não há rival nem fim: cada devolução soma um ponto ao contador do ecrã.',
        controls: { left: 'Mover a raquete para a esquerda', right: 'Mover a raquete para a direita', ok: 'Manter: menu' },
      },
      {
        id: 'breakout',
        name: 'Breakout',
        tagline: '32 blocos e 3 vidas',
        description:
          'A segunda variante do submenu do Ping Pong. Uma raquete devolve a bola contra uma grelha de blocos; cada bloco partido acelera um pouco a bola.',
        goal: 'Ganha ao partir os 32 blocos. Cada bola que cai custa uma das 3 vidas.',
        controls: { left: 'Mover a raquete para a esquerda', right: 'Mover a raquete para a direita', ok: 'Manter: menu' },
      },
      {
        id: 'mascota',
        name: 'Bichinho',
        tagline: 'Quatro barras, quatro ações',
        description:
          'O bichinho desta versão segue fome, higiene, felicidade e energia, que mudam a cada 10 segundos. Os olhos animam-se fotograma a fotograma: pestanejo, piscadela, surpresa ou sono.',
        goal: 'Não há derrota nem vitória: é um modo aberto. Comer, banhar, acariciar e dormir são as quatro ações.',
        controls: { left: 'Ação anterior', right: 'Ação seguinte', ok: 'Aplicar ação ou acordar' },
      },
      {
        id: 'blackjack',
        name: 'Blackjack',
        tagline: 'Baralho real de 52 cartas',
        description:
          'Ao contrário da versão do ATtiny85, aqui há um baralho real de 52 cartas que é baralhado e distribuído. Os naipes são desenhados no ecrã e as cartas entram a voar pelos lados.',
        goal: 'Rondas de uma mão: a casa planta-se em 17 ou mais e comparam-se as pontuações. OK curto abre outra ronda.',
        controls: { left: 'Pedir carta', right: 'Plantar-se', ok: 'Curto: outra ronda · Manter: menu' },
      },
      {
        id: 'snake',
        name: 'Snake',
        tagline: 'Movimento suave dentro de uma moldura',
        description:
          'A serpente move-se com coordenadas em vírgula flutuante dentro de uma moldura no ecrã de 128×64, com cabeça redonda, rasto e comida que pulsa. Começa com 8 segmentos.',
        goal: 'Termina ao chocar com a moldura ou consigo própria. Não há comprimento objetivo: OK curto pausa a ronda.',
        controls: { left: 'Virar à esquerda', right: 'Virar à direita', ok: 'Curto: pausa · Manter: menu' },
      },
    ],
  },

  hardware: {
    eyebrow: 'Componentes',
    title: 'Hardware',
    accent: 'e ligações',
    lead: 'Cada versão tem o seu próprio esquema. Os pinos do ATtiny85 e os do Mega 2560 não são misturados aqui.',
    versionLabel: 'Escolher versão',
    componentsLabel: 'Componentes',
    quantityLabel: 'Quantidade',
    pinColumn: 'Pino',
    functionColumn: 'Função',
    deviceColumn: 'Dispositivo',
    pinLegend: { i2c: 'I²C', button: 'Botão' },
    sharedNote:
      'O interruptor geral e a fonte de alimentação estão documentados para a versão do ATtiny85. O sketch do Mega 2560 não os menciona: verifica o diagrama do circuito antes de os ligar.',
    attiny85: {
      components: [
        { name: 'ATtiny85', qty: '1', note: 'Microcontrolador AVR de 8 bits. Corre todo o firmware.' },
        { name: 'LCD 16×2 com módulo I²C', qty: '1', note: 'Ecrã de duas linhas de 16 caracteres. Única saída visual.' },
        { name: 'Botões', qty: '3', note: 'LEFT, RIGHT e OK, ligados entre o seu pino e o GND.' },
        { name: 'Interruptor', qty: '1', note: 'Interruptor geral de alimentação.' },
        { name: 'Fonte de alimentação ou bateria', qty: '1', note: 'Tem de ser compatível com a tensão dos componentes.' },
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
      pinMapLabel: 'Pinos do ATtiny85 utilizados',
      pinMap: [
        { pin: 'PB0', role: 'SDA', kind: 'i2c' },
        { pin: 'PB1', role: 'OK', kind: 'button' },
        { pin: 'PB2', role: 'SCL', kind: 'i2c' },
        { pin: 'PB3', role: 'LEFT', kind: 'button' },
        { pin: 'PB4', role: 'RIGHT', kind: 'button' },
        { pin: 'PB5', role: 'RESET', kind: 'idle' },
      ],
      noteTitle: 'Antes de ligar',
      note:
        'O endereço I²C depende do módulo: 0x27 é um dos mais comuns, mas outros usam 0x3F. Se o ecrã não responder, verifica o endereço do módulo e altera-o no código. Verifica também a tensão de funcionamento do ecrã e do módulo I²C: muitos módulos LCD 16×2 estão desenhados para trabalhar a 5 V.',
    },
    mega2560: {
      components: [
        { name: 'Arduino Mega 2560', qty: '1', note: 'Placa onde corre o firmware completo, com gráficos e animações por fotogramas.' },
        { name: 'OLED 128×64 com I²C', qty: '1', note: 'Ecrã monocromático de 128×64 píxeis. O sketch desenha com U8g2.' },
        { name: 'Botões', qty: '3', note: 'LEFT em D2, RIGHT em D3 e OK em D4, cada um entre o seu pino e o GND.' },
        { name: 'Fonte de alimentação', qty: '1', note: 'O sketch indica VDD 3.3V para o ecrã.' },
        { name: 'Fios', qty: 'Conforme necessário', note: 'Para ligar a placa, o ecrã e os botões.' },
      ],
      screenTitle: 'Mega 2560 → OLED I²C',
      buttonsTitle: 'Pinos dos botões',
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
      pinMapLabel: 'Pinos do Mega 2560 utilizados',
      pinMap: [
        { pin: 'D20', role: 'SDA', kind: 'i2c' },
        { pin: 'D21', role: 'SCL', kind: 'i2c' },
        { pin: 'D2', role: 'LEFT', kind: 'button' },
        { pin: 'D3', role: 'RIGHT', kind: 'button' },
        { pin: 'D4', role: 'OK', kind: 'button' },
      ],
      noteTitle: 'Antes de ligar',
      note:
        'O sketch seleciona o controlador U8g2 SH1106 de 128×64 e inclui uma linha comentada para SSD1306, por isso tens de confirmar qual dos dois o teu módulo usa. As ligações acima são as que estão documentadas no próprio cabeçalho do sketch.',
    },
  },

  technologies: {
    eyebrow: 'Conhecimentos',
    title: 'Tecnologias',
    accent: 'e conceitos',
    lead: 'O que é preciso saber para entender, manter e ampliar o projeto, com a versão a que cada item pertence.',
    items: [
      { scope: 'shared', term: 'C/C++', text: 'O firmware de ambas as versões está escrito em C/C++ para Arduino, sem camadas de abstração: cada linha acaba a falar com o hardware.' },
      { scope: 'shared', term: 'Arduino IDE', text: 'O ambiente onde se escrevem os sketches, se instalam as bibliotecas e se carrega o programa na placa.' },
      { scope: 'attiny85', term: 'ATtiny85', text: 'Configuração de portas e pinos, resistências pull-up internas e trabalho dentro de um orçamento de memória muito pequeno.' },
      { scope: 'mega2560', term: 'Arduino Mega 2560', text: 'Uma placa de 8 bits com mais memória e pinos, necessária para desenhar gráficos e animar fotograma a fotograma.' },
      { scope: 'shared', term: 'Comunicação I²C', text: 'O barramento de dois fios, SDA e SCL, liga o ecrã nas duas versões. Só muda qual é o pino de cada sinal.' },
      { scope: 'attiny85', term: 'Wire · LiquidCrystal_I2C', text: 'As bibliotecas da versão do ATtiny85: o Wire trata do barramento e o LiquidCrystal_I2C escreve os caracteres no LCD.' },
      { scope: 'mega2560', term: 'U8g2', text: 'A biblioteca da versão Mega 2560. Não usa caracteres: trabalha sobre um buffer de píxeis com primitivas como linhas, caixas e discos.' },
      { scope: 'shared', term: 'INPUT_PULLUP', text: 'Os três botões são lidos com leituras digitais e INPUT_PULLUP: HIGH quando estão soltos, LOW quando premidos.' },
      { scope: 'shared', term: 'Antirrebote', text: 'O estado de cada botão é comparado com a leitura anterior e só é aceite após um intervalo estável: 35 ms no ATtiny85, 25 ms no Mega 2560.' },
      { scope: 'shared', term: 'Máquinas de estado', text: 'Enumerações para os modos da aplicação e para as fases de cada jogo; o ciclo principal decide com um switch.' },
      { scope: 'shared', term: 'millis()', text: 'O tempo é medido com milissegundos acumulados e comparações, nunca com esperas fixas. No Mega 2560 controla também os fotogramas de animação.' },
      { scope: 'shared', term: 'Números aleatórios', text: 'Distribuição de cartas, comida da Snake, trajetórias da bola e posições de partida da máquina nas duas versões.' },
    ],
  },

  links: {
    eyebrow: 'Onde encontrar',
    title: 'Código',
    accent: 'e simulação',
    lead: 'O projeto é aberto: pode ler, executar e modificar.',
    externalNotice: 'As duas ligações abrem num separador novo, em sites externos a esta página.',
    github: {
      title: 'Repositório no GitHub',
      text: 'Contém as duas implementações: o firmware do ATtiny85 documentado no README e com a sua explicação linha a linha, e o sketch do Mega 2560 juntamente com os exemplos animados em que se apoia. Estão também o diagrama do circuito e as imagens da simulação.',
      cta: 'Ver código no GitHub',
      handle: 'MaiteVazquez8/TinyPocket',
    },
    tinkered: {
      title: 'Simulação no Tinkered',
      text: 'Ligação para a simulação do circuito publicada no Tinkered. Abre diretamente no site do Tinkered, fora desta página.',
      cta: 'Explorar simulação',
      handle: 'app.tinkered.ai',
    },
  },

  closing: {
    eyebrow: 'Em resumo',
    title: 'Eletrónica, código e três botões',
    text: 'O TinyPocket lembra que um projeto embarcado não precisa de uma interface complicada para ser divertido: basta medir bem o tempo e ler alguns botões sem que façam bounce. O resto é desenhar estados, e fazê-lo duas vezes com dois hardwares diferentes.',
    ctaPrimary: 'Ver o repositório',
    ctaSecondary: 'Explorar simulação',
  },

  footer: {
    description:
      'O TinyPocket é uma console de bolso com duas implementações documentadas: uma sobre ATtiny85 com ecrã LCD 16×2 e outra sobre Arduino Mega 2560 com ecrã OLED 128×64. Nas duas, três botões.',
    projectColumn: 'Projeto',
    resourcesColumn: 'Recursos',
    repository: 'Repositório',
    simulation: 'Simulação',
    note: 'Projeto de eletrónica e programação embarcada.',
    top: 'Voltar ao topo',
  },
};

export default pt;
