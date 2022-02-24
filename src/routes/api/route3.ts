import express from 'express'

const route3 = express.Router()

route3.get('/', (req, res) => {
    res.send('route3 api route')
})

export default route3
