# Programa de Alfabetização e Letramento de Jovens e Adultos (PALJA)

This project is a mobile application developed using React Native to support the management of literacy and education programs for youth and adults. The application is fully integrated with Firebase to manage users, classes, attendance, educational content, and secure authentication. It provides an end-to-end digital solution for monitoring student progress, organizing learning materials, and administering class logistics.

## Overview

The app was designed to be clean, scalable, and easy to maintain, with a strong separation between the user interface (UI) and the service logic that interacts with Firebase. It supports a complete CRUD system for users, classes, attendance records, and content modules.

Firebase is used as the backend for real-time data storage, authentication, and user/session control. All communication with Firebase is handled through custom service modules grouped in a dedicated folder structure, allowing for centralized management of all remote operations.

## Architecture and Structure

The codebase is organized into clear and modular sections. The main components are:

- **Screens**: All UI screens are organized by function, with each screen representing a specific view (e.g., login, dashboard, attendance, content, user management). These screens manage layout, input, and navigation.
  
- **Modules**: All Firebase-related operations are isolated in the `/modules` folder. This includes:
  - Authentication (sign in, sign up, password hashing)
  - User management (create, update, delete)
  - Class management (create, assign users, list)
  - Attendance tracking
  - Educational content CRUD

Each module handles asynchronous communication with Firebase and is written to be reusable across different screens.

- **Routing and Navigation**: The app uses React Navigation to control navigation between screens, with role-based access that determines which screens are available to each user (e.g., teachers vs students).

- **Security**: User credentials are hashed using SHA-256 before being sent to Firebase Authentication. This is implemented with Crypto-JS and adds an extra layer of security beyond Firebaseâ€™s default mechanisms.

- **Role-Based Access**: After authentication, the system identifies the userâ€™s role (student, teacher, or coordinator) and renders the corresponding interface and options. Coordinators can manage classes and users, teachers can mark attendance and upload content, and students have access only to content and attendance records.

## Key Features

- **User Authentication**: Login system with SHA-256 hashing and Firebase Authentication.
- **User and Role Management**: Full creation and assignment of users to roles and classes.
- **Classroom Control**: Register and manage classes, including linking students and teachers.
- **Attendance Management**: Real-time presence control with per-class tracking.
- **Educational Content**: Upload, view, and organize content by module and subject.
- **Full CRUD System**: Manage users, classes, content, and attendance records.

## Scalability

The project was built with scalability in mind. By separating concerns between the UI layer and the Firebase modules, the system can be easily extended in the future. Adding new features, screens, or database logic requires minimal changes to the existing architecture.

Developers can introduce additional roles, views, or Firebase collections without needing to refactor the entire codebase. The modular approach also facilitates onboarding of new contributors or migration to alternative backends if required.

## License

This project uses a custom license. Please verify the license terms directly in the repository or with the project maintainers.
