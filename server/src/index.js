const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const rootRouter = require("./routes/index");
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use("/api/v1",rootRouter)
app.get("/", (req, res) => {
  res.json({
    working: "FINE ",
  });
});

app.listen(port, console.log("server Started",port));
