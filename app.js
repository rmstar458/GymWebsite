const express=require("express");
const path=require("path");
const mongoose = require('mongoose');
const { stringify } = require("querystring");

const bodyParser=require("body-parser");
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/gymdb');
}

var GymSchema = new mongoose.Schema({
    name: String,
    age: Number,
    contact: Number,
    weight: Number,
    height: Number,
    gender: String,
    facility: String,
    plan: String,
    trainer: String
  });

var Member = mongoose.model('Member', GymSchema);

const app=express();
const port=5500;
app.use("/static",express.static('static'));
app.use(express.urlencoded());
app.set('view engine','pug')
app.set('views',path.join(__dirname,"views"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',(req,res)=>{
    res.render('home.pug')
})
app.get('/enroll',(req,res)=>{
    res.render('Join.pug')
})
app.get('/about',(req,res)=>{
    res.render('about.pug');
})
app.post('/enroll', (req , res)=>{
    var mydata = new Member(req.body);
    mydata.save().then(()=>{
        res.render("payment.pug");
    }).catch(()=>{
        res.status(400).send("There was some problem ,Please submit again")
    });
})

app.listen(port,()=>{
    console.log("Running.....")
})