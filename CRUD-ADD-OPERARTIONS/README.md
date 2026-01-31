# React User Management System (CRUD)

A simple **User Management System** built using **React (Vite)**, **Axios**, **React Router**, and **JSON Server**.  
This project performs complete **CRUD operations** (Create, Read, Update, Delete) on user data stored in `db.json`.

---

## 🚀 Features

- Add new users
- View user list
- Update user details
- Delete users
- REST API using JSON Server
- Clean and simple React component structure

---

## 🛠️ Tech Stack

- React (Vite)
- React Router DOM
- Axios
- JSON Server
- HTML, CSS, JavaScript

---

## 📁 Project Structure

CRUD-ADD-OPERARTIONS
├── public
├── src
│   ├── assets
│   ├── CRUD-OPERATIONS
│   │   ├── Create.jsx
│   │   ├── Read.jsx
│   │   ├── Update.jsx
│   │   ├── Delete.jsx
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── db.json
├── index.html
├── package.json
├── vite.config.js
└── README.md




---

## ⚙️ Prerequisites

Make sure you have the following installed:

- Node.js
- npm

---

2️⃣ Navigate to the project folder

cd CRUD-ADD-OPERARTIONS


3️⃣ Install dependencies

npm install

🗄️ Start JSON Server (Backend)

This project uses JSON Server with db.json as a mock database.

Start the server on port 3001:

npx json-server --watch db.json --port 3001


📌 API Endpoint:

http://localhost:3001/users

▶️ Start React Application (Frontend)

Open a new terminal and run:

npm run dev


📌 App will run at:

http://localhost:5173

🔁 CRUD Operations Flow

Create → Add new user data

Read → Fetch users from JSON Server

Update → Modify existing user data

Delete → Remove user from database



📚 Learning Outcome

Understanding CRUD operations

Working with REST APIs

React Router navigation

Axios for API calls

JSON Server for backend simulation

👨‍💻 Author

Sai Ganesh Nagamalla
