const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.listen(5000, (err) => {
  if (!err) {
    console.log("Express sever running on port 5000");
  } else {
    throw new Error("ERROR: Failed to app.listen", err);
  }
});
