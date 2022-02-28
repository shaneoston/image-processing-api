import supertest from 'supertest'
import app from '../index'
import { processImage } from '../utils/imageProcessing.util'

const request = supertest(app)

describe('Test endpoint responses:', () => {
    it('gets the endpoint response from the images route', async () => {
        const response = await request.get('/api/images?filename=fjord&width=1000&height=1200')
        expect(response.status).toBe(200)
    })
})

describe('Test image processing:', () => {
    it('resolves successfully when valid filename, width and height are provided', async () => {
        const imagePath = `public/images/full/icelandwaterfall.jpg`
        const height = 500
        const width = 500
        await expectAsync(processImage(imagePath, width, height)).toBeResolved()
    })

    it('resolves unsuccessfully when invalid filename is provide', async () => {
        const imagePath = `public/images/full/testimage.jpg`
        const height = 500
        const width = 500
        await expectAsync(processImage(imagePath, width, height)).toBeRejected()
    })
})
