import dotenv from "dotenv";
import express  from "express";

dotenv.config()

const app = express()

app.use(express.urlencoded({extended: true}))
app.use (initRouter)

app.listen(process.env.PORT , ()=>{
console.log({`server kører på http://locolhost:${process.env.PORT}`});
})
