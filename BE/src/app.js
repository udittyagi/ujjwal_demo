const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send(`
        <body>
            <h1>Hello Ujjwal</h1>
        </body>
        `);
});

app.get("/detail", (req, res) => {
  /**
   * extract data from req.
   * connect to to db
   * query db
   * db will return data
   * then we will return same data to FE
   */
  res.json({
    name: "Udit Tyagi",
    age: "23",
  });
});

app.listen(3000, () => {
  console.log("Server Started on port 3000");
});
