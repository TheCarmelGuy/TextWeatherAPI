var http = require('http');
var twilio = require('twilio');
var express = require('express');

//var cronJob = require('cron').CronJob;
//var client = twilio('ACee50e57ae84aba70052bf1e47b4b32d7','0351e3497ba5260b53a2fc486d6d8b3c');


//api key to access weather data
var WEATHERAPPID = '2a2c8eb40b6adba813e3d7f575cdff50';

//specifiy the url path that the program makes a request to 
//var urlPath = '/data/2.5/weather?' + zipCode + ',' + countryCode + '&' + WEATHERAPPID;
var url = 'http://api.openweathermap.org/data/2.5/weather/?';

//setting path and opeiton s 

var request = require('request');

var qs = {

    id:'5180225',
    appid:WEATHERAPPID,
    units:'imperial'


};
request({url:url , qs: qs} , function(err, res, body)  {
    
    console.log(res.headers);//log the heades
    var info = JSON.parse(body);//data information on the weather at a particular location 
    console.log(info);
    var weather = info.main;

   var bodyOfMessage = `Good Morning Komel! The temperature today is ${weather.temp}. The high today is ${weather.temp_max} and the low today is ${weather.temp_min}. Enjoy your day today!`;
    console.log(bodyOfMessage);
    
});
    
