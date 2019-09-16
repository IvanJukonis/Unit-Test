const assert = require('assert'); 
const Quad = require('../quad')

describe('Quad' , () => {

    describe('CalculatePerimeter' , () => {

        it("Should return 20 when parameters height and width are 5", () => {
            const height = 5
            const width = 5
            const result = 20
            const expected = Quad.CalculatePerimeter(height,width)
            assert.equal(result, expected)
        })

        it("Should return 0 when parameters height and width are 0", () => {
            const height = 0
            const width = 0
            const result = 'Error'
            const expected = Quad.CalculatePerimeter(height,width)
            assert.equal(result, expected)
        })

        it("Should return Error when parameter height is 5 and width is []", () => {
            const height = 5
            const width = []
            const result = 'Error'
            const expected = Quad.CalculatePerimeter(height,width)
            assert.equal(result, expected)
        })

        it("Should return Error when parameter height is 5 or width is [2]", () => {
            const height = 5
            const width = [2]
            const result = 'Error'
            const expected = Quad.CalculatePerimeter(height,width)
            assert.equal(result, expected)
        })

        it("Should return Error when parameter height is 5 and width is {}", () => {
            const height = 5
            const width = {}
            const result = 'Error'
            const expected = Quad.CalculatePerimeter(height,width)
            assert.equal(result, expected)
        })

        it("Should return Error when parameters height is 5 and width is -5", () => {
            const height = 5
            const width = -5
            const result = 'Error'
            const expected = Quad.CalculatePerimeter(height,width)
            assert.equal(result, expected)
        })

        it("Should return Error when parameters height is 'test' and width is 2", () => {
            const height = 'test'
            const width = 2
            const result = 'Error'
            const expected = Quad.CalculatePerimeter(height,width)
            assert.equal(result, expected)
        })

        it("Should return 20 when parameters height is '5' and width is 5", () => {
            const height = '5'
            const width = 5
            const result = 20
            const expected = Quad.CalculatePerimeter(height,width)
            assert.equal(result, expected)
        })

        it("Should return Error when parameters height is '' and width is 5", () => {
            const height = ''
            const width = 5
            const result = 'Error'
            const expected = Quad.CalculatePerimeter(height,width)
            assert.equal(result, expected)
        })

    })
})

