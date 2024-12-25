# UI-Front-end-Task - PulseID 

This repository contains two main components:
- **task-api**: A Node.js server to fetch data and avoid CORS issues.
- **task-web**: A React.js application for the front-end, using Redux Toolkit, React Router, and feature-based atomic design methodology.

## Deployed URL

Live Demo: [App](https://eshan-pulseid-test.netlify.app/)

---

## Folder Structure

### **Root Directories**
- **`task-api`**: Contains the Node.js backend server.
- **`task-web`**: Contains the React.js front-end application.

### **task-web Folder Structure**
The React app is structured based on **feature-based atomic design methodology**, promoting reusable and maintainable code. Key folders include:

[Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/)

- **`assets/`**: Contains images.

- **`components/`**: Contains reusable components like buttons, inputs, and other shared atomic and molecular components that aren't tied to specific features.

- **`features/`**: Each major feature (like authentication, products, and cart) has its own folder with components, redux slices, services (API calls), and related pages.

- **`styles/`**: Contains global styles, themes, and CSS files to ensure consistent design across the app.

- **`redux/`**: State management.

- **`utils/`**: Utility functions that can be used across various parts of the app.

- **`types/`**: Types, Enums and interfaces declarations.

- **`hooks/`**: Custom React hooks to abstract complex logic and share reusable functionality across components.

---

## Technologies Used

- **React.js 18.3**: Front-end library for building user interfaces.
- **Redux Toolkit**: State management.
- **React Router**: Client-side routing.
- **SCSS**: For styling.
- **Node.js**: Backend server to handle data fetching and avoid CORS errors.

---

## How to Run the Project Locally

### 1. Clone the Repository
```bash
git clone https://github.com/eshanrajapakshe/pulseid-task.git
cd pulseid-task
```

### 2. Run the API (task-api)
```bash
cd task-api
npm install
npm start
The server will run on http://localhost:5000 by default.
```

### 3. Run the React App (task-web)
```bash
cd task-web
npm install
npm run dev
The app will run on http://localhost:5173 by default.
```
