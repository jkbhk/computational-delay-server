const express = require('express');
const app = express();
const port = 3020;

// delay in seconds
const delay = 10;

var busy = false;

app.get("/compute", (req, res) => {
  if (busy) {
    res.status(503).send("Server is currently busy, try again later.");
    return;
  }

  busy = true;

  setTimeout(() => {
    busy = false;
    res.send("Computation complete.");
  }, delay * 1000);
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});

