let express = require('express');

let app = express();

app.use(express.json());

app.get('/test', function(req, res){
    console.log(req.body);
    res.send('Test GET endpoint success');
})

app.get('/home', (req, res) => {
    // this will send back a file in the current directory (__dirname), followed by the path to the file we want to send
    console.log(__dirname);
    res.sendFile(__dirname + '/static.html');
})

app.post('/test', function(req, res){
    console.log(req.body)
    res.send('Test POST endpoint success');
})

app.listen(8000, function(){
    console.log("The app is listening! :)")
})