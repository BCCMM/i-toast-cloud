const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.listen(8080, () => {
    console.log(`Server Listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('TODO: add UI');
});