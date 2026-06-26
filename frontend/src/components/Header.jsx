import "../styles/dashboard.css";

function Header() {
  return (
    <div className="header">
      <h1>MYNRI Faculty Dashboard</h1>
      <p>Welcome Faculty 👋 | Attendance Monitoring System</p>

      <div className="session-info">
        <div>📅 Today's Timetable</div>

        <div className="time-box">
          🕘 Start: 09:30 AM
        </div>

        <div className="time-box">
          🕙 End: 10:20 AM
        </div>

        <div className="time-box">
          🏫 Subject: Data Structures
        </div>

        <div className="time-box">
          🏫 Section: 17
        </div>
      </div>
    </div>
  );
}

export default Header;