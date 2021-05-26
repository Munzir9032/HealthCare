const express = require('express');
const bodyparser = require('body-parser');
const request = require('request');
const https = require('https');

const app = express()



app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html')
});

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/signup.html')
});

app.get('/activecases', (req, res) => {
    request('https://api.covid19api.com/summary', function(error, response, body) {
        for (let i = 0; i < 190; i++) {
            console.log(JSON.parse(body).Countries[i].Country);
        }
    })

})


app.listen(3000, function() {
    console.log('server is running at 3000 port');
})