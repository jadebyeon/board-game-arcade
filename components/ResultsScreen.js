import { filterGamesByPlayerCount } from '../utils/gameFilters';

const games = [
  { id: 'cascadia', name: 'CASCADIA', minPlayers: 1, maxPlayers: 4, playtime: '30–45 MIN', complexity: 'EASY', description: 'Build a harmonious wildlife habitat.' },
  { id: 'wingspan', name: 'WINGSPAN', minPlayers: 1, maxPlayers: 5, playtime: '40–70 MIN', complexity: 'MEDIUM', description: 'Attract the best birds to your preserve.' },
  { id: 'heat', name: 'HEAT', minPlayers: 1, maxPlayers: 6, playtime: '45–60 MIN', complexity: 'MEDIUM', description: 'Race your rivals around the track.' },
  { id: 'party-line', name: 'PARTY LINE', minplayers: '3 players', maxplayers: '10 players', playtime: '25–40 MIN', complexity: 'EASY', description: 'A fast social game for a full table.' },
  { id: 'galaxy-traders', name: 'GALAXY TRADERS', minPlayers: 4, maxPlayers: 12, playtime: '60–90 MIN', complexity: 'MEDIUM', description: 'Trade, negotiate, and build an interstellar empire.' },
  { id: 'city-builders', name: 'CITY BUILDERS', playerRange: '2–10 players', playtime: '45–75 MIN', complexity: 'MEDIUM', description: 'Grow the most vibrant city at the table.' }
];

export default function ResultsScreen({ players, onBack, onSelectGame }) {
  const matches = filterGamesByPlayerCount(games, players);
  return <section className="screen-content results-screen"><button className="back-button" onClick={onBack}>← BACK</button><div className="results-top"><span className="screen-kicker">MATCHES FOUND</span></div><h2>FOR <span>{players} PLAYERS</span></h2>{matches.length === 0 ? <div className="empty-results"><p>NO MATCHES FOUND FOR {players} PLAYERS</p><button className="card-button" onClick={onBack}>CHANGE PLAYERS <span>→</span></button></div> : <div className="game-list">{matches.map(game => <article className="game-card" key={game.id}><div className="card-title"><h3>{game.name}</h3><span className="card-star">✦</span></div><div className="game-meta"><span>{game.minPlayers}–{game.maxPlayers} PLAYERS</span><span>{game.playtime}</span><span>{game.complexity}</span></div><p>{game.description}</p><button className="card-button" onClick={() => onSelectGame(game)}>VIEW GAME <span>→</span></button></article>)}</div>}</section>;
}
