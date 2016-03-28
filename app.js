var request = require('request');
var twilio = require('twilio');
//var cronJob = require('cron').CronJob;

//set up twilio client 
var client = twilio('AuthID','SSID');


//api key to access weather data
var WEATHERAPPID = 'APPID';

//specifiy the url path that the program makes a request to 
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
	to:'[RECIEVING NO]',
	from:'[OUTGOING NUMBER]',
	body: bodyOfMessage
    }, null, true); 
});

    
