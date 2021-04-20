const http = require('http');

http.createServer((req, res)=>{
  res.write("Hello world \n"); // write a response
  res.end(); //end the response
}).listen(3000); // listen for requests on port 8000