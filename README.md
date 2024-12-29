# React Admin App Task

This project implements the **Login**, **Logout**, **Password Reset**, **Dashboard**, and **User List** pages as per the Figma design provided by JIITAK. The application is fully responsive, incorporates state management, and uses dummy data for listing pages.

## 🚀 Features

- **Responsive Design**: Adheres to the Figma design and ensures functionality across all screen sizes.
- **State Management**: Implemented using [Context API / Redux] for managing login state, form submissions, and other flows.
- **Dynamic Pages**:
  - **Login**: Validates user credentials and updates state.
  - **Logout**: Clears session data and redirects to the login page.
  - **Password Reset**: Handles user input for resetting passwords with proper validations.
  - **Dashboard**: Displays widgets and key metrics with dummy data.
  - **User List**: Populates user data dynamically using mock data.
- **Clean Codebase**: Follows best practices with scalable architecture.

## 🛠 Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **State Management**: Context API / Redux
- **Routing**: React Router
- **Mock Data**: JSON for dummy content
- **Build Tool**: Vite / Create React App (Specify the one you used)

## 📸 Screenshots

### Login Page
![Login Page](screenshots/login.png)

### Dashboard
![Dashboard](screenshots/dashboard.png)

### User List
![User List](screenshots/user-list.png)

## 📦 Project Structure

src/ ├── assets/ # Static assets (images, fonts, etc.) ├── components/ # Reusable components ├── context/ # Context/state management ├── pages/ # Individual page components ├── utils/ # Utility functions ├── App.js # Main application component └── index.js # Entry point

bash
Copy code

## ⚙️ Setup Instructions

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-admin-app-task.git
Navigate to the project directory:
bash
Copy code
cd react-admin-app-task
Install the dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm start
Open the application in your browser at http://localhost:3000.
💻 How to Use
Login Page: Enter dummy credentials to access the dashboard.
Username: admin
Password: password
Dashboard: View dummy widgets and metrics.
User List: Interact with dummy user data (e.g., search, filter, or paginate).
Password Reset: Enter a dummy email and observe reset flow (validations in place).
🌐 Deployment
The project is deployed at: Deployed Link

❗ Known Issues
None. All features have been implemented as per the requirements.
