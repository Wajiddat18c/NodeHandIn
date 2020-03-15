const express = require("express");
const app = express();
const request = require('request');


app.use(express.json());

app.use(express.static('public'));
app.use(express.static('assets'));
app.use(express.static('public/corona_Tracker'));

app.get("/", (req, res) => {

    return res.sendFile(__dirname + "/public/index.html")

});

app.get("/commands", (req, res) => {

    return res.sendFile(__dirname + "/public/commands.html")

});

app.get("/basic", (req, res) => {

    return res.sendFile(__dirname + "/public/basic.html")

});

app.get("/restful", (req, res) => {

    return res.sendFile(__dirname + "/public/restful.html")

});

app.get("/myrest", (req, res) =>{

    return res.sendFile(__dirname + "/public/myrest.html")
})



//REST EXAMPLE
let shop = [
    {
        id: 1, item: "RedBull", price: 13
    },
    {
        id: 2, item: "CocaCola", price: 15
    },
    {
        id: 3, item: "Water", price: 8
    }
]

let currentId = 3;


//GET
app.get("/shop", (req, res) => {
    return res.send({ response: shop })
});
//GET by ID
app.get("/shop/:id", (req, res) => {
    const shopId = shop.find(shopId => shopId.id === Number(req.params.id));
    return res.send({ response: shopId });
});
//POST
app.post("/shop", (req, res) => {
    let newItem = req.body;
    newItem.id = ++currentId;
    shop.push(newItem);

    return res.sendStatus(200);
});

//PUT
app.put("/shop/:id", (req, res) => {
    const foundIndex = shop.findIndex(shopId => shopId.id === Number(req.params.id));
    delete req.body.id;

    const updateShop = { ...shop[foundIndex],...req.body };

    shop[foundIndex] = updateShop;
    return res.send({ response: shop});
    
});

//DELETE
app.delete("/shop/:id", (req, res) => {
    shop = shop.filter(shopId => shopId.id !== Number(req.params.id));
    return res.send({ response : shop})
});


//BONUS APP - CORONA VIRUS TRACKER!

app.get("/view", (req, res) =>{
    request('https://corona.lmao.ninja/countries', (error, response, body) => {
    console.error('error:', error); 
    console.log('statusCode:', response && response.statusCode); 
    console.log('body:', body); 

    
    return res.send(body);

    });
});


app.get("/corona", (req, res)=>{
    return res.sendFile(__dirname + "/public/corona_Tracker/tracker.html");
});


console.log(process.env.PORT)
//if else, if port is defind then run PORT else run porn 3000
const port = process.env.PORT ? process.env.PORT : 3000;

const server = app.listen(port, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("This server is running on port", server.address().port);
});


let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  }; // This is how you defind an object in Javascrpit
    // This is also called name:value pairs 