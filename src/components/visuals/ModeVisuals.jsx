export function PingPongVisual({ labels }) {
  return (
    <div className="viz">
      <div className="pp">
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
        <span className="pp__mid" />
        <span className="pp__paddle pp__paddle--player" />
        <span className="pp__paddle pp__paddle--ai" />
        <span className="pp__trail" />
        <span className="pp__ball" />
      </div>
    </div>
  );
}

export function PetVisual() {
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
          <span className="pet__stat">
            <span>9/9</span>
            <span className="pet__bar">
              <span />
            </span>
          </span>
          <span className="pet__stat pet__stat--b">
            <span>7/9</span>
            <span className="pet__bar">
              <span />
            </span>
          </span>
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

const SNAKE_COLUMNS = 16;
const SNAKE_ROWS = 2;
const SNAKE_BODY = [2, 3, 4, 5];
const SNAKE_HEAD = 6;
const SNAKE_FOOD = 21;

export function SnakeVisual({ labels }) {
  const cells = Array.from({ length: SNAKE_COLUMNS * SNAKE_ROWS }, (_, index) => {
    let modifier = '';
    if (SNAKE_BODY.includes(index)) modifier = ' sn__cell--body';
    if (index === SNAKE_HEAD) modifier = ' sn__cell--head';
    if (index === SNAKE_FOOD) modifier = ' sn__cell--food';
    return <span className={`sn__cell${modifier}`} key={index} />;
  });

  return (
    <div className="viz viz--wide">
      <div className="sn">
        <div className="sn__grid">{cells}</div>
        <div className="sn__meta">
          <span>16 &times; 2</span>
          <span>{labels.cells}</span>
        </div>
      </div>
    </div>
  );
}
