// declare a new request variable
var request = new XMLHttpRequest()

//Connect to the URL of the api using the URL provided on page https://developer.what3words.com/public-api/docs#overview
//Include API key
//use the GET method as suggested
request.open('GET','https://api.what3words.com/v3/convert-to-3wa?coordinates=51.521251%2C-0.203586&key=U4YS2DD5',true)



request.onload = function() {
    //when the request loads, get the data
    //the returned data from the What3Words API is in JSON

}

// Send request
request.send()