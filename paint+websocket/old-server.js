const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const canvasSettings = {
    background: undefined,
    lines: [],
};

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());

app.get("/", (request, response) => {
    response.send("Hello world");
})

app.get("/read", (request, response) => {
    response.json(canvasSettings);
})

app.post('/add-line', (request, response) => {
    canvasSettings.lines.push(request.body);
    response.send("Success");
})

app.post('/add-background', (request, response) => {
    canvasSettings.background = request.body.back;
    response.send("Success");
})

app.get('/clear', (request, response) => {
    canvasSettings.background = undefined;
    canvasSettings.lines.length = 0;
    response.send("Success");
})