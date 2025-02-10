const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const e = require('express');

dotenv.config();
const app=express();
app.use(express.json());
app.use(cors());

//Test push


app.get("/", (req, res) => {
    res.send("Welcome to cTc!");
  });





















app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})