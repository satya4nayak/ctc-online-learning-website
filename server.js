const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
dotenv.config();

const app=express();

app.use(express.json());
app.use(cors());

var admin = require("firebase-admin");
var serviceAccount = require("./serviceKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});



app.get("/", (req, res) => {
    res.send("Welcome to cTc!");
  });

app.post("/signup",async (req,res)=>{
  const userResponse = await admin.auth().createUser({
    email: req.body.email,
    password: req.body.password,
    emailVerified: false,
    disabled: false,
  });
  console.log(req.body);
  res.json(userResponse);
})

app.post("/login", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await admin.auth().getUserByEmail(email);

    // Generate Firebase Custom Token
    const token = await admin.auth().createCustomToken(user.uid);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken; 
    next();
  } catch (error) {
    res.status(403).json({ error: "Invalid token" });
  }
};


















app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})