import express from 'express'

import route1 from './api/route1'
import route2 from './api/route2'
import route3 from './api/route3'

const routes = express.Router()

routes.get('/', (req, res) => {
    res.send('api is running')
})

routes.use('/route1', route1)
routes.use('/route2', route2)
routes.use('/route3', route3)

export default routes
