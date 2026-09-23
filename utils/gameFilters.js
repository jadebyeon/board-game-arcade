function toPlayerNumber(value, useMaximum = false) {
  const numericValue = Number(value);
  if (Number.isFinite(numericValue)) return numericValue;
  const numbers = String(value ?? '').match(/\d+/g)?.map(Number) || [];
  if (numbers.length === 0) return NaN;
  return useMaximum ? numbers[numbers.length - 1] : numbers[0];
}

export function normalizeGame(game) {
  const minValue = game.minPlayers ?? game.minplayers ?? game.playerRange ?? game.players;
  const maxValue = game.maxPlayers ?? game.maxplayers ?? game.playerRange ?? game.players;
  const ratingValue = Number(game.rating ?? game.average);
  return { ...game, id: String(game.id ?? game.objectid ?? game.name ?? game.primary).trim().toLowerCase().replace(/[^a-z0-9]+/g, '-'), name: game.name ?? game.title ?? game.primary, minPlayers: toPlayerNumber(minValue), maxPlayers: toPlayerNumber(maxValue, true), playTime: game.playTime ?? game.playtime ?? null, complexity: game.complexity ?? game.averageweight ?? null, description: game.description ?? null, rating: Number.isFinite(ratingValue) ? ratingValue : null, category: game.category ?? game.boardgamecategory ?? game.primary_category ?? null };
}

export function filterGamesByPlayerCount(gameList, selectedPlayers) {
  const playerCount = Number(selectedPlayers);
  return gameList.map(normalizeGame).filter((game) => Number.isFinite(game.minPlayers) && Number.isFinite(game.maxPlayers) && game.maxPlayers >= game.minPlayers).filter((game) => game.minPlayers <= playerCount && game.maxPlayers >= playerCount).sort((a, b) => (b.rating ?? -Infinity) - (a.rating ?? -Infinity)).slice(0, 10);
}
