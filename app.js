
require("dotenv").config({
    path: "./.env"
});


const express = require('express');
const app = express();

// setting up morgan logger to get all the details regarding logs
app.use(require("morgan")("tiny"));

// requier the models file
require("./models/connect").mongoconnection()

// routes must be second last in the file
const indexRouter = require("./routes/indexRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user/api", indexRouter);

app.all("*",(req,res)=>{
    res.status(404).json({url:req.url,message:"route not found or not created"})
})

// Creating a server --  always be at the last of the code
app.listen(process.env.PORT, () => {
    console.log(`server is connected on ${process.env.PORT}`);
});