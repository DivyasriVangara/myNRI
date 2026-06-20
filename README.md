# 📚MyNRI - Attendance Monitoring System

## 📌 What is an Attendance Monitoring System?

An Attendance Monitoring System is a digital platform designed to record, manage, and track student attendance efficiently. It provides students with easy access to their attendance information while enabling faculty and administrators to maintain attendance records accurately.

The system helps improve transparency, reduces manual work, and allows students to monitor their attendance status regularly. By providing real-time attendance information, it helps students stay informed and avoid falling below the required attendance percentage.

## 🎯 Why do we need an Attendance Monitoring System?

In our university, students usually know their attendance only when faculty informs them or during attendance review. Sometimes students may not know whether they are below the required attendance percentage until it becomes a problem.

To avoid this, we thought of developing an Attendance Monitoring System. Through this system, students can check their attendance regularly and faculty can maintain attendance records more easily. This reduces manual work and helps both students and faculty keep track of attendance.

---

## 🚀 Functional Requirements

### 👨‍🎓 Student View

A student should be able to:

* 🔐 Login using Roll Number and Password.
* 👤 View personal profile details.
* 📊 View attendance percentage.
* 📅 View attendance history.
* 🚪 Logout securely.

### 👨‍🏫 Faculty View

A faculty member should be able to:

* 🔐 Login securely.
* ✅ Mark attendance for students.
* ✏️ Update attendance records if needed.
* 📈 View attendance reports.
* 🔍 Search student attendance details.

### 👨‍💼 Administrative View

An administrator should be able to:

* 🗂️ Manage student information.
* 👨‍🏫 Manage faculty accounts.
* 📊 View overall attendance reports.
* ⚠️ Monitor students with low attendance.
* 📝 Maintain system records.

### ⚙️ Technical View

From the technical side, the system should:

* 💾 Store attendance data in a database.
* 🧮 Calculate attendance percentage automatically.
* 🔒 Provide secure login authentication.
* 🎭 Display data according to user roles.
* ✅ Maintain accuracy and reliability of attendance records.

---

## 🎯 Expected Outcome

The Attendance Monitoring System will help students monitor their attendance easily and help faculty maintain attendance records efficiently. It provides a simple and transparent way of managing attendance information within the university.

## Why do we Need an Attendance Monitoring System? ( In Different Perspectives)
This section explains the need for an Attendance Monitoring System (AMS) from different perspectives, including students, faculty, administration, and technical management. Each perspective highlights the challenges of manual attendance and the benefits of a digital attendance system.

| Views | Student View | Faculty View | Administrative View | Technical View |
|--------|-------------|-------------|---------------------|---------------|
| Why AMS? | As students, we usually don't pay much attention to attendance until faculty announces it or attendance shortage lists are released. Because of this, some students may realize too late that their attendance is low. An Attendance Monitoring System helps students stay aware of their attendance status throughout the semester. Instead of showing exact percentages, the system can display attendance zones such as Green, Orange, and Red. This helps students know whether they are in a safe range or need to improve their attendance without focusing on exact numbers. |  From a faculty perspective(view), manual attendance takes valuable class time in every period. There is a chance of errors while calling roll numbers, marking attendance, and maintaining records. Proxy attendance and mistakes in attendance calculations can also be occur. Faculty members need to spend extra time on maintaining registers, calculating attendance percentages manually, and identifying students with low attendance. | From an administrative view, it is difficult to keep attendance records of all students manually. Administrators have to check many records, prepare reports, and find students with low attendance. This takes a lot of time and there is a chance of making mistakes. An Attendance Monitoring System helps them manage all attendance information easily and quickly. | The manual attendance management is time-consuming and can cause errors. As the number of students increases, it becomes tough to maintain records properly. An Attendance Monitoring System helps manage attendance more efficiently. |
| Positives |The Attendance Monitoring System helps students check their attendance anytime. They do not need to wait for faculty updates. It helps students know if their attendance is good or if they need to improve it. This can help avoid attendance shortages and keep students aware of their attendance throughout the semester. | An Attendance Monitoring System reduces the manual work, time and also percentage calculations. It maintains the records digitally so that we can search, access, and manage them easily. | It helps administrators do their work more easily. They can check attendance records quickly without searching through registers. It saves time, reduces manual work, and keeps all attendance information organized in one place. | It makes attendance management simple and organized. It helps store records safely, saves time, and reduces mistakes. Students and faculty can easily check attendance information whenever needed. But they both won't see the exact percentage of attendance. |
| Negatives | It also has some drawbacks. Some students may try to use proxy attendance to maintain their attendance records. A few students may focus only on meeting the required attendance instead of attending classes regularly. Some students may also ignore attendance warnings even when their attendance is low.| And the disadvantage is the system depends on internet connection and server availability. Technical issues, system failures, or restarts can temporarily affect attendance marking. So, regular monitoring and maintainance also needed. | The system depends on technology. If the internet is slow or the system has a problem, it may be difficult to access attendance records. Regular maintenance is needed to keep the system running smoothly. | Sometimes mistakes may happen while marking attendance. Because of this, students may see the wrong attendance percentage and will get confussed until it is updated. |
| Name of Student | Divya Sri | Swathi | Tejaswi | Tejaswi |

### Preventing Proxy Attendance

One challenge in any attendance system is proxy attendance, where one student marks attendance on behalf of another student. To reduce this issue, the system can use methods such as QR-code based attendance, OTP verification, or faculty verification. These methods help ensure that attendance is marked only by the student who is actually present in the class.
## 📚 Documentation

- [Documentation](documentation/README.md)
- [Student Functional Requirements](documentation/Student_Functional_Requirements.md)
- [Login with Biometric Verification](documentation/Login_With_Biometric_Verification.md)
  ---
**Prepared By:** Divya Sri
# Docs

## Contents

- [Functional Requirements](Faculty_functional_requirements.md)
- [Late Comers Handling](late_comers.md)
- [ER Diagram](er_diagram.png)

**Prepared By**: Swathi

