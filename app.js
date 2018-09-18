const express = require('express');
const http = require('http');
const path = require('path');

// const api = require('./server/routes/api');

const app = express();

app.use(express.static(path.join(__dirname, 'dist/heroku-demo-app')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/heroku-demo-app/index.html'));
});

app.get('/api/users', (req, res) => {
    console.log('/users calling...');
    res.send({name: 'Abc'});
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('App running on 3000'));