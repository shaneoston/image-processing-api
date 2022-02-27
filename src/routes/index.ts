import express from 'express'
import path from 'path'
import fs from 'fs'
import { promises as fsPromises } from 'fs'

import { ImageParametersInterface } from '../interfaces/imageProcessing.interface'
import { processedImagePath, processImage } from '../utils/imageProcessing.util'

const routes = express.Router()

routes.get('/images', async (req: express.Request, res: express.Response) => {
    try {
        // get image parameters from request
        const imageParameters: ImageParametersInterface = {
            imageName: req.query.filename as string,
            width: parseInt(req.query.width as string) || 300,
            height: parseInt(req.query.height as string) || 200,
        }

        const outputPath: string = processedImagePath(
            imageParameters.imageName,
            imageParameters.width,
            imageParameters.height,
        )

        if (!fs.existsSync(outputPath)) {
            const imagePath = `public/images/full/${imageParameters.imageName}.jpg`
            const processedImage: Buffer = await processImage(
                imagePath,
                imageParameters.width,
                imageParameters.height,
            )

            await fsPromises.writeFile(outputPath, processedImage)
        }

        res.sendFile(path.resolve(outputPath))
    } catch (e) {
        res.send(`An error occurred: ${e}`)
    }
})

export default routes
