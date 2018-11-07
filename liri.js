require("dotenv").config();

var input = process.argv;

var command = input[2];
var request = require('request');








if( command == "concert-this"){
var artist = input[3]
request("https://rest.bandsintown.com/artists/" + artist + "?app_id=b203e0ec7567a4a974313b1ec204e996", function(error, response, body) {

  if (!error && response.statusCode === 200) {
    
    var jsonData = JSON.parse(body);
    console.log("Response: " + jsonData.object)
  }


   //curl -X GET "https://rest.bandsintown.com/artists/maluma?app_id=b203e0ec7567a4a974313b1ec204e996" -H "accept: application/json"
  // "https://rest.bandsintown.com/artists/maluma?app_id=b203e0ec7567a4a974313b1ec204e996"
   //.then(function(response) {

    // Printing the entire object to console
    //console.log(response);
//})
})
//searchBandsInTown();
};

//}
//search band api https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp
//display name of venue, location, and date

if( command == "spotify-this-song"){
  var artist = input[3]
    var song = input[3]
    var Spotify = require('node-spotify-api')

    var spotify = new Spotify({
        id: "f5de577102ff454d86b6b360bcd4fd3b",
        secret: "219403ad75b2436cbc69c98c910f8558"
      });

    spotify.search({ type: 'track', query: song, limit: 1 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       console.log("Artist: " + data.artist);
       console.log("*************");
      console.log(data); 
      
      console.log(JSON.stringify(data, null, 2));
      console.log("******");
      console.log(data.tracks.items[0]);

      //////////
      var songs = data.tracks.items;
      for(var i=0; i = songs.length; i++){
        console.log("************");
        console.log(i);
        console.log('artist: ' + songs[i].artist.map);
        console.log('Song name: ' + songs[i].name);
        console.log('Preview song: ' + songs[i].preview_url);
        console.log('Album: ' + songs[i].album.name);
      }
      });

}

if( command == "spotify-this-song"){
  var song = input[3];
  var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "f5de577102ff454d86b6b360bcd4fd3b",
  secret: "219403ad75b2436cbc69c98c910f8558"
});
 
spotify
  .search({ type: 'track', query: song, limit: 1})
  .then(function(response) {
    console.log(response);
    console.log(JSON.stringify(response, null, 2));
  })
  .catch(function(err) {
    console.log(err);
  });
};
//show artist info 
//song name
//link to song
//album
//default to the sign by ace of base



if( command == "movie-this"){
    var movieName = input[3];
    var request = require("request");

// Then run a request to the OMDB API with the movie specified
request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=fafb5a6e", function(error, response, body) {

    
  if (!error && response.statusCode === 200) {
var jsonData = JSON.parse(body);
    console.log("Title: " + jsonData.Title);
    console.log("Year: " + jsonData.Year);
    console.log("Rated: " + jsonData.Rated);
    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
    console.log("Country: " + jsonData.Country);
    console.log("Language: " + jsonData.Language);
    console.log("Plot: " + jsonData.Plot);
    console.log("Actors: " + jsonData.Actors);
    
    
  }
  else if (input[3] = undefined){
    request("http://www.omdbapi.com/?t=mr.+nobody&y=&plot=short&apikey=fafb5a6e", function(error, response, body) {

      var jsonData = JSON.parse(body);
      console.log("Title: " + jsonData.Title);
      console.log("Year: " + jsonData.Year);
      console.log("Rated: " + jsonData.Rated);
      console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
      console.log("Country: " + jsonData.Country);
      console.log("Language: " + jsonData.Language);
      console.log("Plot: " + jsonData.Plot);
      console.log("Actors: " + jsonData.Actors);

 
  }
)};


  


})
};
// * Title of the movie.
// Year the movie came out.
// IMDB Rating of the movie.
// Rotten Tomatoes Rating of the movie.
// Country where the movie was produced.
// Language of the movie.
// Plot of the movie.
// Actors in the movie.

//default Mr. Nobody
//api key
//omdb api


if( command == "do-what-it-says"){
    fs.readFile('random.txt', 'utf8', function (err, data){
      if (err) throw err;
      console.log(data);
    })

}
//fs node package
//read random.txt
//run spotify-this-song for i want it that way