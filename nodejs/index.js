let express = require('express');
let app = express();


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.get('/login', (req, res)=>{
    console.log(req.body);
})

app.listen(3000, 'localhost', ()=>{
    console.log('logging')
})