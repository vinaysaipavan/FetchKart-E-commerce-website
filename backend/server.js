const express = require("express");
const app = express();
const cors = require("cors");
const login = require("./routes/login");
const signup = require("./routes/signup");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the world biggest backend server!!!");
});

app.use("",login);
app.use("",signup);

app.listen(5000, () => {
    console.log("App is listened at 5000");
});
