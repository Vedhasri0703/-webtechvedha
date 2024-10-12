var exp = require("express");
var app = exp();


app.get('/',function(req, res){
    res.send("Welcome to express js Demo");
})

app.get('/msg',function(req, res){
    res.send("Express JS Rounting");
})

app.get('/html',function(req, res){
    res.sendFile(__dirname+ "/pattern1.html");
})

app.get('/sample/:id',function(req,res){
    res.send("The ID value is "+req.params.id);
})

app.get('/download', function(req,res){
    res.download(__dirname+"/ex2.html");
})

app.get('/dwd/:id', function(req, res){
    res.download(__dirname+"/"+ res.params.id)
})

app.listen(3000, function(){
    console.log("Server is waiting at port number: 3000");
})