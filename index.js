var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var WEBHOOK_SECRET = "62DZWMCCFFHTTQ44CG3WUQ94CTT7GAAN";

app.post('/telerivet/webhook', 
  bodyParser.urlencoded({ extended: true }),
  function(req, res) {
      
      var secret = req.body.secret;
      if (secret !== WEBHOOK_SECRET) {
          res.status(403).end();
          return;
      }
      
      if (req.body.event == 'incoming_message') {
      
        var content = req.body.content;
        var from_number = req.body.from_number;
        var phone_id = req.body.phone_id;
        
        // do something with the message, e.g. send an autoreply
        res.json({
          messages: [
            { content: "Thanks for your message!,Our Backend Is Still In Alpha Stage,Hang Tight" }
          ]
        });
        
      }  
      
      res.status(200).end();
  }
);

app.listen(process.env.PORT || 5000);
