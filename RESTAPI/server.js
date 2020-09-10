const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const{ROUTE_CONSTANTS}= require ('./helpers/route_constants');
const countryListURL = 'https://restcountries.eu/rest/v2/all';
const asyncRequest = require('async-request');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// get syntax- route , callback function
app.get(ROUTE_CONSTANTS.DEFAULT,function(req,res){
  res.send("<h1>Welcome to Pega</h1>");
});
app.get(ROUTE_CONSTANTS.GET_LOGIN,function(req,res){
    //res.send("<h1>Welcome to Login Page</h1>");
    res.sendFile(__dirname+"/pages/login.html");
});
app.post(ROUTE_CONSTANTS.POST_LOGIN,function(req,res){
  console.log(req.body);
  res.send("Sucessfully registered");

})


app.get(ROUTE_CONSTANTS.GET_REGISTER,function(req,res){
    res.sendFile(__dirname+"/pages/register.html");
});
app.post(ROUTE_CONSTANTS.POST_REGISTER,function(req,res){
  console.log(req.body);
  res.send("Sucessfully registered");

})
app.get(ROUTE_CONSTANTS.GET_PRODUCTS,function(req,res){
   // res.send("<h1>Welcome to Products Page</h1>");
   const productsData=[
    {
      "_id": "5f5862534425ac6914628806",
      "index": 0,
      "guid": "14cafa90-3b73-4e4c-9f21-a7f42e1eb134",
      "isActive": true,
      "balance": "$2,094.85",
      "picture": "http://placehold.it/32x32",
      "age": 40,
      "eyeColor": "green",
      "name": "Stephanie Hodges",
      "gender": "female",
      "company": "OTHERSIDE",
      "email": "stephaniehodges@otherside.com",
      "phone": "+1 (820) 588-3545",
      "address": "370 Noel Avenue, Turpin, Northern Mariana Islands, 4843",
      "about": "Et sint dolore ut reprehenderit. Occaecat in ullamco est veniam magna nostrud. Laboris do ex nisi proident quis sit enim. Labore sit labore non reprehenderit ex aute sint cillum do officia aliquip adipisicing.\r\n",
      "registered": "2017-05-08T06:11:23 -06:-30",
      "latitude": -67.55065,
      "longitude": -71.062411,
      "tags": [
        "est",
        "adipisicing",
        "qui",
        "occaecat",
        "et",
        "ipsum",
        "laboris"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Gray Higgins"
        },
        {
          "id": 1,
          "name": "Angel Mcdowell"
        },
        {
          "id": 2,
          "name": "Roseann Murphy"
        }
      ],
      "greeting": "Hello, Stephanie Hodges! You have 1 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5f5862536178cd4e9b9143f9",
      "index": 1,
      "guid": "2aa458de-cdb2-4c15-a4f2-9889aa78d31c",
      "isActive": true,
      "balance": "$3,179.10",
      "picture": "http://placehold.it/32x32",
      "age": 29,
      "eyeColor": "green",
      "name": "Bowers Hendricks",
      "gender": "male",
      "company": "LEXICONDO",
      "email": "bowershendricks@lexicondo.com",
      "phone": "+1 (860) 415-2723",
      "address": "514 Evans Street, Noblestown, Tennessee, 3263",
      "about": "Et commodo aliqua excepteur velit amet. In dolore elit velit est adipisicing tempor. Incididunt minim consequat culpa mollit velit sunt fugiat elit anim elit ullamco in ipsum. Lorem eiusmod ullamco mollit excepteur pariatur labore est duis nostrud adipisicing eu. Ut officia et laborum ex incididunt fugiat. Eu laborum cupidatat fugiat laborum laborum ea excepteur Lorem commodo.\r\n",
      "registered": "2020-04-06T07:20:35 -06:-30",
      "latitude": 15.511329,
      "longitude": 171.063631,
      "tags": [
        "magna",
        "cillum",
        "magna",
        "non",
        "cillum",
        "sunt",
        "cupidatat"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Green Hudson"
        },
        {
          "id": 1,
          "name": "Elvia Griffith"
        },
        {
          "id": 2,
          "name": "Melendez England"
        }
      ],
      "greeting": "Hello, Bowers Hendricks! You have 1 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5f58625380708546b9fe45d4",
      "index": 2,
      "guid": "61cb6894-9833-42d2-988c-277aa066c7eb",
      "isActive": false,
      "balance": "$3,244.17",
      "picture": "http://placehold.it/32x32",
      "age": 27,
      "eyeColor": "blue",
      "name": "Sheena Noel",
      "gender": "female",
      "company": "ANARCO",
      "email": "sheenanoel@anarco.com",
      "phone": "+1 (872) 589-3350",
      "address": "383 Berry Street, Fowlerville, Puerto Rico, 1933",
      "about": "Irure occaecat ea dolor occaecat in deserunt veniam laboris consectetur cupidatat nulla veniam Lorem esse. Laborum duis consequat ullamco deserunt sunt laborum labore Lorem occaecat dolore consectetur Lorem aliqua. Irure veniam do non minim laborum fugiat reprehenderit. Consequat id culpa id duis commodo culpa. Ea aliquip pariatur incididunt non exercitation sit mollit incididunt.\r\n",
      "registered": "2017-06-08T11:56:15 -06:-30",
      "latitude": 40.942563,
      "longitude": 2.318789,
      "tags": [
        "ex",
        "est",
        "exercitation",
        "laboris",
        "et",
        "anim",
        "deserunt"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Hilary Lawson"
        },
        {
          "id": 1,
          "name": "Cleveland Faulkner"
        },
        {
          "id": 2,
          "name": "Keith Camacho"
        }
      ],
      "greeting": "Hello, Sheena Noel! You have 3 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5f586253a3319f249ff3df18",
      "index": 3,
      "guid": "1c66e4dc-a570-401b-8e33-54a4f50630cc",
      "isActive": true,
      "balance": "$2,108.72",
      "picture": "http://placehold.it/32x32",
      "age": 25,
      "eyeColor": "brown",
      "name": "Letha Whitney",
      "gender": "female",
      "company": "OHMNET",
      "email": "lethawhitney@ohmnet.com",
      "phone": "+1 (899) 512-3121",
      "address": "962 Pineapple Street, Yonah, North Carolina, 4600",
      "about": "Ea enim eu aliquip deserunt exercitation officia sunt adipisicing et enim. Et anim enim pariatur nisi sint. Voluptate tempor enim minim enim incididunt. Esse Lorem ipsum labore ex in ipsum amet enim cillum et irure. Eu dolore excepteur quis cupidatat pariatur cillum voluptate velit culpa sit sint. Consectetur consequat commodo ut consectetur deserunt laboris adipisicing nostrud aliqua est anim ullamco Lorem deserunt. Id irure do excepteur exercitation qui.\r\n",
      "registered": "2018-05-10T09:55:11 -06:-30",
      "latitude": -4.734527,
      "longitude": -144.812991,
      "tags": [
        "ullamco",
        "deserunt",
        "ullamco",
        "ut",
        "ea",
        "excepteur",
        "culpa"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Hinton Nunez"
        },
        {
          "id": 1,
          "name": "Ursula Carson"
        },
        {
          "id": 2,
          "name": "Kirkland Bauer"
        }
      ],
      "greeting": "Hello, Letha Whitney! You have 3 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5f586253eb95b5fcd4bf256b",
      "index": 4,
      "guid": "b4555c80-3e57-4344-9e8f-e5191bcbd93e",
      "isActive": false,
      "balance": "$1,337.03",
      "picture": "http://placehold.it/32x32",
      "age": 27,
      "eyeColor": "blue",
      "name": "Wood Hull",
      "gender": "male",
      "company": "QUILK",
      "email": "woodhull@quilk.com",
      "phone": "+1 (981) 449-3964",
      "address": "123 Kenmore Terrace, Golconda, Oregon, 3023",
      "about": "Cillum commodo incididunt exercitation irure consectetur laborum proident do nisi labore veniam commodo. Ad quis quis dolore laboris tempor consequat. Aliqua ad ipsum irure incididunt officia. Eiusmod Lorem veniam voluptate incididunt nulla velit commodo reprehenderit commodo nostrud laboris occaecat laborum. Irure pariatur proident enim sunt non do enim ipsum elit mollit.\r\n",
      "registered": "2019-07-28T11:38:28 -06:-30",
      "latitude": -87.517403,
      "longitude": -9.279341,
      "tags": [
        "ea",
        "et",
        "consequat",
        "voluptate",
        "est",
        "aliqua",
        "quis"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Linda Holder"
        },
        {
          "id": 1,
          "name": "Alexandria Lowe"
        },
        {
          "id": 2,
          "name": "Barker Waller"
        }
      ],
      "greeting": "Hello, Wood Hull! You have 1 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5f5862539ba679c19f123eeb",
      "index": 5,
      "guid": "2d8d69a6-bbe6-44d1-8004-c1d6a5d96ec4",
      "isActive": false,
      "balance": "$1,977.44",
      "picture": "http://placehold.it/32x32",
      "age": 26,
      "eyeColor": "green",
      "name": "Kidd Kemp",
      "gender": "male",
      "company": "CAXT",
      "email": "kiddkemp@caxt.com",
      "phone": "+1 (987) 420-2615",
      "address": "586 Thatford Avenue, Kenwood, Alabama, 8112",
      "about": "Laborum aliqua aute velit sunt consectetur fugiat consectetur culpa dolore culpa ipsum aliqua dolor. Velit laboris minim sunt reprehenderit reprehenderit minim tempor Lorem id voluptate dolor. Minim quis mollit veniam irure dolore nostrud esse. Nulla velit minim elit officia nulla et. Id ut occaecat velit aliqua est aliqua elit velit sit cillum Lorem do sunt. Laboris mollit culpa magna elit proident excepteur consectetur sunt esse nulla eiusmod dolore.\r\n",
      "registered": "2019-09-01T10:53:16 -06:-30",
      "latitude": -17.551626,
      "longitude": -101.864612,
      "tags": [
        "veniam",
        "eiusmod",
        "excepteur",
        "culpa",
        "do",
        "id",
        "laboris"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Wynn Santos"
        },
        {
          "id": 1,
          "name": "Frieda Sharpe"
        },
        {
          "id": 2,
          "name": "Garrett Combs"
        }
      ],
      "greeting": "Hello, Kidd Kemp! You have 10 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5f586253ada811fe0b26472b",
      "index": 6,
      "guid": "b772ab4f-be6e-4ea7-be52-ab5fa8a131d6",
      "isActive": false,
      "balance": "$3,752.28",
      "picture": "http://placehold.it/32x32",
      "age": 22,
      "eyeColor": "blue",
      "name": "Buckner Crosby",
      "gender": "male",
      "company": "ZEPITOPE",
      "email": "bucknercrosby@zepitope.com",
      "phone": "+1 (998) 525-2491",
      "address": "374 Taylor Street, Kenmar, New Mexico, 3615",
      "about": "Reprehenderit occaecat ad magna et voluptate. Tempor duis occaecat sunt culpa consectetur reprehenderit excepteur duis. Amet sunt magna et duis officia eu.\r\n",
      "registered": "2017-06-16T08:06:14 -06:-30",
      "latitude": 37.590609,
      "longitude": -171.604292,
      "tags": [
        "irure",
        "magna",
        "fugiat",
        "ex",
        "reprehenderit",
        "non",
        "sunt"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Gertrude Elliott"
        },
        {
          "id": 1,
          "name": "Elise Cameron"
        },
        {
          "id": 2,
          "name": "Alisa Anthony"
        }
      ],
      "greeting": "Hello, Buckner Crosby! You have 2 unread messages.",
      "favoriteFruit": "banana"
    }
  ]
    
        
   
   res.json(productsData)
});

app.get(ROUTE_CONSTANTS.GET_COUNTRIES,async function(req,res){
  const response = await asyncRequest(countryListURL);
  res.json(response);
})
app.listen(3000);