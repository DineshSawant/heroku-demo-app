const express = require('express');
const http = require('http');
const path = require('path');

// const api = require('./server/routes/api');

const app = express();

// serve static files from template
app.use(express.static(path.join(__dirname, 'dist/heroku-demo-app')));

app.get('/api/users', (req, res) => {
    res.send({
        name: "Getting users..."
    });
});

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist/heroku-demo-app/index.html'));
// });

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('App running on 3000'));