const cluster = require('cluster');
const os = require('os');
const express = require('express');
const app = express();
const port = 3020;

if (cluster.isMaster) {
  // Create a worker process for each CPU core
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
}else{

	app.get('/compute', (req, res) => {

	  // immediately reply to indicate usage of the service
	  res.send("computing.....")

	  let startTime = Date.now();

	  // delay in ms
	  let delay = 5000; 

	  // busy wait
	  while (Date.now() - startTime < delay) {
	  }
	

	});


	app.listen(port, () => {
	  console.log("Server listening on port " + port);
	});
}
