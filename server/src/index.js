const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    working: "FINE ",
  });
});

app.listen(port, console.log("server Started",port));