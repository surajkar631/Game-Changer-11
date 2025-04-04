import React, { useEffect, useState } from "react";
import axios from "axios";

function LiveScores() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Replace with your free API
      try {
        const response = await axios.get("https://api.cricapi.com/v1/currentMatches?apikey=YOUR_API_KEY&offset=0");
        setScores(response.data.data || []);
      } catch (error) {
        console.error("Failed to fetch live scores", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Live Scores</h2>
      <ul>
        {scores.map((match, i) => (
          <li key={i}>{match.name} - {match.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default LiveScores;
