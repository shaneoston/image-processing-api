import sharp from 'sharp'

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

export { processedImagePath, processImage }
