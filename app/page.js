'use client';

import { useState } from 'react';
import ArcadeMachine from '../components/ArcadeMachine';

export default function Home() {
  const [screen, setScreen] = useState('home');
  const [players, setPlayers] = useState(4);
  const [selectedGame, setSelectedGame] = useState(null);

  const handleEnterPress = () => {
    // Reserved for a future control-panel animation before changing screens.
    setScreen('setup');
  };

  return (
    <main className="page-shell">
      <div className="ambient ambient-left" /><div className="ambient ambient-right" />
      <header className="site-header"><span className="eyebrow">PLAYER 01 // INSERT CO-OP</span><span className="status"><i /> ONLINE</span></header>
      <ArcadeMachine screen={screen} players={players} setScreen={setScreen} setPlayers={setPlayers} selectedGame={selectedGame} setSelectedGame={setSelectedGame} handleEnterPress={handleEnterPress} />
      <p className="footer-note">BOARD GAME ARCADE <span>•</span> PRESS ENTER TO PLAY</p>
    </main>
  );
}
