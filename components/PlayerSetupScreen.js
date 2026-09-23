export default function PlayerSetupScreen({ players, setPlayers, onBack, onFind }) {
  return <section className="screen-content setup-screen">
    <button className="back-button" onClick={onBack}>← BACK</button>
    <p className="screen-kicker">GAME SETUP // 01</p><h2>HOW MANY<br /><span>PLAYERS?</span></h2>
    <div className="player-picker"><button aria-label="Remove player" onClick={() => setPlayers(Math.max(1, players - 1))}>−</button><strong>{String(players).padStart(2, '0')}</strong><button aria-label="Add player" onClick={() => setPlayers(Math.min(12, players + 1))}>+</button></div>
    <p className="range-label">1 — 12 PLAYERS</p><button className="arcade-button primary" onClick={onFind}>FIND GAMES <span>→</span></button>
  </section>;
}
