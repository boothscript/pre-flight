const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3000, (err) => {
  if (!err) {
    console.log("Express sever running on port 3000");
  } else {
    throw new Error("ERROR: Failed to app.listen", err);
  }
});
