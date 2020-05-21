var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ingredients = [
    {
        "id" : "234fjj",
        "text" : "Eggs"
    },
    {
        "id" : "327fjg",
        "text" : "Milk"
    },
    {
        "id" : "996yhu",
        "text" : "Cheese"
    },
    {
        "id" : "449klo",
        "text" : "Pancakes"
    }
];

app.get('/', function(request, response){
        
        response.send(ingredients);
        }
    );

app.get('/funions', function(request,response){
    response.send('yo give me some funions!');
});

app.post('/', function(request, response){
   
    var ingredient = request.body;
    if (!ingredient || ingredient === "") {
        response.status(500).send({error: "Your ingredient must not be empty"});
    } else {
        ingredients.push(ingredient);
        response.status(200).send (ingredients);
    }
});

app.put('')


app.listen(3000, function() {
    console.log('This API is running on port 3000');
});