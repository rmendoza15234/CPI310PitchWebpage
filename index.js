const express = require("express"); //pulls the express library in
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

const app = express(); //app stores an express object and allows us to build our web app through it
const port = 8080;

/* uncomment when ready to use the database
const dbPromise = sqlite.open(
    {
        filename: "./database/database.db", //database.db is just a placeholder name
        driver: sqlite3.Database
    }
);
*/

//Method 3 -- 1 line of code!
app.use(express.urlencoded()); //set up for parsing post requests

app.use(express.static(__dirname + "/public/")); //telling express ... everything static is in the public dir (static files are in the directory "public")

app.get('/', (req, res) => { //req goes first (request, response) "middleware", takes a request and response as parameters
    res.sendFile(__dirname + "/index.html");

})

app.listen(port, () => {
    console.log("Server listening on ", port);
})