export default function HomeScreen({ handleEnterPress }) {
  return <section className="screen-content home-screen">
    <div className="pixel-mark">✦</div><p className="screen-kicker">WELCOME, PLAYER</p>
    <h1>BOARD GAME<br /><span>ARCADE</span></h1>
    <p className="screen-subtitle">Find the right game<br />for your group</p>
    <button className="arcade-button primary" onClick={handleEnterPress}>PRESS ENTER <span>↵</span></button>
    <p className="screen-hint">A NEW ADVENTURE AWAITS</p>
  </section>;
}
