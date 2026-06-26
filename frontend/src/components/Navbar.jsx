import { FaUserCircle } from "react-icons/fa";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>MYNRI</h2>
        <span>Faculty Dashboard</span>
      </div>

      <div className="profile">
        <FaUserCircle className="profile-icon" />
        <div>
          <h4>Faculty</h4>
          <p>Attendance Monitoring System</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;