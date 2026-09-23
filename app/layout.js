import './globals.css';

export const metadata = {
  title: 'Board Game Arcade',
  description: 'Find the right board game for your group.'
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
