

import express from 'express'
import sequelize from '../Config/sequelize.config.js'


const router = express.Router()

router.get('/init', (req, res) =>{
    try {
        sequelize.sync()
        // res.send('hej')//Der er hul igennem
        res.sendStatus(200)
    } catch(err) {
        console.error(err);
        res.status(500).send('Der opstod en fejl');
    }
})

export { router }