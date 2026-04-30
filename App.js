import React, { useState } from 'react';

export default function App() {
  const [page, setPage] = useState('home');

  if (page === 'home') {
    return (
      <div className="home-screen">
        <div className="overlay">
          <h1>Naomi Country Rose 🌹</h1>
          <p className="subtitle">
            Hey you… ready to play something beautiful?
          </p>

          <button className="primary-btn" onClick={() => setPage('song')}>
            Start Playing 🎸
          </button>

          <button className="note-btn">
            A little note for you… ❤️
          </button>

          <p className="footer">Built just for you</p>
        </div>
      </div>
    );
  }

  return (
    <div className="song-screen">
      <div className="nav-bar">
        <button onClick={() => setPage('home')}>← Back</button>
      </div>

      <div className="content">
        <h2>Tonight’s Song</h2>
        <p className="song-sub">Feels like a “Cover Me Up” kind of night</p>

        <pre className="chords">
{`G           D
Sun goes down on the dusty road

Em          C
Got my guitar and a lightened load

G           D
Singing sweet for the ones I love

C           D
Underneath the stars above`}
        </pre>
      </div>
    </div>
  );
}
