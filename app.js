var request = require('request');
var twilio = require('twilio');
//var cronJob = require('cron').CronJob;

//set up twilio client 
var client = twilio('ACee50e57ae84aba70052bf1e47b4b32d7','0351e3497ba5260b53a2fc486d6d8b3c');


//api key to access weather data
var WEATHERAPPID = '2a2c8eb40b6adba813e3d7f575cdff50';

//specifiy the url path that the program makes a request to 
//var urlPath = '/data/2.5/weather?' + zipCode + ',' + countryCode + '&' + WEATHERAPPID;
var url = 'http://api.openweathermap.org/data/2.5/weather/?';
 


//set querystring parameters 
var qs = {

    id:'5180225',
    appid:WEATHERAPPID,
    units:'imperial'


};
request({url:url , qs: qs} , function(err, res, body)  {
    
    var info = JSON.parse(body);//data information on the weather at a particular location 
    console.log(info);
    var weather = info.main;

   var bodyOfMessage = `Good Morning Alan! The temperature today is ${weather.temp}. The high today is ${weather.temp_max} and the low today is ${weather.temp_min}. Have a great day!`;
    console.log(bodyOfMessage);

    //send message to certain person
    client.sendMessage({
	to:'+14845152237',
	from:'+12672961860',
	body: bodyOfMessage
    }, null, true); 
});
    
