const express = require('express');
require('dotenv').config({
    path: `.env.local`,
    override: true
});
const bodyParser = require('body-parser');
const apiRouter = require('./apiRouter').router;

const port = process.env.PORT_SERVER || 3002
const cors = require("cors");
// instantiate server
const app = express()

// body Parser configuration
app.use(bodyParser.urlencoded({
    extended: true
}));
// middleware 
app.use(cors())
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>API REST for TODO LIST</h1>');
});
app.use('/api/', apiRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


module.exports = app