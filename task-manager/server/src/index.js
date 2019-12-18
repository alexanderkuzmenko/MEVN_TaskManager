const express = require("express")
require("./db/mongoose.js");
const validator = require("validator")
const cors = require("cors")
const bodyParser = require('body-parser')

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");


const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(userRouter)
app.use(taskRouter)


app.listen(8081, ()=>{
    console.log("Server listening on 3000 port")
})