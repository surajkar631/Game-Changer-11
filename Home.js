import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Game Changer +11</h1>
      <p>Welcome to your fantasy cricket platform!</p>
      <nav>
        <ul>
          <li><Link to="/create-team">Create Team</Link></li>
          <li><Link to="/leaderboard">Leaderboard</Link></li>
          <li><Link to="/live-scores">Live Scores</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
