# React Admin App 

This project implements the **Login**, **Logout**, **Password Reset**, **Dashboard**, and **User List** pages as per the Figma design provided by JIITAK. The application is fully responsive, incorporates state management, and uses dummy data for listing pages.

## 🚀 Features

- **Responsive Design**: Adheres to the Figma design and ensures functionality across all screen sizes.
- **State Management**: Implemented using [Context API ] for managing login state, form submissions, and other flows.
- **Dynamic Pages**:
  - **Login**: Validates user credentials and updates state.
  - **Logout**: Clears session data and redirects to the login page.
  - **Password Reset**: Handles user input for resetting passwords with proper validations.
  - **Dashboard**: Displays widgets and key metrics with dummy data.
  - **User List**: Populates user data dynamically using mock data.
- **Clean Codebase**: Follows best practices with scalable architecture.

## 🛠 Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **State Management**: Context API 
- **Routing**: React Router
- **Mock Data**: JSON for dummy content
- **Build Tool**: Vite 

bash
Copy code

## ⚙️ Setup Instructions

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/ajinas001/Admin_app_frontend.git
Navigate to the project directory:
bash
Copy code
cd admin-app
Install the dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm run dev
Open the application in your browser at  http://localhost:5173/
💻 How to Use
password reset page:(any password 8-20 characters)
again confirm the password in the next field
Login Page:
email:admin.s12345@allright.com
Password: password1234
Dashboard: View dummy widgets and metrics.
User List: Interact with dummy user data (e.g., search, filter, or paginate).
🌐 Deployment
The project is deployed at: https://admin-app-frontend-git-master-ajinas-projects.vercel.app/

❗ Known Issues
None. All features have been implemented as per the requirements.
