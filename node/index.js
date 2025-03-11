const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/hello', (req, res) => {
    res.send('привіт світ');
});

app.get('/json', (req, res) => {
    res.json({ "message": "Це JSON-відповідь"});
});

app.get('/user/:id', (req, res) => {
    res.send(`Користувач з ID: ${req.params.id}`);
});

app.get('/search', (req, res) => {
    res.send(`Пошук за запитом: ${req.query.q}`);
});

app.listen(PORT, () => {
    console.log(`Сервер запущено ${PORT}`);
});