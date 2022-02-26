import express from 'express'
import path from 'path'
import sharp from 'sharp'

import { ImageParametersInterface, ImagePathInterface } from '../interfaces/imageProcessing.interface'

const routes = express.Router()

routes.get('/images', async(req, res) => {
    try {
        const imagePath: ImagePathInterface = {
            full: path.resolve(__dirname, '../images/full'),
            thumb: path.resolve(__dirname, '../images/thumb')
        }
        const imageParameters: ImageParametersInterface = {
            imageName: `${imagePath.full}/${req.query.filename}`,
            processedImageName: `${imagePath.thumb}/${req.query.filename}`,
            width: parseInt(req.query.width as string) || undefined,
            height: parseInt(req.query.height as string) || undefined
        }

        sharp(imageParameters.imageName)
            .resize(imageParameters.width, imageParameters.height)
            .toFile(imageParameters.processedImageName)
            .then(info => {
                res.send(`image processed: ${info}`)
            })
            .catch(err => {
                res.send(`error processing image: ${err}`)
            })
        // TODO type sharp parameters
    //    TODO error handling
    //    TODO tests
    } catch (e) {
        console.log(e)
    }
})

export default routes
