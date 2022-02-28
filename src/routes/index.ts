import express from 'express'
import path from 'path'
import fs from 'fs'
import { promises as fsPromises } from 'fs'

import { getImageParameters, processedImagePath, processImage } from '../utils/imageProcessing.util'

const routes = express.Router()

routes.get('/images', async (req: express.Request, res: express.Response) => {
    try {
        // check submitted query string and create parameters object
        const imageParameters = await getImageParameters(req)


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
        console.error(e)
        res.send(`Oops... ${e}`)
    }
})

export default routes
