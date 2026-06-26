import { useState } from "react";

function StudentPermissionForm({ addRequest }) {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [reason, setReason] = useState("");
  const [days, setDays] = useState("");

  const handleSubmit = () => {
    if (!name || !roll || !reason || !days) return;

    addRequest({
      id: Date.now(),
      name,
      roll,
      reason,
      days: Number(days),
      status: "Pending",
    });

    setName("");
    setRoll("");
    setReason("");
    setDays("");
  };

  return (
    <div className="card">

      <h2>👨‍🎓 Student Permission Form</h2>

      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Roll No" value={roll} onChange={(e) => setRoll(e.target.value)} />
      <input placeholder="Reason" value={reason} onChange={(e) => setReason(e.target.value)} />
      <input type="number" placeholder="Leave Days" value={days} onChange={(e) => setDays(e.target.value)} />

      <button className="btn" onClick={handleSubmit}>
        Submit Request
      </button>

    </div>
  );
}

export default StudentPermissionForm;