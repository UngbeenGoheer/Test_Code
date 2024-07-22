const express = require("express");
const { connectDB } = require("./DB/db");
const { personroutes } = require("./Routes/routes");
const { menuroutes } = require("./Routes/menu.routes");
const { Person } = require("./Models/models");
const app = express();
/**Middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcom in our Hotel");
});

app.use("/api/v1", personroutes);
app.use("/api/v2", menuroutes);

app.get("/person/:worktype", async (req, res) => {
  try {
    const worktype = req.params.worktype;
    console.log(worktype);
    if (worktype == "chef" || worktype == "waiter" || worktype == "Maneger") {
      const response = await Person.find({ Work: worktype });
      res.status(200).json(response);
    } else {
      res.status(404).json("Invalid worktype", error);
    }
  } catch (error) {
    res.status(500).json(Error);
  }
});
/**Server Setup */
const start = () => {
  try {
    connectDB();

    const PORT = 3000;
    app.listen(PORT, () => console.log("Server is running on ", PORT));
  } catch (error) {
    console.log("An error id occur when starting server", error);
  }
};
start();
