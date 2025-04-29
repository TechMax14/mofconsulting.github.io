# mofcodeconsulting

## New client infra setup
1. add project here: https://console.cloud.google.com/home/dashboard
2. add project here: https://console.firebase.google.com/u/0/project/mofcodeconsulting/overview
3. choose Web option in project overview
4. pick same name as project for the app nickname
5. run the npm command from the firebase console in the root of the project
6. copy the config object to the firebaseConfig object in src/firebase.js

## REACT APP
1. Set Up Node.js and npm:

Make sure you have Node.js and npm (Node Package Manager) installed on your system. You can download and install them from the official Node.js website: https://nodejs.org/

2. Create a New Project Directory:

Create a new directory for your project:

bash
Copy code
mkdir your-project-name
cd your-project-name
3. Initialize a Node.js Backend with Express:

Initialize a Node.js backend using Express. Run the following commands:

bash
Copy code
npm init -y
npm install express
Create an app.js file in your project directory and set up a basic Express server:

javascript
Copy code
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
4. Set Up React Frontend:

In your project directory, create a client folder for the React frontend:

bash
Copy code
npx create-react-app client
5. Firebase Setup:

You need to set up Firebase for your project. Go to the Firebase Console (https://console.firebase.google.com/), create a new project, and follow the steps to set up Firebase for web.

Once you have your Firebase project credentials (API key, authDomain, etc.), create a Firebase configuration file in your React frontend. In the client/src directory, create a file called firebase.js and add your Firebase configuration:

javascript
Copy code
// client/src/firebase.js
import firebase from 'firebase/app';
import 'firebase/auth'; // Add other Firebase services you need

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  // Add other Firebase config properties here
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
6. Connecting React and Express:

To allow your React frontend to communicate with the Express backend, you can use a package like concurrently to run both servers concurrently. Install it:

bash
Copy code
npm install concurrently
Modify your package.json file in the project root to include a script for running both servers:

json
Copy code
"scripts": {
  "start": "concurrently \"npm run server\" \"npm run client\"",
  "server": "node app.js",
  "client": "cd client && npm start",
  // ...
}
7. Routing and API Endpoints:

Set up your Express server to define API endpoints and serve your React frontend. You can define API routes in your app.js file, and use Express's express.static middleware to serve the React app:

javascript
Copy code
// app.js
const path = require('path');

// API routes
app.get('/api/data', (req, res) => {
  // Your API logic here
});

// Serve React frontend
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle React routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
8. Start Your Application:

Now, you can start your application by running:

bash
Copy code
npm start
This will start both your Express backend and React frontend concurrently.

9. Build and Deploy:

When you're ready to deploy your application, you'll need to build your React app and configure Firebase for production. Refer to Firebase documentation for deploying your app.


## FIREBASE DEPLOYMENT
