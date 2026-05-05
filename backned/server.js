const express = require("express");
const app= express();
const mongoose =require("mongoose");
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use("/api/users", userRoutes);

app.post("/api/users/login", (req, res) => {
  res.send("LOGIN ROUTE WORKING");
});

mongoose.connect("mongodb+srv://javacourse100_db_user:vasu12345@cluster0.vu1jb3s.mongodb.net/taskmanager")
.then(()=>{
  console.log("database connect");
  app.listen(5000,()=>{
    console.log("server is running port number 5000");
  })
})
.catch(()=>{
  console.log("not connect somethinf went wrong");
})  
