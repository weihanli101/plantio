var request = require('request')

describe ('calc', () => {
    it('Should mutliply 2 and 2', () =>{
        expect(2*2).toBe(4)
    })
})

describe(' get messages', () => {
    it('should return 200 okay', (done) => {
        request.get('http://localhost:3000/messages', (err, res) => {
            expect(res.statusCode).toBe(200)
            done()
        })
    })

    it('should return list that is not empty', (done) => {
        request.get('http://localhost:3000/messages', (err, res) => {
            expect(JSON.parse(res.body).length).toBeGreaterThan(0)
            done()
        })
    })
})

describe('get messages from user', () => {
    it('should return 200 okay', (done) => {
        request.get('http://localhost:3000/messages/Weihan', (err, res) => {
            expect(res.statusCode).toBe(200)
            done()
        })
    })
    it('name should be Weihan', (done) => {
        request.get('http://localhost:3000/messages', (err, res) => {
            expect(JSON.parse(res.body)[0].name).toEqual('Weihan')
            done()
        })
    })
})