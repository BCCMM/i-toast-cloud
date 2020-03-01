const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server Listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('TODO: add UI');
});

app.post('/flush-toast', (req, res) => {
    res.sendStatus(200);
});

app.get('/status', (req, res) => {
    res.sendStatus(200);
});

app.get('/get-toast', (req, res) => {
    res.send({ flushToast: false });
});