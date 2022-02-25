import express from 'express'

const routes = express.Router()

routes.get('/images', (req, res) => {
    res.send('images route is running')
})

export default routes
