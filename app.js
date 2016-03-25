var https = require('https');
var twilio = require('twilio');
var express = require('express');
var bodyParser = require('body-parser');


//location information for accumuilating weather data
var countryCode = 'us';
var zipCode = 'zip=18976';

//api key to access weather data
var WEATHERAPPID = 'appid=2a2c8eb40b6adba813e3d7f575cdff50';

//specifiy the url path that the program makes a request to 
var urlPath = '/data/2.5/weather?' + zipCode + ',' + countryCode + '&' + WEATHERAPPID;


//make request now

var options = {
	       
	       hostname: 'http://api.openweathermap.org/',
	       port: 3000
	       path:  urlPath
	       method: 'GET'
	       
};
 
var req = https.request(options, function(res) {

	var responseBode = "";
	console.log("Started");
	console.log("Response Headers: %j", res.headers);

	res.setEncoding('UTF-8');

	res.once('data', function(chunk){
		console.log(chunk);
	   
	    });


	res.on('data', function(chunk){
		
		console.log(`--chunck--`);



	    });


 });
