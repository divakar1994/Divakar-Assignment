var express= require("express");
var app= express();
var moment= require("moment");
var bodyParser= require("body-parser");
var morgan = require("morgan");

app.use("/", bodyParser.urlencoded({extended:false}) );
app.use("/static", express.static(__dirname+"/public"));
app.use(morgan('combined'));
// app.post("/submit", function(req, res){
//
//     console.log(req.body);
//     res.send("Thanks"+ req.body.firstname+", you lived for");
//
//
// })

app.post("/submit", function(req,res){
    console.log(req.body);
    var date= req.body.DOB;
    var time= Date.now();
    var time2= parseInt(moment.duration(time-Date.parse(date)).asDays());
    res.send("Thanks " + req.body.firstname + ", you lived on htis planet for "+time2+" days");
});


app.get("/", function(req, res) {
    res.render("template");
})

app.listen(3000);