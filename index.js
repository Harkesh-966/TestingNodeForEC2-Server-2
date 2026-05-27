const express = require('express');
const app = express();
const port = 4000;

app.get('/product', (req, res) => {
    res.send('Welcome to the Product Service!');
});

// Agar aap '/product/details' type karte hain, to uske liye:
app.get('/product/details', (req, res) => {
    res.json({ item: 'Laptop', price: 50000 });
});

// Health check ke liye route (Taki ALB isko Healthy mark kare)
app.get('/product/health', (req, res) => {
    res.status(200).send('Product Service is Healthy');
});


app.get('/health', (req, res) => {
    res.send('Health check endpoint hit Server 2');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});