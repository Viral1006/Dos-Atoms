# Dos-Atoms

This repository contains the source code for a corporate website(Dos Atoms) developed using a modern web stack. The project is deployed on Render.com.

## Features

- **React.js**: A JavaScript library for building user interfaces.
- **Vite**: A development server and build tool that significantly improves the development experience.
- **Tailwind CSS** and **Vanilla CSS**: Used for styling the website.
- **Node.js** and **Express.js**: Backend technologies used to handle server-side operations.
- **Axios**: A promise-based HTTP client for making API requests.
- **Nodemailer**: A module for sending emails from Node.js applications.

## Project Overview

Meet our new concept of a design studio’s corporate website!

- **First Screen**: Displays the company’s motto.
- **Next Two Screens**: Display the company description and a list of its services.
- **Another Screen**: Shows the list of team members and their responsibilities.
- **Last Screen**: Displays the contact information.

I've used neutral grey shades for the background and added blurry gradients as the main colorful accent. This simple color scheme doesn’t distract users from observing the company’s portfolio.

The minimal design, large print, and colorful accents convey the company’s mission and emphasize its creativity. The simple navigation and clear information layout make the website pleasant to use.

### Design Details

- **Font Used**: PP Telegraf
- **Color Scheme**:
  - ![#101110](https://via.placeholder.com/15/101110/101110.png) `#101110`
  - ![#e42f2f](https://via.placeholder.com/15/e42f2f/e42f2f.png) `#e42f2f`
  - ![#f3994c](https://via.placeholder.com/15/f3994c/f3994c.png) `#f3994c`
  - ![#f1f1ea](https://via.placeholder.com/15/f1f1ea/f1f1ea.png) `#f1f1ea`

### Our Capabilities

We create quality content and cool ideas. We create websites, applications, 3D design, motion design, and animation. We bring the most daring ideas to life.

Explore the project [here](https://dos-atoms-1.onrender.com/) to understand it better.

## Project Structure

The project is organized as follows:
```
corporate-web/
├── frontend/
│ ├── index.html
│ ├── public/
│ │ ├── ...
│ ├── src/
│ │ ├── components/
│ │ │ ├── Contactus.jsx
│ │ │ ├── ...
│ │ ├── App.jsx
│ │ ├── index.js
│ │ ├── ...
│ ├── package.json
│ ├── ...
├── server/
│ ├── index.mjs
│ ├── package.json
│ ├── ...
├── README.md
```


## Getting Started

### Prerequisites

Make sure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)
- [Vite](https://vitejs.dev/)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Viral1006/Dos-Atoms.git
cd corporate-website
```

### Frontend Setup

1. Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```

4. Build for production:

    ```bash
    npm run build
    ```

5. Preview the production build:

    ```bash
    npm run preview
    ```

### Backend Setup

1. Navigate to the server directory:

    ```bash
    cd ../server
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the server:

    ```bash
    node index.js
    ```

## Deployment

- Build the frontend and serve the static files using a server like Express or deploy the frontend to a static hosting service (e.g., Vercel, Netlify).
- Ensure the backend is running on a suitable environment (e.g., Heroku, AWS).

## Features

- Responsive design
- Contact form with email functionality
- Smooth animations using Framer Motion


1. Install dependencies:

```bash
npm install
```

2. Running the Development Server
## Start the Vite development server:
```bash
npm run dev
```
- The application will be available at http://localhost:5000.

3. Building for Production

## Build the application for production:
```bash
npm run build
```

4. Running the Backend Server

## Navigate to the server directory and start the Express server:
```bash
cd server
node index.mjs
```

4. Deployment
- The project is deployed on Render.com. For detailed instructions on how to deploy, refer to the Render.com documentation.(or Heroku, vercel, aws)

### Usage
## Sending Emails
- The project uses Nodemailer to send emails. Configure the email settings in the server/config file.

## API Requests
- API requests are made using Axios. Configure the base URL and endpoints in the relevant components.

## Technologies Used
React.js: Documentation
Vite: Documentation
Tailwind CSS: Documentation
Node.js: Documentation
Express.js: Documentation
Axios: Documentation
Nodemailer: Documentation

## Contributing
Feel free to open issues or submit pull requests for any improvements.

## License
This project is licensed under the MIT License.
```

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
