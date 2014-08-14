var querystring = require("querystring");

function home(response, postData)
{
	console.log("The 'home' URL was requested");
	
	var body = '<html>'+
		'<head>'+
		'<meta http-equiv="Content-Type" content="text/html; '+
		'charset=UTF-8" />'+
		'</head>'+
		'<body>'+
		'<form action="/upload" method="post">'+
		'<textarea name = "text" rows = "20" cols = "60"> </textarea>'+
		'<input type = "submit" value = "Upload" />'+
		'</form>'+
		'</body>'+
		'</html>';
		response.writeHead(200, {"Content-Type":"text/html"});
		response.write(body);
		response.end();
}

function upload(response, postData)
{
	console.log("The 'upload' URL was requested");
	
	response.writeHead(200, {"Content-Type":"text/html"});
	response.write("Text Received: "+ querystring.parse(postData).text);
	response.end();
}

exports.home = home;
exports.upload = upload;