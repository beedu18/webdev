const https = require("https");
const express = require("express");
const app = express();
const port = 5000;

app.get("/", function(req, res) {
    
    var url = "https://sv443.net/jokeapi/v2/joke/Any";
    var dataChunks = [];
    var dataReceived;
    
    https.get(url, function(response) {
        console.log(response.statusCode);
        
        //chunks have to be concatenated as 'data' evt can be fired multiple times
        response.on("data", function(d) {
            dataChunks.push(d);  
        
        //concat the chunks after 'end' evt is fired
        }).on("end", function() {
            dataReceived = JSON.parse(Buffer.concat(dataChunks));
            
            // console.log(received);
            res.write("<h1>"+dataReceived.category+"</h1>");

            //logic and formatting
            var joke, setup, delivery;
            const regex = /\n/gi;
            if(dataReceived.type==="single") {
                joke = dataReceived.joke.replace(regex, "<br>");
                res.write("<p>"+joke+"</p>");
                console.log(dataReceived.joke);
            }
            else {
                setup = dataReceived.setup.replace(regex, "<br>");
                delivery = dataReceived.delivery.replace(regex, "<br>");
                res.write("<p>" + setup + "</p><p>" + delivery + "</p>");
                console.log(dataReceived.setup+"\n"+dataReceived.delivery);
            }
            res.send();
        }); 
    });
});

app.listen(port, function() {
    console.log("Server Running on port: "+port);
});