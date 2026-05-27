const express = require('express');
const app = express();
const port = 4000;

app.get('/health', (req, res) => {
    res.send('Health check endpoint hit Server 2');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});