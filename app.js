var http = require('http');
var twilio = require('twilio');
var express = require('express');
var bodyParser = require('body-parser');
var cronJob = require(

var client = twilio('ACee50e57ae84aba70052bf1e47b4b32d7','0351e3497ba5260b53a2fc486d6d8b3c');

//location information for accumuilating weather data
var countryCode = 'us';
var zipCode = 'zip=18976';

//api key to access weather data
var WEATHERAPPID = 'appid=2a2c8eb40b6adba813e3d7f575cdff50';

//specifiy the url path that the program makes a request to 
var urlPath = '/data/2.5/weather?' + zipCode + ',' + countryCode + '&' + WEATHERAPPID;


//setting path and opeiton s 
var options = {
	       
    hostname: 'api.openweathermap.org', 
    path:  urlPath,
    method: 'GET'
	       
};


var req = http.request(options, function(res) {

    var responseBody = "";
    //sollect all the indormation as a json
    res.on('data', function(chunk){
	
	responseBody += chunk;
				
    });
    res.on('end', function() {
	
	//TODO implement BODY PARSER TO EXTRACT INFORMATION AND TWILIO API TO SEND NEW INFORMATION
    });
    
}).end();

