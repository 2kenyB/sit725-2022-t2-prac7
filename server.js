var express = require("express")
var app = express()
var cors = require('cors')
const { MongoUnexpectedServerResponseError } = require("mongodb");
const { response } = require("express");

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


//adding of two numbers
const addNumbers = (num1, num2) => {
    var number1 = parseInt(num1);
    var number2 = parseInt(num2);

    var result = number2 + number1;
    return result;
}
app.get('/adding numbers 1 and 2',
 function(request, response) {
    
    var n1 = parseInt(request.params.n1);
    var n2 = parseInt(request.params.n2);
    var result = addNumbers(n1, n2);
    response.json({statusCode: 200, data: result});
})



var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App listeninf to the port "+port)
   
})
