import express from 'express'

export const productRouter = express.Router()



productRouter.get('/products', (req, res) => {
    // return res.json(123)
    res.send('hej')//Der er hul igennem

})

// productRouter.post('/products', (req, res) => {
//     return res.json('create')
// })

// productRouter.put('/products/:id([0-9])*', (req, res) => {
//     return res.json('opdater')
// })

// productRouter.delete('/products/:id([0-9])*', (req, res) => {
//     return res.json('delete')
// })