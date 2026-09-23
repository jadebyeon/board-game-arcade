import sampleGames from '../data/sampleGames';
import { filterGamesByPlayerCount } from '../utils/gameFilters';

export default function ResultsScreen({ players, onBack, onSelectGame }) {
  const matches = filterGamesByPlayerCount(sampleGames, players);

  return <section className="screen-content results-screen">
    <button className="back-button" onClick={onBack}>← BACK</button>
    <div className="results-top"><span className="screen-kicker">MATCHES FOUND</span></div>
    <h2>FOR <span>{players} PLAYERS</span></h2>
    {matches.length === 0 ? <div className="empty-results"><p>NO MATCHES FOUND FOR {players} PLAYERS</p><button className="card-button" onClick={onBack}>CHANGE PLAYERS <span>→</span></button></div> : <div className="game-list">{matches.map((game) => <article className="game-card" key={game.id}>
      <div className="card-title"><h3>{game.name}</h3><span className="card-star">✦</span></div>
      <div className="game-meta"><span>{game.minPlayers}–{game.maxPlayers} PLAYERS · {game.playTime} · {game.complexity}</span></div>
      <p>{game.description}</p>
      <button className="card-button" onClick={() => onSelectGame(game)}>VIEW GAME <span>→</span></button>
    </article>)}</div>}
  </section>;
}
