import HomeScreen from './HomeScreen';
import PlayerSetupScreen from './PlayerSetupScreen';
import ResultsScreen from './ResultsScreen';
import GameDetailScreen from './GameDetailScreen';

export default function ArcadeScreen({ screen, players, setScreen, setPlayers, selectedGame, setSelectedGame, handleEnterPress }) {
  if (screen === 'detail') return <GameDetailScreen game={selectedGame} onBack={() => setScreen('results')} />;
  if (screen === 'setup') return <PlayerSetupScreen players={players} setPlayers={setPlayers} onBack={() => setScreen('home')} onFind={() => setScreen('results')} />;
  if (screen === 'results') return <ResultsScreen players={players} onBack={() => setScreen('setup')} onSelectGame={(game) => { setSelectedGame(game); setScreen('detail'); }} />;
  return <HomeScreen handleEnterPress={handleEnterPress} />;
}
