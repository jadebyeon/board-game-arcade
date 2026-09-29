# Board Game Arcade

## Audience

A person choosing a board game for a group without deep BoardGameGeek knowledge.

## Purpose

The app narrows board game options based on the number of players and provides a tutorial video for the selected game.

## Primary Flow

Home screen → choose number of players → view matching recommendations → open a game detail screen → watch a YouTube tutorial.

## Technical Stack

- React
- Next.js
- JavaScript
- CSS
- GitHub
- Vercel

## API Integration

The app uses YouTube Data API v3 to search for `[game name] board game tutorial` and return a relevant tutorial video for the selected game. This supports the core experience by helping a group quickly understand how a recommended game is played.

## Data and Recommendation Logic

The current prototype uses a small curated normalized dataset for fast client-side recommendations. A game is shown only when:

```text
minPlayers <= selectedPlayers && maxPlayers >= selectedPlayers
```

The larger BoardGameGeek CSV files are retained for future data work but are not loaded during the current recommendation flow.

## Local Setup

```bash
npm install
```

Create `.env.local` and add:

```env
YOUTUBE_API_KEY=your_key_here
```

Then run:

```bash
npm run dev
npm run build
```

`.env.local` must never be committed.

## Viewing Context

The experience prioritizes a tablet/desktop arcade presentation while remaining responsive on mobile.

## Known Limitations

- The live recommendation flow uses a curated sample dataset instead of the full dataset.
- YouTube search depends on API availability and quota.
- The arcade control-panel animation is not yet implemented.

## Next Improvements

- Connect a normalized richer dataset.
- Add the control-panel animation.
- Improve recommendation ranking and filtering.

## AI Assistance

AI tools supported scaffolding, component implementation, debugging, responsive refinement, API integration, and dataset normalization. The product direction, visual concept, scope, and final decisions were made by the student.
