const OLED_VERSIONS = ['mega2560', 'uno'];
const isOled = (version) => OLED_VERSIONS.includes(version);

export function PingPongVisual({ labels, version }) {
  const isCharLcd = !isOled(version);

  return (
    <div className="viz">
      <div className={`pp${isCharLcd ? ' pp--lcd' : ''}`}>
        {isCharLcd ? (
          <span className="pp__score">
            <span>
              {labels.you}
              <b>3</b>
            </span>
            <span>
              {labels.ai}
              <b>2</b>
            </span>
          </span>
        ) : (
          <span className="pp__score">
            <span>
              {labels.points}
              <b>7</b>
            </span>
          </span>
        )}
        {!isCharLcd && <span className="pp__mid" />}
        {isCharLcd && <span className="pp__paddle pp__paddle--player" />}
        {isCharLcd && <span className="pp__paddle pp__paddle--ai" />}
        <span className="pp__trail" />
        <span className="pp__ball" />
        {!isCharLcd && <span className="pp__paddle pp__paddle--solo" />}
      </div>
    </div>
  );
}

const PET_BARS = {
  attiny85: ['9/9', '7/9'],
  mega2560: ['62', '80', '75', '80'],
  uno: ['62', '80', '75', '80'],
};

export function PetVisual({ version }) {
  const bars = PET_BARS[version] ?? PET_BARS.attiny85;

  return (
    <div className="viz">
      <div className="pet">
        <div className="pet__face">
          <div className="pet__eyes">
            <span className="pet__eye">
              <span className="pet__pupil" />
            </span>
            <span className="pet__eye">
              <span className="pet__pupil" />
            </span>
          </div>
          <span className="pet__mouth" />
        </div>
        <div className="pet__stats">
          {bars.map((value, index) => (
            <span className={`pet__stat${index % 2 ? ' pet__stat--b' : ''}`} key={value + index}>
              <span>{value}</span>
              <span className="pet__bar">
                <span />
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BlackjackVisual({ labels }) {
  return (
    <div className="viz">
      <div className="bj">
        <div className="bj__hand">
          <span className="bj__label">{labels.dealer}</span>
          <div className="bj__cards">
            <span className="bj-card">
              <span className="bj-card__rank">K</span>
              <span className="bj-card__suit">&#9829;</span>
            </span>
            <span className="bj-card bj-card--back">
              <span aria-hidden="true">*</span>
            </span>
          </div>
        </div>
        <div className="bj__hand">
          <span className="bj__label">{labels.player}</span>
          <div className="bj__cards">
            <span className="bj-card">
              <span className="bj-card__rank">9</span>
              <span className="bj-card__suit">&#9824;</span>
            </span>
            <span className="bj-card bj-card--red">
              <span className="bj-card__rank">6</span>
              <span className="bj-card__suit">&#9825;</span>
            </span>
          </div>
        </div>
        <div className="bj__total">
          <span>{labels.dealerRule}</span>
          <b>15</b>
        </div>
      </div>
    </div>
  );
}

export function BreakoutVisual({ labels, version }) {
  const isCharLcd = !isOled(version);
  const columns = isCharLcd ? 16 : 8;
  const rows = isCharLcd ? 2 : 5;
  const blocks = isCharLcd ? 16 : 32;
  const paddle = isCharLcd ? [20, 21, 22] : [34, 35, 36];
  const ball = isCharLcd ? 25 : 33;

  const cellState = (index) => {
    if (index === ball) return ' sn__cell--head';
    if (paddle.includes(index)) return ' sn__cell--body';
    if (index < blocks) return ' sn__cell--block';
    return '';
  };

  const cells = Array.from({ length: columns * rows }, (_, index) => (
    <span className={`sn__cell${cellState(index)}`} key={index} />
  ));

  return (
    <div className="viz viz--wide">
      <div className="sn">
        <div
          className="sn__grid"
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {cells}
        </div>
        <div className="sn__meta">
          <span>{`${blocks} ${labels.blocks}`}</span>
          <span>{`3 ${labels.lives}`}</span>
        </div>
      </div>
    </div>
  );
}

export function SnakeVisual({ labels, version }) {
  const isCharLcd = !isOled(version);
  const columns = isCharLcd ? 16 : 12;
  const rows = isCharLcd ? 2 : 3;
  const body = isCharLcd ? [2, 3, 4, 5] : [3, 9, 15, 21];
  const head = isCharLcd ? 6 : 27;
  const food = isCharLcd ? 21 : 32;

  const cells = Array.from({ length: columns * rows }, (_, index) => {
    let modifier = '';
    if (body.includes(index)) modifier = ' sn__cell--body';
    if (index === head) modifier = ' sn__cell--head';
    if (index === food) modifier = ' sn__cell--food';
    return <span className={`sn__cell${modifier}`} key={index} />;
  });

  return (
    <div className="viz viz--wide">
      <div className="sn">
        <div className="sn__grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
          {cells}
        </div>
        <div className="sn__meta">
          <span>{isCharLcd ? '16 × 2' : '128 × 64'}</span>
          <span>{isCharLcd ? labels.cells : labels.segments}</span>
        </div>
      </div>
    </div>
  );
}
