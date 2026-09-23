import { NextResponse } from 'next/server';

export async function GET(request) {
  const gameName = new URL(request.url).searchParams.get('game');
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!gameName) return NextResponse.json({ error: 'A game name is required.' }, { status: 400 });
  if (!apiKey) return NextResponse.json({ error: 'YouTube API is not configured.' }, { status: 500 });

  const params = new URLSearchParams({ key: apiKey, part: 'snippet', q: `${gameName} board game tutorial`, type: 'video', order: 'relevance', maxResults: '5', videoEmbeddable: 'true', videoSyndicated: 'true' });
  try {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?${params}`, { cache: 'no-store' });
    if (!response.ok) return NextResponse.json({ error: 'YouTube search failed.' }, { status: response.status });
    const data = await response.json();
    const item = data.items?.find((result) => result.id?.videoId);
    return NextResponse.json({ video: item ? { id: item.id.videoId, title: item.snippet.title, channel: item.snippet.channelTitle } : null });
  } catch {
    return NextResponse.json({ error: 'Unable to reach YouTube right now.' }, { status: 502 });
  }
}
