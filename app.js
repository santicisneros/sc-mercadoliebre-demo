const express = require("express");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("El servidor de prendio en el puerto:3000");
});

app.use(express.static(path.join(__dirname, "public")));

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, "views/home.html"))
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, "views/register.html"))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "views/login.html"))
});