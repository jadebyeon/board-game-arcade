import ArcadeScreen from './ArcadeScreen';

export default function ArcadeMachine({ screen, players, setScreen, setPlayers, selectedGame, setSelectedGame, handleEnterPress }) {
  return <div className="arcade-machine">
    <img src="/pixel-art-arcade-cabinet.png" alt="Pixel art arcade cabinet" className="cabinet-image" />
    <div className="screen-overlay"><ArcadeScreen screen={screen} players={players} setScreen={setScreen} setPlayers={setPlayers} selectedGame={selectedGame} setSelectedGame={setSelectedGame} handleEnterPress={handleEnterPress} /></div>
  </div>;
}
