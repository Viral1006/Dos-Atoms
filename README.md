# Corporate Website

This repository contains the source code for a corporate website developed using a modern web stack. The project is deployed on Render.com.

## Features

- **React.js**: A JavaScript library for building user interfaces.
- **Vite**: A development server and build tool that significantly improves the development experience.
- **Tailwind CSS** and **Vanilla CSS**: Used for styling the website.
- **Node.js** and **Express.js**: Backend technologies used to handle server-side operations.
- **Axios**: A promise-based HTTP client for making API requests.
- **Nodemailer**: A module for sending emails from Node.js applications.

## Project Structure

The project is organized as follows:

## Getting Started

### Prerequisites

Make sure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)
- [Vite](https://vitejs.dev/)

### Installation

1. Clone the repository:

```
git clone https://github.com/your-username/corporate-website.git
cd corporate-website

Install dependencies:

npm install
Running the Development Server
Start the Vite development server:

npm run dev
The application will be available at http://localhost:5000.

Building for Production
Build the application for production:


npm run build
Running the Backend Server
Navigate to the server directory and start the Express server:


cd server
node server.js
Deployment
The project is deployed on Render.com. For detailed instructions on how to deploy, refer to the Render.com documentation.

Usage
Sending Emails
The project uses Nodemailer to send emails. Configure the email settings in the server/config file.

API Requests
API requests are made using Axios. Configure the base URL and endpoints in the relevant components.

Technologies Used
React.js: Documentation
Vite: Documentation
Tailwind CSS: Documentation
Node.js: Documentation
Express.js: Documentation
Axios: Documentation
Nodemailer: Documentation
Contributing
Contributions are welcome! Please open an issue or submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
