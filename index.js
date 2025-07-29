const express = require('express')    //express.js
var bodyParser = require('body-parser')       //body
const app = express()
const port = 7001        //port number
//let numberOfRequests = 0;

//function middleware1 (req, res, next){         //concept of middleware
    //numberOfRequests = numberOfRequests + 1;     //no need to write under all functions rather globally under middleware and is used to record the number of times a request is sent
    //console.log(numberOfRequests);
    //console.log("from inside middleware " + req.headers.counter);
    //res.send("Error from inside middleware");    //when we are not using next();
    //next();
//}

//app.use(middleware1);
app.use(bodyParser.json())                //basically introduces a new middleware

function calculateSum (counter){
    var sum = 0;
    for (var i = 0 ; i <= counter ; i++){
    sum = sum + i;
}
return sum;
}

//function calculateMul (counter){
    //var mul = 1;
    //for (var i = 1 ; i <= counter ; i++){
    //mul = mul * i;
//}
//return mul;
//}

function handleFirstRequest (req,res){    //req is request and res is response
    //console.log(req.body);                //to get req from body
    //console.log(req.headers);
    //var counter = req.body.counter;
    //var counter = req.headers.counter;    //to get req from header
    var counter = req.query.counter;     //to get req from query param   //can access more than one query parameters by using "&" in between
    var calculatedSum = calculateSum(counter);
    //var calculatedMul = calculateMul(counter);
    
    var answer = "the sum is " + calculatedSum;
    //var answerObject = {
        //sum : calculatedSum,
        //mul : calculatedMul
    //};
    //res.status(200).send(answerObject);
    res.send(answer);       //res.status(401).send(answer); shows statuscode
}

//function givePage(req, res){
    //res.sendFile(__dirname +"index.html")    //instead of writing code,extracting from html file
//}                                 //the response sent can be html,json or a simple text
//app.get('/',givePage)

app.get('/handleSum', handleFirstRequest)       //only GET works for url    //there are GET,POST,PUT,DELETE
//app.post('/handleSum', handleFirstRequest)       //the "/" is important      //POST works in postman

function started(){
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, started)       //started is a callback function to start the servers





