import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateTeam from "./pages/CreateTeam";
import Leaderboard from "./pages/Leaderboard";
import LiveScores from "./pages/LiveScores";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-team" element={<CreateTeam />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/live-scores" element={<LiveScores />} />
      </Routes>
    </Router>
  );
}

export default App;
