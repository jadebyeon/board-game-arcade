import { useEffect, useState } from 'react';

const cacheKey = (gameId) => `board-game-arcade-youtube-${gameId}`;

export default function GameDetailScreen({ game, onBack }) {
  const [tutorial, setTutorial] = useState({ status: 'loading', video: null, message: '' });

  useEffect(() => {
    let active = true;
    const stored = window.sessionStorage.getItem(cacheKey(game.id));
    if (stored) {
      setTutorial(JSON.parse(stored));
      return () => { active = false; };
    }

    fetch(`/api/youtube?game=${encodeURIComponent(game.name)}`)
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'YouTube search failed.');
        return data.video ? { status: 'found', video: data.video, message: '' } : { status: 'empty', video: null, message: 'No tutorial video found yet.' };
      })
      .then((result) => {
        if (!active) return;
        window.sessionStorage.setItem(cacheKey(game.id), JSON.stringify(result));
        setTutorial(result);
      })
      .catch((error) => {
        const result = { status: 'error', video: null, message: error.message || 'We could not load a tutorial right now.' };
        if (!active) return;
        window.sessionStorage.setItem(cacheKey(game.id), JSON.stringify(result));
        setTutorial(result);
      });

    return () => { active = false; };
  }, [game.id, game.name]);

  if (!game) return null;

  return <section className="screen-content detail-screen">
    <button className="back-button" onClick={onBack}>← BACK</button>
    <p className="screen-kicker">GAME DETAILS</p>
    <h2>{game.name}</h2>
    <div className="detail-meta"><span>{game.minPlayers}–{game.maxPlayers} PLAYERS</span><span>{game.playTime || 'PLAYTIME N/A'}</span><span>{game.complexity || 'COMPLEXITY N/A'}</span></div>
    <p className="detail-description">{game.description || 'No description available.'}</p>
    <div className="tutorial-box"><p className="tutorial-label">TUTORIAL VIDEO</p>
      {tutorial.status === 'loading' && <p>Searching for a tutorial…</p>}
      {tutorial.status === 'found' && <><div className="video-frame"><iframe src={`https://www.youtube.com/embed/${tutorial.video.id}`} title={`${game.name} tutorial`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div><p className="video-credit">{tutorial.video.title}</p></>}
      {tutorial.status === 'empty' && <p>{tutorial.message}</p>}
      {tutorial.status === 'error' && <p>{tutorial.message}</p>}
    </div>
  </section>;
}
