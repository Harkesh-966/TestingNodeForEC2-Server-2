const express = require('express');
const app = express();
const port = 4000;

app.get('/health', (req, res) => {
    console.log('Health check endpoint hit Server 2');
    res.send('Health check passed!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});