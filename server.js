const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

let toaster = new (require('./toaster'))()

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server Listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('TODO: add UI');
});

app.get('/reset', (req, res) => {
    toaster.reset();
    res.sendStatus(200);
});

app.post('/flush-toast', (req, res) => {
    try {
        toaster.flush();
        res.sendStatus(200);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
});

app.get('/status', (req, res) => {
    res.sendStatus(200);
});

app.get('/get-toast', (req, res) => {
    res.send({ flushToast: toaster.isFlushed() });
});