import dotenv from "dotenv";
import express  from "express";
import { router as initRouter } from "./Route/initRoute.js";


dotenv.config()

let port = process.env.PORT

const app = express()

app.use(express.urlencoded({extended: true}))
app.use (initRouter)

// Middleware til håndtering af 404-fejl (rute ikke fundet)
app.use((req, res, next) => {
    res.status(404).send("Ressource ikke fundet");
});

// Global fejlhåndteringsmiddleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Der opstod en intern fejl");
});

app.listen(process.env.PORT,()=>{
console.log(`server kører på http://locolhost:${port}`);
})
