const express = require("express")
const dotEnv = require("dotenv");
const connect = require("./connectDb");
const User = require("./model");
const app = express();

dotEnv.config();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/details", async (req, res) => {
    try {
        const details = await User.find({})
        return res.json({
            message: details
        })
    } catch (error) {
        return res.json("error in databse")
    }
})

app.get("/",(req,res)=>{
    return res.json({
        message:"it's working fine"
    })
})

app.post("/user", async (req,res) => {
    try {
        const user=await User.create({
            name:req.body.name,
            age:req.body.age
        })
        return res.json({
            message: user
        })
    } catch (error) {
        return res.json("error in databse")
    }
})

app.get("/user/:id",async (req,res)=>{
    try {
        const user=await User.findById(req.params.id);
        return res.json({
            message: user
        })
    } catch (error) {
        return res.json("error in databse")
    }
})



app.listen(process.env.PORT, () => {
    console.log(`Port started running on ${process.env.PORT}`);
    connect();
})