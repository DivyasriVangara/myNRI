import { useState, useEffect } from "react";
import "../styles/qr.css";

function QRSection() {
  const [headCount, setHeadCount] = useState("");
  const [qrActive, setQrActive] = useState(false);
  const [timer, setTimer] = useState(120);
  const [scanCount, setScanCount] = useState(0);

  // generate QR session
  const generateQR = () => {
    if (!headCount) {
      alert("Enter Head Count");
      return;
    }

    setQrActive(true);
    setTimer(120);
    setScanCount(0);
  };

  // countdown timer
  useEffect(() => {
    if (!qrActive) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          setQrActive(false);
          return 120;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [qrActive]);

  // simulate scan (Firebase will replace this later)
  const simulateScan = () => {
    setScanCount((prev) => prev + 1);
  };

  return (
    <div className="qr-layout">

      {/* HEAD COUNT + BUTTON */}
      <div className="top-section">

        <div className="card">
          <h3>👥 Head Count</h3>
          <input
            type="number"
            placeholder="Enter students"
            value={headCount}
            onChange={(e) => setHeadCount(e.target.value)}
          />
        </div>

        <div className="card center">
          <button className="btn" onClick={generateQR}>
            📲 Generate QR
          </button>
        </div>

      </div>

      {/* QR SECTION */}
      {qrActive && (
        <div className="card qr-center">

          <h3>📱 QR SESSION ACTIVE</h3>

          <div className="qr-box">
            🔳 QR CODE HERE
          </div>

          <p>⏱ Session Time: {timer}s</p>

          {/* LIVE SCAN COUNT */}
          <div className="scan-live">
            🟢 Successfully Scanned: {scanCount}
          </div>

          <button className="btn green" onClick={simulateScan}>
            + Simulate Scan (Firebase later replaces this)
          </button>

        </div>
      )}

    </div>
  );
}

export default QRSection;