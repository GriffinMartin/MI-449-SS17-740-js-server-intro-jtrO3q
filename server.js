// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    randomURL = Math.floor(Math.random() * 1000) + 1
    response.end(
      '<h1>Welcome!</h1>' +
      '<img src="https://media.giphy.com/media/dzaUX7CAG0Ihi/giphy-facebook_s.jpg" alt="bear-waving">' +
      '<a href="/cuteness">' + '<h2>Cute Animals</h2>' + '</a>' +
      '<a href="/random-joke">' + '<h2>Random Jokes</h2>' + '</a>' +
      '<a href="/broken-url-' + randomURL + '">' + '<h2>Error Page</h2>' + '</a>')
  } else if (request.url === '/random-joke') {
    randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1) {
      response.end(
        '<h1>Knock knock</h1>' +
        '<h2>Who’s there?</h2>' +
        '<h2>A broken pencil</h2>' +
        '<h2>A broken pencil who?</h2>' +
        '<h2>Never mind. It\'s pointless</h2>' +
        '<a href="/">' + '<h2>Return Home</h2>' + '</a>')
    } else if (randomNumber === 2) {
      response.end(
        '<h1>Knock knock</h1>' +
        '<h2>Who’s there?</h2>' +
        '<h2>Nana</h2>' +
        '<h2>Nana who?</h2>' +
        '<img src="https://s-media-cache-ak0.pinimg.com/736x/f5/e6/16/f5e616d05296b5403fcc4fed40be4fa4.jpg" alt="nana-meme">' +
        '<a href="/">' + '<h2>Return Home</h2>' + '</a>')
    } else {
      response.end(
        '<h1>Knock knock</h1>' +
        '<h2>Who’s there?</h2>' +
        '<h2>Impatient cow</h2>' +
        '<h2>Impatient co...</h2>' +
        '<img src="https://s-media-cache-ak0.pinimg.com/originals/e4/97/28/e4972885697348b48b9bdc6f3b287ea6.jpg" alt="cow-moo">' +
        '<a href="/">' + '<h2>Return Home</h2>' + '</a>')
    }
  } else if (request.url === '/cuteness') {
    response.end(
      '<h1>Baby Sloths</h1>' +
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/aaqzPMOd_1g" frameborder="0" allowfullscreen></iframe>' +
      '<a href="/">' + '<h2>Return Home</h2>' + '</a>')
  } else {
    response.end(
      '<h1>404 Error</h1>' +
      '<h2>The requested URL:</h2>' +
      '<h2>' + request.url + '</h2>' +
      '<h2>Was not found on this server.</h2>' +
      '<a href="/">' + '<h2>Return Home</h2>' + '</a>')
  }
})

// Listen on port 8080 (local), so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')
