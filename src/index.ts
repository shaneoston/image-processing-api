import express from 'express'
import routes from './routes/index'
import path from 'path'

const app = express()
const port = 3000

app.use('/api', routes)
app.use(express.static(path.join(__dirname, '../public')))
app.set('view engine', 'ejs')

app.get('/', (req: express.Request, res: express.Response) => {
    res.redirect('/api')
})

app.listen(port, () => {
    // eslint-disable-next-line no-undef
    console.log(`server started at localhost:${port}`)
})

export default app
