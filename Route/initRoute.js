

import express from 'express'
import sequelize from '../Config/sequelize.config'


const router = express.Router()

router.get('/init', (req, res) =>{
    try {
        sequelize.sync()
        console.log('Er det hul igennem?');
        res.sendStatus(200)
    } catch(err) {
        console.error(err);
    }
})

export { router }