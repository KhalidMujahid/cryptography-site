const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.set("view engine", "ejs");

app.get("/",(req,res) => {
  return res.status(200).render("index")
})

app.get("/login",(req,res) => {
  return res.status(200).render("login")
})

app.get("/register",(req,res) => {
  return res.status(200).render("register")
})

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
})