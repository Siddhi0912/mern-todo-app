MERN To-Do List Application
This is a simple web application built using the MERN stack (MongoDB, Express, React, and Node.js) that allows users to create, read, update, and delete (CRUD) to-do items. The application also includes basic user authentication using JSON Web Tokens (JWT).

Features
User Authentication: Register and log in to access your to-do list.

CRUD Operations: Create, read, update, and delete to-do items.

Responsive Design: Works well on different screen sizes.

State Management: Zustand is used for managing the state in the React frontend.

Form Validation: Basic validation for input fields (e.g., to-do item name cannot be empty).

Technologies Used
Frontend: React, Axios, React Router DOM

Backend: Node.js, Express, MongoDB, Mongoose, JWT, Bcrypt

Database: MongoDB

Prerequisites
Before running the application, ensure you have the following installed:

Node.js (v16 or higher)

MongoDB (either locally or a cloud instance like MongoDB Atlas)

Git (optional)

Setup Instructions
===================

git clone https://github.com/Siddhi0912/mern-todo-app.git
2. Set Up the Backend
Navigate to the backend directory:

bash
Copy
cd backend
Install dependencies:

bash
Copy
npm install
Create a .env file in the backend directory and add the following environment variables:

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/todo-app?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key
PORT=5000

Start the backend server:

npm start

3. Set Up the Frontend
Navigate to the frontend directory:

cd ../frontend
Install dependencies:

npm install
Start the frontend development server:

npm start
Open your browser and visit http://localhost:3000 to view the application.

Project Structure
==================

Backend
backend/
├── models/            # MongoDB models
├── routes/            # API routes
├── middleware/        # Authentication middleware
├── server.js          # Entry point for the backend
├── .env               # Environment variables
└── package.json       # Backend dependencies

Frontend
frontend/
├── public/            # Static assets
├── src/
│   ├── components/    # React components
│   ├── store/         # Zustand store for state management
│   ├── App.js         # Main application component
│   ├── index.js       # Entry point for the frontend
└── package.json       # Frontend dependencies

Contact
For any questions or feedback, feel free to reach out:

Your Name: siddhimalviya757@gmail.com

GitHub: (https://github.com/Siddhi0912)
