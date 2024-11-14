/**
 * Required External Modules
 */
const path = require("path");
const express = require("express");
// const express = require("https");
const cors = require("express");
const fileUpload = require("express-fileupload");
const bodyParser = require('body-parser');

/**
 * App Variables - FIREBASE
 */
var admin = require("firebase-admin");

var serviceAccount = require("./functions/key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://tmg-landing-site-default-rtdb.firebaseio.com"
});

const db = admin.firestore();

/**
 * App Variables - LOCAL BUILD
 */
const app = express();
const port = process.env.PORT || "4000";
/**
 * App Variables - FIREBASE
 */

/**
 *  App Configuration
 */
app.use(express.static('public'));
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use(express.json())
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

/**
 * Routes Definitions
 */
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.get('/mentoring', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'mentoring.html'));
});

/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});