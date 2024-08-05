/*
    CRISLEB2042 20240805

In this exercise I learned:
1. How to set up a basic Express.js server
2. Using middleware to serve static files
3. Handling asynchronous GET requests with Express
4. Making external API calls using axios
5. Rendering dynamic content using EJS templates
6. Basic error handling in Express routes
7. Starting an Express server and listening on a specific port

*/


// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";

// 2. Create an express app and set the port number.
const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

// 3. Use the public folder for static files.
app.use(express.static ("public"));


app.get("/", async (req, res) => {
    try {
        
        // 5. Use axios to get a random secret and pass it to index.ejs to display the
        // secret and the username of the secret.
        const result = await axios.get(API_URL + "/random");
        
        // 4. When the user goes to the home page it should render the index.ejs file.
        res.render("index.ejs", { secret: result.data.secret, user: result.data.username});
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
});

// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });