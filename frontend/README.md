Login Application (React + Node.js)

Project Overview

This project is a simple Login Application built using React for the frontend and Node.js with Express for the backend.

The application allows users to enter a username and password, validates the credentials through a backend API, and navigates to a Welcome page upon successful login.

This project demonstrates basic full-stack development concepts such as API communication, authentication logic, and React routing.

---

Tech Stack

Frontend

- React
- React Hooks
- Axios
- React Router

Backend

- Node.js
- Express.js
- bcrypt (for password hashing)
- CORS

---

Features

- Login form with username and password fields
- Backend API validation of credentials
- Error message display for incorrect login
- Navigation to Welcome page after successful login
- Username remembered using localStorage
- Password hashing using bcrypt
- Proper HTTP status codes

---

Project Structure

login-app/
│
├── backend/
│   ├── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   ├── Login.js
│   │   ├── Welcome.js
│   │   ├── index.js

---

Backend Setup

1. Navigate to backend folder

cd backend

2. Install dependencies

npm install express cors bcrypt

3. Start the server

node server.js

---

Frontend Setup

1. Navigate to frontend folder

cd frontend

2. Install dependencies

npm install axios react-router-dom

3. Start the React application

npm start

---

API Endpoint

POST /login

Validates user credentials.

Request Body:

{
  "username": "admin",
  "password": "admin"
}

Success Response:

Status: 200
{
  "message": "Login successful"
}

Error Response:

Status: 401
{
  "message": "Invalid credentials"
}

---

Test Credentials

Username:

admin

Password:

admin

---

Security Enhancements

The application includes basic security practices:

- Password hashing using bcrypt
- Environment variables support
- CORS configuration
- Proper HTTP status codes

---


Author

Swathi Shaik

---
