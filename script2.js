/*
-----------------------------------------------------
-----------------------------------------------------
Callout for geolocation data
-----------------------------------------------------
-----------------------------------------------------
 */

window.onload = function() {
    getLocation()
}

//declared variables to hold the latitude, longitude, accuracy and timestamp values
//create an additional datetime variable for a user readable date time
var latitude;
var longitude;
var accuracy;
var timestamp;
var datetime;
//create variable for where the output will be displayed - in any element with the id "test"
var x = document.getElementById("test2")
var y = document.getElementById("test")


//get geolocation data if the browser supports it
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getData);
        navigator.geolocation.getCurrentPosition(showPosition);

    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

//save the geolocation data into variables
function getData(position) {
    //set values of variables to be those from the geolocation object
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    accuracy = position.coords.accuracy;
    timestamp = position.timestamp;
    //set datetime to be a Date type for the value of timestamp
    datetime = new Date(timestamp);

}

//display geolocation data
function showPosition() {
    x.innerHTML =
        //JB code to test
        "Latitude: " + latitude +
        "<br>Longitude: " + longitude +
        "<br>Location Accuracy: " + accuracy + "m" +
        "<br>Timestamp: " + datetime.toUTCString();    //convert the original unix timestamp to a user readable date time value
}







/*
-----------------------------------------------------
-----------------------------------------------------
Callout to What3Words API
-----------------------------------------------------
-----------------------------------------------------
 */

// declare a new request variable
var request = new XMLHttpRequest();

//Connect to the URL of the api using the URL provided on page https://developer.what3words.com/public-api/docs#overview
//Include API key
//use the GET method as suggested
request.open('GET','https://api.what3words.com/v3/convert-to-3wa?coordinates=51.521251%2C-0.203586&key=U4YS2DD5',true);

request.onload = function() {
    //when the request loads, get the data
    //the returned data from the What3Words API is in JSON
    //create a gelocationData variable to hold the data
    // the JSON.parse function converts the data to an array of JS objects
    var geolocationData = JSON.parse(this.response);

    //display the data
    //return the relevant value of words from the array and print it in the element with the id of "test" in the JS_test page
    //document.getElementById("test").innerHTML = geolocationData.words;
    y.innerHTML = geolocationData.words;
};

// Send request
request.send();

