const express = require('express');
const path = require('path');
const fs = require('fs');
const uniqueIDGenerator = require('generate-unique-id');


const app = express();
const PORT = process.env.port || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// send landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

// enter into the main notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

// send the information in the json file
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/db/db.json'));
    console.info("json file has been read")
});

// logic for saving note
app.post('/api/notes', (req, res) => {
    console.log("Initiating process to save new note");

    // deconstruct the request
    const { title, text } = req.body;

    if (title && text) {
        // creating a new ID each time this is called
        const createID = uniqueIDGenerator({
            length: 18
        });
        // take deconstructed request body and make it into an object
        const newEntry = {
            title,
            text,
            id: createID
        };
        // get the current data off of the db.json file
        fs.readFile("./db/db.json", "utf8", (err, data) => {
            if (err) {
                console.error(err);
            } else {
                // parse the data from db.json, and add the new note object to it
                const currentReviews = JSON.parse(data);
                currentReviews.push(newEntry);
                fs.writeFile("./db/db.json", JSON.stringify(currentReviews, null, 1), (error) => {
                    error ? console.error(error) : console.log("Note Saved Successfully!")
                });
            }
        });
        res.send(newEntry);
    } else {
        console.log("Error occurred while trying to save note. Please ensure note has a title and text");
        res.status(500)
    }

});

// --------- Attempt to start the DELETE functionality - not finished -----------
// app.delete('api/notes/:id', (req, res) => {
//     const requestedID = req.params.id;
//     fs.readFile("./db/db.json", "utf8", (err, data) => {
//         if (err) {
//             console.error(err);
//         } else {
//             const currentReviews = JSON.parse(data);
//             const reviewsToWrite = [];
//             for (let i = 0; i < currentReviews.length; i++) {
//                 if (requestedID !== currentReviews[i].id) {
//                     reviewsToWrite.push(currentReviews[i])
//                 };
//             };
//             fs.writeFile("./db/db.json", JSON.stringify(reviewsToWrite, null, 1), (error) => {
//                 error ? console.error(error) : console.log("Note Deleted Successfully!")
//             });
//         };
//     });
// })

// Wildcard route to handle all other requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT}`)
});