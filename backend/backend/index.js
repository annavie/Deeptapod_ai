const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');


app.use(express.static(path.join(__dirname, 'views')));
app.use(require('./routes/route'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get('*', (req, res) => {
    res.send('Hello World!');
});