let http = require("http");
let url = require("url");

function iniciar(route, handle) {

  function onRequest(request, response) {

    let pathname = url.parse(request.url).pathname;
    
    console.log("Petición para " + pathname + " recibida.");    
    
    //response.writeHead(200, {"Content-Type": "text/html"});
    //let content = route(handle, pathname);    
    //response.write(content);
    //response.end();
    route(handle, pathname, response);

  }

  http.createServer(onRequest).listen(3333);
  console.log("Servidor Iniciado.");

}

exports.iniciar = iniciar;
