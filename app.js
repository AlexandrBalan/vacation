// import the express module
import express from 'express';

// create an instance of an express application
const app = express();

// define a port number for our server to listen on
const PORT = 3005;

// enable static file serving
app.use(express.static('public'));

// defining a default route ("/")
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// defining a second route ("/home") that shows the same page
app.get('/home', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// show a message when a page is not found
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// start the server on the designated port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});