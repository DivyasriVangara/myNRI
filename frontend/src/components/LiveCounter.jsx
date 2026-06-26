import { useState } from "react";
import "../styles/cards.css";

function LiveCounter() {
  const [present, setPresent] = useState(0);
  const [absent, setAbsent] = useState(0);
  const [responses, setResponses] = useState(0);

  // simulate live scan (Firebase later replaces this)
  const handleScan = () => {
    setPresent((prev) => prev + 1);
    setResponses((prev) => prev + 1);
  };

  // simulate absent (auto calc later)
  const calculateAbsent = () => {
    const total = responses + 1;
    setAbsent(total - present);
  };

  return (
    <div className="card live-card">

      <h2>📊 Live Response Counter</h2>

      <div className="stats-grid">

        <div className="stat-box green">
          🟢 Present
          <h3>{present}</h3>
        </div>

        <div className="stat-box red">
          🔴 Absent
          <h3>{absent}</h3>
        </div>

        <div className="stat-box blue">
          📩 Total Responses
          <h3>{responses}</h3>
        </div>

      </div>

      {/* SIMULATION BUTTON (REMOVE LATER) */}
      <button className="btn" onClick={handleScan}>
        + Simulate Student Scan
      </button>

    </div>
  );
}

export default LiveCounter;