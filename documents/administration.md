#  Administrator Perspective

### Why Do We Need an Attendance Monitoring System?

From an administrative view, managing attendance records, faculty schedules, class timetables, and student information manually is difficult. As the number of students and faculty members increases, it becomes harder to keep everything organized.

Administrators need a system that helps them monitor attendance, manage schedules, identify students with low attendance, and generate reports easily. An Attendance Monitoring System helps make these tasks simpler and more efficient.

---

## Smart Timetable and Attendance Validation

The system maintains the complete timetable of the institution.

### Example

- 10:00 AM – 11:00 AM → DBMS → Faculty A
- 11:00 AM – 12:00 PM → Python → Faculty B
- After that, attendance closes automatically.
When attendance is marked:

- The system checks the timetable.
- Attendance can be marked only for the scheduled subject.
- Attendance can be marked only by the assigned faculty.
- Attendance can be marked only during the allocated class period.

This ensures attendance is marked at the correct time by the correct faculty for the correct subject.

---

##  Functional Requirements

###  User Management

- Add and manage student accounts.
- Add and manage faculty accounts.
- Assign roles and permissions.
- Manage departments and courses.

###  Timetable Management

- Create class timetables.
- Update class schedules.
- Assign faculty to subjects.
- Allocate classrooms.
- Manage timetable changes.

###  Attendance Management

- Monitor attendance records.
- Verify attendance submissions.
- Track attendance percentages.
- Identify students with low attendance.
- View department-wise attendance reports.

###  Report Generation

- Generate daily attendance reports.
- Generate weekly attendance reports.
- Generate semester-wise attendance reports.
- Export reports when required.

###  Notification Management

- Send attendance alerts.
- Send low-attendance warnings.
- Send important announcements.
- Notify faculty about timetable changes.

###⚙️ System Monitoring

- Monitor attendance activities.
- Track attendance trends.
- Handle attendance corrections.
- Maintain system records.

---

##  Positives

- All attendance records are stored in one place.
- Timetables and attendance are connected.
- Attendance is validated automatically.
- Low-attendance students can be identified easily.
- Reports can be generated quickly.
- Reduces paperwork and manual calculations.
- Helps administrators manage academic activities efficiently.

---

##  Negatives

- The system requires regular maintenance and updates.
- Incorrect attendance entries may affect reports.
- Timetable information must always be updated correctly.
- Faculty and students depend on the system for attendance information.
- Technical issues may temporarily affect access to records.

---

##  Attendance Window Control

To improve attendance accuracy, the system uses an attendance window.

### Example

- DBMS Class: 10:00 AM – 11:00 AM
- Attendance Window: 10:00 AM – 10:10 AM

Rules:

- QR code is active only during the attendance window.
- Students must scan within the allowed time.
- Attendance closes automatically after the time limit.

### Benefits

- Reduces proxy attendance.
- Prevents late attendance marking.
- Improves attendance accuracy.
- Ensures attendance is recorded during the actual class.

---

##  Project Vision

The goal of MyNRI is not only to record attendance but also to help administrators manage timetables, faculty schedules, student attendance, and academic reporting through a single centralized platform.

The system aims to improve transparency, reduce manual work, increase accuracy, and provide a better experience for students, faculty, and administrators.
