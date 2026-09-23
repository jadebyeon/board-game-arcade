function toPlayerNumber(value, useMaximum = false) {
  if (typeof value === 'number') return value;
  const numbers = String(value ?? '').match(/\d+/g)?.map(Number) || [];
  if (numbers.length === 0) return NaN;
  return useMaximum ? numbers[numbers.length - 1] : numbers[0];
}

export function normalizeGame(game) {
  const minValue = game.minPlayers ?? game.minplayers ?? game.playerRange ?? game.players;
  const maxValue = game.maxPlayers ?? game.maxplayers ?? game.playerRange ?? game.players;
  return {
    ...game,
    id: game.id ?? game.name.toLowerCase().replace(/\s+/g, '-'),
    name: game.name ?? game.title,
    minPlayers: toPlayerNumber(minValue),
    maxPlayers: toPlayerNumber(maxValue, true)
  };
}

export function filterGamesByPlayerCount(gameList, selectedPlayers) {
  const playerCount = Number(selectedPlayers);
  return gameList.map(normalizeGame).filter((game) => game.minPlayers <= playerCount && game.maxPlayers >= playerCount);
}
