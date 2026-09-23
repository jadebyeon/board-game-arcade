export function parseBoardgamesCsv(csvText) {
  const rows = [], headers = [];
  let row = [], cell = '', quoted = false;
  for (let index = 0; index < csvText.length; index += 1) {
    const character = csvText[index], next = csvText[index + 1];
    if (character === '"' && quoted && next === '"') { cell += '"'; index += 1; continue; }
    if (character === '"') { quoted = !quoted; continue; }
    if (character === ',' && !quoted) { row.push(cell); cell = ''; continue; }
    if ((character === '\n' || character === '\r') && !quoted) { if (character === '\r' && next === '\n') index += 1; row.push(cell); rows.push(row); row = []; cell = ''; continue; }
    cell += character;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  (rows.shift() || []).forEach((header) => headers.push(header.trim().toLowerCase()));
  return rows.filter((values) => values.some(Boolean)).map((values) => headers.reduce((record, header, index) => ({ ...record, [header]: values[index]?.trim() ?? '' }), {}));
}
