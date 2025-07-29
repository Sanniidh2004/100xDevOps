function logResponseBody(jsonBody){
    console.log(jsonBody);
}

function callbackFn(result){
    result.json().then(logResponseBody)
}

var sendObject = {
    method : "GET"
};

fetch("http://localhost:7001/handleSum?counter=1000", sendObject).then(callbackFn)       //concept of "promises"