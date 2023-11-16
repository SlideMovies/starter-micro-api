const GLOBAL_AGENT = require("global-agent");
GLOBAL_AGENT.HTTP_PROXY = 'http://110.78.138.125:8080';


// Now require cors-anywhere
const corsAnywhere = require('cors-anywhere');

// Set the CORS Anywhere server to use the global proxy
corsAnywhere.createServer({
  originWhitelist: []
}).listen(8888, '0.0.0.0', function() {
  console.log('CORS Anywhere is listening on port 8080');
});
