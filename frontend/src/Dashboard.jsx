import { useState } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import QRSection from "./components/QRSection";
import LiveCounter from "./components/LiveCounter";
import StudentPermissionForm from "./components/StudentPermissionForm";
import FacultyPermissionView from "./components/FacultyPermissionView";

import "./styles/dashboard.css";
function Dashboard() {
  // 🔥 Temporary Role (Change later after login)
  const role = "faculty";

  // 🔥 Permission Requests
  const [requests, setRequests] = useState([]);

  // 🔥 Call Logs
  const [callLogs] = useState([
    {
      id: 1,
      name: "Sita Devi",
      status: "Completed",
      time: "10:35 AM",
    },
    {
      id: 2,
      name: "Arjun",
      status: "Missed",
      time: "11:10 AM",
    },
  ]);
  const [lateRequests, setLateRequests] = useState([
  {
    name: "Ravi",
    section: "C",
    roll: "21A91A05B1",
    reason: "Bus delay",
    status: "Pending"
  },
  {
    name: "Sita",
    section: "C",
    roll: "21A91A05B2",
    reason: "Health issue",
    status: "Pending"
  }
]);

  // ➕ Add Permission Request
  const addRequest = (data) => {
    setRequests((prev) => [data, ...prev]);
  };

  // ✏️ Update Permission Status
  const updateStatus = (id, status) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status } : req
      )
    );
  };

  return (
    <div className="dashboard">

      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <Header />

      {/* QR Section */}
      <QRSection />

      {/* Live Counter */}
      <LiveCounter />

      {/* Permission System */}
      {role === "student" && (
        <StudentPermissionForm addRequest={addRequest} />
      )}

      {role === "faculty" && (
        <FacultyPermissionView
          requests={requests}
          updateStatus={updateStatus}
        />
      )}

      {/* Call Tracker */}
      <div className="cards">
        <h2>📞 Call Tracker</h2>

        {callLogs.map((log, i) => (
            <div key={i}>
            {log.name} - {log.status} - {log.time}
            </div>
        ))}
      </div>
      <div className="card">
        <h2>⏰ Late Arrival Requests</h2>

          {lateRequests.map((req, i) => (
            <div className="student-row" key={i}>

            <div className="student-info">
                <h3>{req.name}</h3>
                <p>{req.section} | {req.roll}</p>
            </div>

            <div className="contact-info">
                <p>Reason: {req.reason}</p>
                <p>Status: {req.status}</p>
            </div>

            <div>
                <button
                onClick={() => {
                    alert(req.name + " APPROVED");
                }}
                >
                Approve
                </button>

                <button
                onClick={() => {
                    alert(req.name + " REJECTED");
                }}
                >
                Reject
                </button>
            </div>

            </div>
        ))}

      </div>
    </div>
  );
}

export default Dashboard;