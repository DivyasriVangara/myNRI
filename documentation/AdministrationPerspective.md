# Attendance Monitoring System (From Administrator's Perspective)

## Why do we need AMS from an Administrator's Perspective?

- Centralized Attendance Management
- Automatic Attendance Record Generation
- Reduction of Manual Errors and Proxy Attendance
- Efficient Timetable and Class Management
- Real-time Monitoring and Reporting
- Easy Communication with Students and Faculty
---
## What do we need to achieve AMS from an Administrator's Perspective?

### General Requirements

- Secure Administrator Login
- Access to student, faculty, and class information
- Monitor attendance across all departments and sections

**Technologies:**
- HTML, CSS, JavaScript (Frontend)
- Node.js, Express.js (Backend)
- MySQL (Database)
- JWT, bcrypt (Authentication)

---

### Student Management

- Add, update, delete, and view student details
- Assign students to departments, years, and sections
- Manage student credentials

**Code Location:**
- Frontend → Student Dashboard
- Backend → Student API
- Database → Student Table

---

### Faculty Management

- Add, update, delete, and view faculty details
- Assign faculty to subjects and classes

**Code Location:**
- Frontend → Faculty Dashboard
- Backend → Faculty API
- Database → Faculty Table

---

### Timetable Management

- Create, update, and delete timetables
- Assign subjects, faculty, classrooms, and timings
- Detect timetable conflicts automatically

**Technologies:**
- JavaScript (Conflict Checking)
- Node.js + Express.js
- MySQL

---

### Attendance Session Management

- Set QR expiry time
- Monitor active and expired sessions

---

### Attendance Monitoring

- View attendance records
- Monitor late comers and absentees
- Track attendance percentage

**Technologies:**
- MySQL
- Express.js
- Chart.js

---

### Attendance Request Management

- Receive attendance requests
- Approve or reject requests
- Maintain request history

**Code Location:**
- Frontend → Request Module
- Backend → Request API
- Database → Attendance_Request Table

---

### Notification Management

- Send notifications to students and faculty
- Send attendance shortage alerts
- Broadcast announcements

**Technologies:**
- NodeMailer
- Express.js
- Notification Table

---

### Report Generation

- Generate daily, weekly, and monthly reports
- Export reports as PDF or Excel
- Generate section-wise and department-wise reports

**Technologies:**
- jsPDF (PDF Reports)
- ExcelJS (Excel Reports)

---

### Attendance Zone Management

- Classify students into Green, Orange, and Red zones
- Automatically update attendance zones
- Identify low attendance students

**Technologies:**
- JavaScript
- MySQL

---

### Security and Access Control

- Secure administrator authentication
- Manage roles and permissions
- Maintain audit logs

**Technologies:**
- JWT
- bcrypt
- Role-Based Access Control (RBAC)
- Audit Logs


# SQL vs NoSQL — 5 Major Differences Based on Your App Features

| # | Your Feature | SQL Behavior | NoSQL Behavior |
|---|--------------|-------------|----------------|
| 1 | QR Attendance | Store token in a table; manual expiry logic is needed | TTL index automatically deletes QR after 30 seconds natively |
| 2 | Biometric + Location | Separate tables for fingerprint, face, and require complex joins | A single document stores biometric data, location, and timestamp together |
| 3 | Live Monitoring | Requires polling or additional tools for real-time updates | MongoDB Change Streams provide instant live updates |
| 4 | Automatic Timetable | Fixed schema makes changes difficult when timetable structure changes | Flexible documents allow adding periods, holidays, and subjects anytime |
| 5 | Calling Absentees + Permission | Multiple joins are needed to fetch student details, permissions, and call logs | A single document contains student details, permissions, and call status |

