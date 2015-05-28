var express = require('express');
var request = require("request");
var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.get('/', function(request, response) {
  response.send('Hello Cruel World!');
});
var bodyParser = require('body-parser');
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
	  }
    	request("http://boilerpipe-web.appspot.com/extract?url=http://"+content"&extractor=LargestContentExtractor&output=htmlFragment&extractImages=", function(error, response, data) {
        // do something with the message, e.g. send an autoreply
        res.json({
			 messages: [
            { content:" " + data}
          ]
		});
       res.status(200).end();
		 });
  }
	);  
	  app.listen(app.get('port'), function() {
     console.log('Node app is running on port', app.get('port'));
     });
 
