/* eslint-disable max-len */
/* eslint-disable no-var */
/* eslint-disable object-curly-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable indent */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const path = require("path");
const serviceAccount = require("./key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://tmg-landing-site-default-rtdb.firebaseio.com"
});

const db = admin.firestore();

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/mentoring', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'mentoring.html'));
});



// Your API route and logic
app.post("/api/submit-form/", async (req, res) => {
    // Get form data from request body
    console.log("Received a request at /api/submit-form/");
    const formData = req.body;

    // Input validation
    if (!formData.name || !formData.email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    try {
        const docRef = await db.collection('web-design-submissions').add({
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            company: formData.company || null,
            package: formData.package || null,
            title: formData.title || null,
            message: formData.message || null
        });
        console.log(`New contact added with ID: ${docRef.id}`);

        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/api/schedule/", async (req, res) => {
    // Get form data from request body
    console.log("Received a request at /api/schedule/");
    const scheduleFormData = req.body;

    // Input validation
    if (!scheduleFormData.name || !scheduleFormData.email || !scheduleFormData.phone || !scheduleFormData.date || !scheduleFormData.time) {
        // eslint-disable-next-line max-len
        return res.status(400).json({ error: 'Name, email, date and time are required' });
    }

    try {
        // Create an object to store the document data
        const docData = {
            name: scheduleFormData.name,
            email: scheduleFormData.email,
            date: scheduleFormData.date,
            time: scheduleFormData.time
        };

        // Add optional fields if they exist in the form data
        if (scheduleFormData.phone) {
            docData.phone = scheduleFormData.phone;
        }
        if (scheduleFormData.package) {
            docData.package = scheduleFormData.package;
        }
        if (scheduleFormData.otherDescription) {
            docData.otherDescription = scheduleFormData.otherDescription;
        }
        if (scheduleFormData.additionalDropdown) {
            docData.additionalDropdown = scheduleFormData.additionalDropdown;
        }

        // Add the document to the "mentor-submissions" collection
        const docRef = await db.collection('mentor-submissions').add(docData);
        console.log(`New contact added with ID: ${docRef.id}`);

        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Export the API
exports.api = functions.https.onRequest(app);
