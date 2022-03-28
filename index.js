const https = require(`https`);
const fs = require(`fs`);

const options = {
  key: fs.readFileSync(`./key.pem`),
  cert: fs.readFileSync(`./cert.pem`)
};

const port = 4000;

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end(`hello world\n`);
}).listen(port);