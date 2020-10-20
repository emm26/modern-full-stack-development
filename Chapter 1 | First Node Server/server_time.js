require("http").createServer((inRequest, inResponse) => {
	const requestModule = require("request"); 
	requestModule(
		"http://worldtimeapi.org/api/timezone/Europe/London", 
		function (inErr, inResp, inBody) {
			inResponse.end(`Hello from my first Node Web server. Information about the current time: ${inBody}`);
		}
	); 
}).listen(80);