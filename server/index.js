const express = require('express');

const app = express();

const PORT = 7777;

app.use('/hello' ,(req, res) => {
    res.send('Hello from the express server')
})

app.use('/test', (req, res) => {
    res.send('Testing the express server');
})


app.listen(PORT, () => {
    console.log(`Server is up and running at port ${PORT}`);
})