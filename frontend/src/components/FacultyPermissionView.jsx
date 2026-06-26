import { useState } from "react";

function FacultyPermissionView() {

  const [view, setView] = useState("overview");
  const [showPopup, setShowPopup] = useState(false);
  const [calledStudent, setCalledStudent] = useState(null);

  // 🔥 SAMPLE DATA (6 STUDENTS)
  const [students] = useState([
    {
      id: 1,
      name: "Ravi Kumar",
      roll: "101",
      section: "C",
      status: "Present",
      reason: "",
      permission: false,
      studentPhone: "9876543210",
      parentPhone: "9123456780"
    },
    {
      id: 2,
      name: "Sita Devi",
      roll: "102",
      section: "C",
      status: "Absent",
      reason: "Sick",
      permission: true,
      studentPhone: "9876543211",
      parentPhone: "9123456781"
    },
    {
      id: 3,
      name: "Kiran Rao",
      roll: "103",
      section: "C",
      status: "Absent",
      reason: "Family Function",
      permission: false,
      studentPhone: "9876543212",
      parentPhone: "9123456782"
    },
    {
      id: 4,
      name: "Anjali",
      roll: "104",
      section: "C",
      status: "Present",
      reason: "",
      permission: false,
      studentPhone: "9876543213",
      parentPhone: "9123456783"
    },
    {
      id: 5,
      name: "Arjun",
      roll: "105",
      section: "C",
      status: "Absent",
      reason: "Out of Station",
      permission: true,
      studentPhone: "9876543214",
      parentPhone: "9123456784"
    },
    {
      id: 6,
      name: "Meena",
      roll: "106",
      section: "C",
      status: "Absent",
      reason: "Medical Checkup",
      permission: false,
      studentPhone: "9876543215",
      parentPhone: "9123456785"
    }
  ]);

  // 🔥 FILTERS
  const present = students.filter(s => s.status === "Present");
  const absent = students.filter(s => s.status === "Absent");

  const withPermission = students.filter(
    s => s.status === "Absent" && s.permission
  );

  const withoutPermission = students.filter(
    s => s.status === "Absent" && !s.permission
  );

  return (
    <div className="faculty-container">

      {/* 🔥 NAVIGATION */}
      <div className="card-grid">

        <div className="nav-card" onClick={() => setView("overview")}>
          📊 Overview
        </div>

        <div className="nav-card" onClick={() => setView("present")}>
          🟢 Present
        </div>

        <div className="nav-card" onClick={() => setView("absent")}>
          🔴 Absent
        </div>

        <div className="nav-card" onClick={() => setView("withPermission")}>
          🟡 With Permission
        </div>

        <div className="nav-card" onClick={() => setView("withoutPermission")}>
          ⚫ Without Permission
        </div>

      </div>

      {/* 🔥 CONTENT */}
      <div className="content-box">

        {/* 📊 OVERVIEW */}
        {view === "overview" && (
          <div className="overview-box"> 
            <h2>📊 Overview</h2>
            <p className="overview-item">
              <span>👨‍🎓 Total Students :</span>
              <span>{students.length}</span>
            </p>
            <p className="overview-item">
              <span>🟢 Present :</span>
              <span>{present.length}</span>
            </p>
            <p className="overview-item">
              <span>🔴 Absent :</span>
              <span>{absent.length}</span>
            </p>
            <p className="overview-item">
              <span>🟡 With Permission :</span>
              <span>{withPermission.length}</span>
            </p>
            <p className="overview-item">
              <span>⚫ Without Permission :</span>
              <span>{withoutPermission.length}</span>
            </p>
          </div>
        )}

        {/* 🟢 PRESENT */}
        {view === "present" && (
          <div>
            <h2>🟢 Present Students</h2>
            {present.map(s => (
              <p key={s.id}>{s.name} ({s.roll}) - Section {s.section}</p>
            ))}
          </div>
        )}

        {/* 🔴 ABSENT */}
        {view === "absent" && (
          <div>
            <h2>🔴 Absent Students</h2>
            {absent.map(s => (
              <p key={s.id}>{s.name} ({s.roll}) - Section {s.section}</p>
            ))}
          </div>
        )}

        {/* 🟡 WITH PERMISSION */}
        {view === "withPermission" && (
          <div>
            <h2>🟡 Absent With Permission</h2>

            {withPermission.map(s => (
              <div className="student-row" key={s.id}>
                <div>
                  <h3>{s.name}</h3>
                  <p>{s.roll} - Section {s.section}</p>
                  <p>Reason: {s.reason}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ⚫ WITHOUT PERMISSION */}
        {view === "withoutPermission" && (
          <div>
            <h2>⚫ Absent Without Permission</h2>

            {withoutPermission.map(s => (
              <div className="student-row" key={s.id}>
                <div>
                  <h3>{s.name}</h3>
                  <p>{s.roll} - Section {s.section}</p>
                  <p>Reason: {s.reason}</p>
                </div>

                <div>
                  <p>👤 Student: {s.studentPhone}</p>
                  <p>👨‍👩‍👦 Parent: {s.parentPhone}</p>
                </div>

                <div>
                  <a href={`tel:${s.parentPhone}`}>
                    <button
                        className="call-btn"
                        onClick={() => {
                            setCalledStudent(s);
                            setShowPopup(true);
                            window.location.href = `tel:${s.parentPhone}`;
                        }}
                    >
                      📞 Call Parent
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
        {showPopup && (
            <div className="popup-overlay">
                <div className="popup-box">

                <h3>📞 Call Status</h3>

                <p>Called: <b>{calledStudent?.name}</b></p>
                <p>Roll: {calledStudent?.roll}</p>

                <button
                    className="popup-btn"
                    onClick={() => setShowPopup(false)}
                >
                    OK
                </button>

                </div>
            </div>
            )}
      </div>
    </div>
  );
}

export default FacultyPermissionView;