// import the express module
import express from 'express';

// create an instance of an express application
const app = express();

// define a port number for our server to listen on
const PORT = 3005;

// enable static file serving
app.use(express.static('public'));

// read form data sent from the form
app.use(express.urlencoded({ extended: true }));

// defining a default route ("/")
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// defining a second route ("/home") that shows the same page
app.get('/home', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// handle the form submission
app.post('/submit', (req, res) => {
    res.redirect('/thank-you');
});

// show the thank you page
app.get('/thank-you', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/thank-you.html`);
});

// show a message when a page is not found
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// start the server on the designated port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});