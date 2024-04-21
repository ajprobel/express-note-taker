const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
});

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'))
});

app.post('/api/notes', (req, res) => {
    console.log("Initiating process to save new note");

    const { title, text } = req.body;

    if (title && text) {
        // take that shit and make a note
        const newEntry = {
            title,
            text
        };
        fs.readFile("./db/db.json", "utf8", (err, data) => {
            if (err) {
                console.error(err);
            } else {
                const currentReviews = JSON.parse(data);
                currentReviews.push(newEntry);
                fs.writeFile("./db/db.json", JSON.stringify(currentReviews, null, 1), (error) => {
                    error ? console.error(error) : console.log("Note Saved Successfully!")
                });
            }
        });
    } else {
        console.log("Error occurred while trying to save note. Please ensure note has a title and text");
        res.status(500)
    }

});


// Wildcard route to handle all other requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});


app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT}`)
});