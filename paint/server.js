const WebSocket = require('ws');
const express = require('express');
const http = require('http');
const app = express();
const port = process.env.PORT || 3000;
const canvasSettings = {
    background: undefined,
    lines: [],
};

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
    ws.on("message", lineObj => {
        let line = JSON.parse(lineObj);
        if(line.clear === true){
            canvasSettings.lines.length = 0;
        }else{
            canvasSettings.lines.push(line);
        }
        wss.clients.forEach(client => {
            if(client.readyState === WebSocket.OPEN){
                client.send(JSON.stringify(canvasSettings));
            }
        })
    })

    ws.send(JSON.stringify(canvasSettings));
})

server.listen(port, () => {
    console.log(`App running on port ${port}.`);
});

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send("Hello world");
})