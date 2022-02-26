import express from 'express'
import path from 'path'
import sharp from 'sharp'

const routes = express.Router()

routes.get('/images', (req, res) => {
    try {
        const imagePath = {
            full: path.resolve(__dirname, '../images/full'),
            thumb: path.resolve(__dirname, '../images/thumb')
        }
        const imageToProcess = `${imagePath.full}/${req.query.filename}`
        const processedImage = `${imagePath.thumb}/${req.query.filename}`

        sharp(imageToProcess)
            .resize(300, 200)
            .toFile(processedImage)
            .then(info => {
                console.log('image processed', info)
                res.send(info)
            })
            .catch(err => {
                res.send('error processing image')
                console.log(err)
            })
        // TODO type sharp parameters
    } catch (e) {
        console.log(e)
    }
})

export default routes
