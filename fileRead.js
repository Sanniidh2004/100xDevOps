const fs =  require("fs");          //fs is a library that reads from the file a.txt

function fileRead(err, data){      //err stands for error, the function calls back error if it cannot find the data
    console.log(data)
}

fs.readFile("a.txt" , "utf-8", fileRead);