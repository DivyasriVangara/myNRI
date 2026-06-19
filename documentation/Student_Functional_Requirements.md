# Student Functional Requirements

## Option 1: Storing Student Fingerprint

### Functional Requirements

* Register using Roll Number and Password.
* Register fingerprint during account setup.
* Login securely.
* View profile and dashboard.
* View class timetable.
* Scan faculty QR code.
* Verify fingerprint after scanning QR.
* Mark attendance after successful verification.
* View attendance history and status.
* Receive attendance notifications and warnings.
* View attendance zones (Green, Orange, Red).
* Request faculty approval if fingerprint verification fails.

### Problem

* Mobile apps cannot directly store or access fingerprint data.
* Some phones do not support fingerprint sensors.
* Fingerprint sensors may fail due to damage or finger injuries.
* Privacy and security issues may arise when storing biometric data.

---

## Option 2: Using Phone's Fingerprint

### Functional Requirements

* Register using Roll Number and Password.
* Login securely.
* View profile and dashboard.
* View class timetable.
* Scan faculty QR code.
* Verify identity using the phone's fingerprint authentication.
* Mark attendance after successful QR scan and verification.
* View attendance history and status.
* Receive attendance notifications and warnings.
* View attendance zones (Green, Orange, Red).
* Request faculty approval if verification fails.

### Advantage

Instead of storing fingerprints in the database, the system uses the phone's built-in biometric authentication, making the application simpler, safer, and easier to implement.
