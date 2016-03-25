var http = require('http');
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


//setting path and opeiton s 
var options = {
	       
    hostname: 'api.openweathermap.org', 
    path:  urlPath,
    //    method: 'GET'
	       
};
 
var req = http.request(options, function(res) {

	var responseBody = "";

	res.on('data', function(chunk){

		responseBody += chunk;


	    });
	res.on('end', function() {

		console.log(responseBody);

	    });


    }).end();
