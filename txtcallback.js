const fs = require("fs");

//function callback (err,data){
//console.log(data);
//}

fs.readFile("text.txt","utf-8",  //function callback 
(err,data) => {
    console.log(data);
})
