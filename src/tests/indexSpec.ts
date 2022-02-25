import supertest from 'supertest'
import app from '../index'

const request = supertest(app)

describe('Test endpoint responses', () => {

    it('gets the endpoint response from the images route', async () => {
        const response = await request.get('/api/images')
        expect(response.status).toBe(200)
    })
})