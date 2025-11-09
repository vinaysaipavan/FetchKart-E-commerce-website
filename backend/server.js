const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const login = require("./routes/login");
const signup = require("./routes/signup");
const profile = require("./routes/profile");
const auth = require("./middleware/auth");

app.use(cors({
  origin: "http://localhost:3000",
  credentials:true,
}));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Welcome to the world biggest backend server!!!");
});

//midlewares
app.get("/check-auth", auth, (req, res) => {
  res.json({ authenticated: true });
});
//routes
app.use("",login);
app.use("",signup);
app.use("",profile);

app.listen(5000, () => {
    console.log("App is listened at 5000");
});
