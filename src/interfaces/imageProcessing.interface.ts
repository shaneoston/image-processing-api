interface ImageParametersInterface {
    height?: number,
    imageName: string,
    processedImageName: string,
    requestURL: string,
    width?: number
}

interface ImagePathInterface {
    full: string,
    thumb: string
}

export {
    ImageParametersInterface,
    ImagePathInterface,
}