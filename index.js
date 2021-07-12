const express = require('express');
const fetch = require('node-fetch');
const app = express();
 const corsapp = require('cors');

app.use(corsapp());
 app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/sport', async (req, res) =>{
    
    const fetch_aux = await fetch("https://api-football-beta.p.rapidapi.com/players/topscorers?season=2019&league=39", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "e5c2efb8eamsha37e0ffb5eb6ac4p1c09a9jsn7e84fa7ab6eb",
            "x-rapidapi-host": "api-football-beta.p.rapidapi.com"
        }
    })
    let fetch_res =await fetch_aux.json();
    res.send(fetch_res);
})

 
app.listen(3000)