import React, { useState } from "react";

const players = [
  { name: "Player 1", credit: 10 },
  { name: "Player 2", credit: 9 },
  { name: "Player 3", credit: 8 },
  { name: "Player 4", credit: 7 },
  { name: "Player 5", credit: 6 },
];

function CreateTeam() {
  const [selected, setSelected] = useState([]);
  const [credit, setCredit] = useState(100);

  const selectPlayer = (player) => {
    if (selected.find(p => p.name === player.name)) return;
    if (credit - player.credit >= 0) {
      setSelected([...selected, player]);
      setCredit(credit - player.credit);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Create Your Team</h2>
      <p>Remaining Credit: {credit}</p>
      <div>
        {players.map((p, i) => (
          <button key={i} onClick={() => selectPlayer(p)}>{p.name} ({p.credit})</button>
        ))}
      </div>
      <h3>Selected Players</h3>
      <ul>
        {selected.map((p, i) => <li key={i}>{p.name}</li>)}
      </ul>
    </div>
  );
}

export default CreateTeam;
