import sharp from 'sharp'
import express from 'express'
import fs from 'fs'
import { ImageParametersInterface } from '../interfaces/imageProcessing.interface'

const getImageParameters = (req: express.Request) => {
    // check for valid parameters
    const filePath = `public/images/full/${req.query.filename}.jpg`
    if (!fs.existsSync(filePath)) {
        throw new Error('Invalid file name. Check it and resubmit.')
    }
    if (!req.query.width || isNaN(parseInt(req.query.width as string))) {
        throw new Error(
            'Invalid or missing width. Please add a number as width.',
        )
    }
    if (!req.query.height || isNaN(parseInt(req.query.height as string))) {
        throw new Error(
            'Invalid or missing height. Please add a number as height.',
        )
    }

    const imageParameters: ImageParametersInterface = {
        imageName: req.query.filename as string,
        width: parseInt(req.query.width as string),
        height: parseInt(req.query.height as string),
    }

    return imageParameters
}

const processedImagePath = (
    imageName: string,
    height: number,
    width: number,
): string => {
    return `public/images/processed/${imageName}${width}x${height}.jpg`
}

const processImage = (
    imagePath: string,
    height: number,
    width: number,
): Promise<Buffer> => {
    return sharp(imagePath).resize(width, height).toBuffer()
}

export { processedImagePath, processImage, getImageParameters }
