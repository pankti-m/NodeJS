var http = require("http");
var url = require("url");
function start(route, handle) {
	http.createServer(function(request, response) {
		var pathname = url.parse(request.url).pathname;
		var postData = '';
		
		request.setEncoding("utf8");
		
		console.log("Received request for "+pathname+". Routing.. ");
		
		request.addListener("data", function(postDataChunk) {
			postData += postDataChunk;
		});
		request.addListener("end", function() {
			route(pathname, handle, response, postData);
		});
	}).listen(8888);
	console.log("Server listening");
}
exports.start = start;