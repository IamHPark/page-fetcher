// two command line arguments : 1. URL, 2. local file path
// e.g --------------------------------------------------
// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html
// -------------------------------------------------------
// download the resource at the URL to local path on your machine
// upon competion, print out a message like "Downloaded and saved 1235 bytes to ./index.html"

// asyn operation -> use nested callbacks (to control the order of async)
// 1. make a http request and wait for the response
// 2. after http request completed, take the data you receive and write it to a file in your local filesystem

// use request library **
// use Node's fs module to write the file
// use the callback based approach
// do not use the pipe fucntion
// do not use sync functions

const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const fileName = process.argv[3];
console.log(url)
console.log(fileName);

request(url, (err, res, body) => {
  fs.writeFile(fileName, body, err => {
    if (err) {
      console.error(err)
      return;
    }
  })
})

