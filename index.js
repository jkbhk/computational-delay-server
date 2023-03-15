const express = require('express');
const app = express();
const port = 3020;

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
  }, 10000);
});

// Start the server
app.listen(port, () => {
  console.log("Server listening on port " + port);
});

