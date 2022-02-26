interface ImageParametersInterface {
    imageName: string,
    processedImageName: string,
    width?: number,
    height?: number
}

interface ImagePathInterface {
    full: string,
    thumb: string
}

export {
    ImageParametersInterface,
    ImagePathInterface
}