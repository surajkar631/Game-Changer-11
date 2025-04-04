import React from "react";

const data = [
  { name: "User1", points: 450 },
  { name: "User2", points: 400 },
  { name: "User3", points: 380 },
];

function Leaderboard() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Leaderboard</h2>
      <ol>
        {data.map((user, index) => (
          <li key={index}>{user.name} - {user.points} pts</li>
        ))}
      </ol>
    </div>
  );
}

export default Leaderboard;
