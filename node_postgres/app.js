const express = require("express");
const app = express("");
const port = 8080;

app.set('view engine', 'pug');

//route to the root
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`${port} 에서 실행중입니다.`);
});