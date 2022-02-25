import express from 'express'

const app = express()

app.get('/api', (req, res) => {
    res.send('api is running')
})

export default app
