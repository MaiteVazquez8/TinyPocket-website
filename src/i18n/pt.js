const pt = {
  meta: {
    htmlLang: 'pt',
    documentTitle: 'TinyPocket — Console de bolso baseada num ATtiny85',
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

  hero: {
    eyebrow: 'Código aberto · Sistemas embarcados',
    titleLead: 'Uma console de bolso',
    titleAccent: 'construída sobre um único ATtiny85',
    description:
      'Um LCD 16×2 via I²C, três botões e quatro modos de jogo. O menu, os minijogos, o bichinho virtual e as máquinas de estado vivem no firmware de um microcontrolador de 8 bits.',
    primaryCta: 'Ver o repositório',
    secondaryCta: 'Explorar o projeto',
    scroll: 'Deslizar',
    chips: ['ATtiny85', 'LCD 16×2 · I²C', '3 botões', 'C/C++', 'Arduino IDE'],
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
    lead: 'Um projeto de eletrónica e programação embarcada em que interagir com o aparelho não exige mais do que três botões e um ecrã de 16×2.',
    facts: [
      { label: 'Microcontrolador', value: 'ATtiny85' },
      { label: 'Ecrã', value: 'LCD 16×2 · I²C' },
      { label: 'Controlos', value: 'LEFT · RIGHT · OK' },
      { label: 'Modos de jogo', value: '4' },
    ],
    paragraphs: [
      'O TinyPocket é uma console de bolso construída em torno de um ATtiny85, um LCD 16×2 com módulo I²C e três botões. Todo o comportamento do aparelho está no firmware: não há servidor, nem interface gráfica, nem lógica a correr fora do microcontrolador.',
      'O objetivo é reunir, num aparelho pequeno, aquilo que faz um projeto embarcado a sério: ler entradas digitais, falar com um periférico num barramento de dois fios, medir o tempo, gerar números aleatórios e reagir a tudo isso para criar minijogos e um bichinho virtual.',
      'Ao ligar o aparelho são inicializados os botões, a comunicação I²C e o ecrã, e aparece o menu principal. LEFT e RIGHT percorrem as opções e OK entra no modo escolhido. Quando uma ronda termina, volta-se ao menu e pode escolher-se outro modo.',
    ],
    closing:
      'O código foi pensado para crescer: acrescentar um modo significa criar o estado, as variáveis e as funções dele, e registá-lo no menu e no switch do ciclo principal.',
  },

  features: {
    eyebrow: 'O que resolve',
    title: 'As características',
    accent: 'que importam',
    lead: 'Peças simples por fora, decisões de engenharia por dentro. É isto que faz o TinyPocket funcionar.',
    items: [
      {
        tag: 'ATtiny85',
        title: 'Hardware compacto',
        text: 'Um microcontrolador AVR de 8 bits, um ecrã e três botões. É todo o equipamento, e o firmware tem de caber nele.',
      },
      {
        tag: 'LiquidCrystal_I2C',
        title: 'LCD 16×2 via I²C',
        text: 'Duas linhas de 16 caracteres controladas com Wire e LiquidCrystal_I2C, em vez de ligar cada pino do LCD separadamente.',
      },
      {
        tag: 'INPUT_PULLUP',
        title: 'Três botões, uma interface',
        text: 'LEFT, RIGHT e OK controlam toda a interface. Cada botão é ligado entre o seu pino e o GND e lido através da resistência interna do microcontrolador.',
      },
      {
        tag: 'DEBOUNCE_MS 35',
        title: 'Antirrebote dos botões',
        text: 'Um botão mecânico gera várias leituras ao ser premido. Cada um guarda o seu estado estável e o instante da mudança: a pressão só conta se mantiver durante o intervalo de antirrebote.',
      },
      {
        tag: 'enum Estado',
        title: 'Máquinas de estado',
        text: 'Uma enumeração decide que parte do programa corre em cada volta do ciclo. O menu é um estado, cada modo é outro, e o Blackjack acrescenta ainda as suas fases internas.',
      },
      {
        tag: 'handleMascota()',
        title: 'Bichinho virtual',
        text: 'Fome e felicidade começam no máximo e descem com o tempo. É preciso alimentá-lo e brincar com ele para que nunca cheguem a zero.',
      },
      {
        tag: 'millis()',
        title: 'Tempo sem delay()',
        text: 'Os jogos avançam comparando milissegundos, nunca bloqueando com delay(). Assim o ciclo continua a ler os botões enquanto a ronda decorre.',
      },
      {
        tag: 'random()',
        title: 'Aleatoriedade e lógica de jogo',
        text: 'Números aleatórios para as cartas, para a comida da Snake e para a trajetória da bola, combinados com constantes de configuração que ajustam a dificuldade.',
      },
    ],
  },

  games: {
    eyebrow: 'Modos de jogo',
    title: 'Os quatro modos',
    accent: 'num chip de 8 bits',
    lead: 'O mesmo microcontrolador, o mesmo ecrã de 16 caracteres e três botões. Quatro formas diferentes de os usar.',
    controlsLabel: 'Controlos',
    controls: { left: 'LEFT', right: 'RIGHT', ok: 'OK' },
    visual: {
      you: 'TU',
      ai: 'IA',
      dealer: 'CASA',
      player: 'JOGADOR',
      dealerRule: 'Casa >= 17',
      cells: '32 casas',
    },
    items: [
      {
        id: 'pingpong',
        name: 'Ping Pong',
        tagline: 'A raquete contra a máquina',
        description:
          'O jogador mexe numa raquete para devolver a bola enquanto a máquina faz o mesmo do lado oposto. A bola muda de direção quando bate numa parede ou numa das duas raquetes.',
        goal: 'Ganha quem chegar primeiro a 5 pontos.',
        controls: { left: 'Subir a raquete', right: 'Descer a raquete', ok: 'Voltar ao menu' },
      },
      {
        id: 'mascota',
        name: 'Bichinho',
        tagline: 'Mantê-lo vivo',
        description:
          'Um bichinho virtual com duas estatísticas: fome e felicidade. Ambas começam no máximo e descem com o passar do tempo, por isso é preciso estar atento ao painel no ecrã.',
        goal: 'Se alguma chegar a 0, a ronda termina. Sobreviver 60 segundos é a condição de vitória.',
        controls: { left: 'Alimentar', right: 'Brincar', ok: 'Voltar ao menu' },
      },
      {
        id: 'blackjack',
        name: 'Blackjack',
        tagline: 'Três vitórias ou três derrotas',
        description:
          'Uma versão simplificada do jogo de cartas, sem baralho físico: cada carta é gerada a partir de um número aleatório. O jogador pede cartas ou planta-se, e a casa continua a sacar até chegar a 17.',
        goal: 'Três vitórias ganham a partida; três derrotas perdem-na.',
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
  },

  hardware: {
    eyebrow: 'Componentes',
    title: 'Hardware',
    accent: 'e ligações',
    lead: 'Uma lista de peças curta de propósito, e um esquema de ligações igualmente simples.',
    componentsLabel: 'Componentes',
    quantityLabel: 'Quantidade',
    components: [
      { name: 'ATtiny85', qty: '1', note: 'Microcontrolador AVR de 8 bits. Corre todo o firmware.' },
      { name: 'LCD 16×2 com módulo I²C', qty: '1', note: 'Ecrã de duas linhas de 16 caracteres. Única saída visual.' },
      { name: 'Botões', qty: '3', note: 'LEFT, RIGHT e OK, ligados entre o seu pino e o GND.' },
      { name: 'Interruptor', qty: '1', note: 'Interruptor geral de alimentação.' },
      { name: 'Fonte de alimentação ou bateria', qty: '1', note: 'Tem de ser compatível com a tensão dos componentes.' },
      { name: 'Fios', qty: 'Conforme necessário', note: 'Para ligar o microcontrolador, o ecrã e os botões.' },
    ],
    pinMapLabel: 'Pinos do ATtiny85 utilizados',
    pinLegend: { i2c: 'I²C', button: 'Botão', idle: 'Sem uso' },
    pinMap: [
      { pin: 'PB0', role: 'SDA', kind: 'i2c' },
      { pin: 'PB1', role: 'OK', kind: 'button' },
      { pin: 'PB2', role: 'SCL', kind: 'i2c' },
      { pin: 'PB3', role: 'LEFT', kind: 'button' },
      { pin: 'PB4', role: 'RIGHT', kind: 'button' },
      { pin: 'PB5', role: 'RESET', kind: 'idle' },
    ],
    lcdTitle: 'ATtiny85 → LCD I²C',
    buttonsTitle: 'Pinos dos botões',
    pinColumn: 'Pino',
    functionColumn: 'Função',
    deviceColumn: 'Dispositivo',
    noteTitle: 'Antes de ligar',
    note:
      'O endereço I²C depende do módulo: 0x27 é um dos mais comuns, mas outros usam 0x3F. Se o ecrã não responder, verifica o endereço do módulo e altera-o no código. Verifica também a tensão de funcionamento do ecrã e do módulo I²C: muitos módulos LCD 16×2 estão desenhados para trabalhar a 5 V.',
  },

  technologies: {
    eyebrow: 'Conhecimentos',
    title: 'Tecnologias',
    accent: 'e conceitos',
    lead: 'O que é preciso saber para entender, manter e ampliar o projeto.',
    items: [
      { term: 'C/C++', text: 'O firmware está escrito em C/C++ para Arduino, sem camadas de abstração: cada linha acaba a falar com o hardware.' },
      { term: 'Arduino IDE', text: 'O ambiente onde se escrevem os sketches, se instalam as bibliotecas e se carrega o programa no microcontrolador.' },
      { term: 'ATtiny85', text: 'Configuração de portas e pinos, resistências pull-up internas e trabalho dentro de um orçamento de memória muito pequeno.' },
      { term: 'Comunicação I²C', text: 'O Wire trata do barramento de dois fios, SDA e SCL. O ecrã é o único escravo.' },
      { term: 'Entradas digitais', text: 'Os três botões são lidos com leituras digitais e INPUT_PULLUP: HIGH quando estão soltos, LOW quando premidos.' },
      { term: 'Antirrebote', text: 'O estado de cada botão é comparado com a leitura anterior e só é aceite como pressão após um intervalo estável.' },
      { term: 'Máquinas de estado', text: 'Enumerações para os modos da aplicação e para as fases de cada jogo; o ciclo principal decide com um switch.' },
      { term: 'millis()', text: 'O tempo é medido com milissegundos acumulados e comparações, nunca com esperas fixas.' },
      { term: 'Números aleatórios', text: 'Distribuição de cartas, comida da Snake, trajetórias da bola e posições de partida da máquina.' },
      { term: 'Gestão de recursos', text: 'Posições do ecrã, comprimento da serpente, cartas visíveis e pontuações têm um máximo declarado para nada transbordar.' },
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
      text: 'O firmware completo, o diagrama do circuito, as imagens da simulação e a documentação do código, com a explicação de cada secção do programa.',
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
    text: 'O TinyPocket lembra que um projeto embarcado não precisa de uma interface complicada para ser divertido: basta medir bem o tempo e ler alguns botões sem que façam bounce. O resto é desenhar estados.',
    ctaPrimary: 'Ver o repositório',
    ctaSecondary: 'Explorar simulação',
  },

  footer: {
    description:
      'O TinyPocket é uma console de bolso baseada num ATtiny85, um LCD 16×2 com comunicação I²C e três botões.',
    projectColumn: 'Projeto',
    resourcesColumn: 'Recursos',
    repository: 'Repositório',
    simulation: 'Simulação',
    note: 'Projeto de eletrónica e programação embarcada.',
    top: 'Voltar ao topo',
  },
};

export default pt;
