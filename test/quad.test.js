const assert = require('assert'); 
const Quad = require('../quad')

describe('Quad' , () => {

    describe('CalculatePerimeter' , () => {

        it("Should return 20 when parameters height and width are 5", () => {
            const height = 5
            const width = 5
            const expected = 20
            const result = Quad.CalculatePerimeter(height,width)
            assert.equal(expected, result)
        })

        it("Should return 0 when parameters height and width are 0", () => {
            const height = 0
            const width = 0
            const expected = 'Error'
            const result = Quad.CalculatePerimeter(height,width)
            assert.equal(expected, result)
        })

        it("Should return Error when parameter height is 5 and width is []", () => {
            const height = 5
            const width = []
            const expected = 'Error'
            const result = Quad.CalculatePerimeter(height,width)
            assert.equal(expected, result)
        })

        it("Should return Error when parameter height is 5 or width is [2]", () => {
            const height = 5
            const width = [2]
            const expected = 'Error'
            const result = Quad.CalculatePerimeter(height,width)
            assert.equal(expected, result)
        })

        it("Should return Error when parameter height is 5 and width is {}", () => {
            const height = 5
            const width = {}
            const expected = 'Error'
            const result = Quad.CalculatePerimeter(height,width)
            assert.equal(expected, result)
        })

        it("Should return Error when parameters height is 5 and width is -5", () => {
            const height = 5
            const width = -5
            const expected = 'Error'
            const result = Quad.CalculatePerimeter(height,width)
            assert.equal(expected, result)
        })

        it("Should return Error when parameters height is 'test' and width is 2", () => {
            const height = 'test'
            const width = 2
            const expected = 'Error'
            const result = Quad.CalculatePerimeter(height,width)
            assert.equal(expected, result)
        })

        it("Should return 20 when parameters height is '5' and width is 5", () => {
            const height = '5'
            const width = 5
            const expected = 20
            const result = Quad.CalculatePerimeter(height,width)
            assert.equal(expected, result)
        })

        it("Should return Error when parameters height is '' and width is 5", () => {
            const height = ''
            const width = 5
            const expected = 'Error'
            const result = Quad.CalculatePerimeter(height,width)
            assert.equal(expected, result)
        })

        it("Should return 36.89 when parameters height is and width are 9.2222222222", () => {
            const height = 9.2222222222
            const width = 9.2222222222
            const expected = 36.89
            const result = Quad.CalculatePerimeter(height,width)
            assert.equal(expected, result)
        })

    })

    describe('constructor' , () => {

        it("Should return 20 when parameters height and width are 5", () => {
            const height = 5
            const width = 5
            const result = new Quad(height,width)
            const expectedHeight = 5
            const expectedWidth = 5
            assert.equal(result.height, expectedHeight)
            assert.equal(result.width, expectedWidth)
        })

        it("Should return a Quad instance when parameters height or width are decimal", () => {
            const height = 5.5
            const width = 5.5
            const result = new Quad(height,width)
            const expectedHeight = 5.5
            const expectedWidth = 5.5
            assert.equal(result.height, expectedHeight)
            assert.equal(result.width, expectedWidth)
        })

        it("Should return a new Quad(1,1) when parameters height or width are 0", () => {
            const height = 2
            const width = 0
            const expectedHeight = 1
            const expectedWidth = 1
            const result = new Quad(height,width)
            assert.equal(result.height, expectedHeight)
            assert.equal(result.width, expectedWidth)
        })

        it("Should return a new Quad(1,1) when parameters height or width are [2]", () => {
            const height = 5
            const width = [2]
            const expectedHeight = 1
            const expectedWidth = 1
            const result = new Quad(height,width)
            assert.equal(result.height, expectedHeight)
            assert.equal(result.width, expectedWidth)
        })

        it("Should return a new Quad(1,1) when parameter height is 5 and width is {}", () => {
            const height = 5
            const width = {}
            const expectedHeight = 1
            const expectedWidth = 1
            const result = new Quad(height,width)
            assert.equal(result.height, expectedHeight)
            assert.equal(result.width, expectedWidth)
        })

        it("Should return a new Quad(1,1) when parameters height is 5 and width is -5", () => {
            const height = 5
            const width = -5
            const expectedHeight = 1
            const expectedWidth = 1
            const result = new Quad(height,width)
            assert.equal(result.height, expectedHeight)
            assert.equal(result.width, expectedWidth)
        })

        it("Should return a new Quad(1,1) when parameters height is 'test' and width is 2", () => {
            const height = 'test'
            const width = 2
            const expectedHeight = 1
            const expectedWidth = 1
            const result = new Quad(height,width)
            assert.equal(result.height, expectedHeight)
            assert.equal(result.width, expectedWidth)
        })

        it("Should return 20 when parameters height is '5' and width is 5", () => {
            const height = '5'
            const width = 5
            const result = new Quad(height,width)
            const expectedHeight = 5
            const expectedWidth = 5
            assert.equal(result.height, expectedHeight)
            assert.equal(result.width, expectedWidth)
        })

        it("Should return a new Quad(1,1) when parameters height is '' and width is 5", () => {
            const height = ''
            const width = 5
            const expectedHeight = 1
            const expectedWidth = 1
            const result = new Quad(height,width)
            assert.equal(result.height, expectedHeight)
            assert.equal(result.width, expectedWidth)
        })

        it("Should return a new Quad(9.22,9.22) when parameters height and width are 9.2222222222", () => {
            const height = 9.2222222222
            const width = 9.2222222222
            const expectedHeight = 9.22
            const expectedWidth = 9.22
            const result = new Quad(height,width)
            assert.equal(result.height, expectedHeight)
            assert.equal(result.width, expectedWidth)
        })

    })

    describe('set and get height' , () => {

        it("Should return 5 when quad.height is 5", () => {
            const quad = new Quad(1,2)
            const expected = 5
            quad.height = 5
            const result = quad.height
            assert.equal(result, expected)
        })

        it("Should return 5.5 when quad.height is 5", () => {
            const quad = new Quad(1,2)
            const expected = 5.5
            quad.height = 5.5
            const result = quad.height
            assert.equal(result, expected)
        })

        it("Should return the same quad.height as before when set height to 0", () => {
            const quad = new Quad(1,2)
            const expected = 1
            quad.height = 0
            const result = quad.height
            assert.equal(result, expected)
        })

        it("Should return the same quad.height as before when set height to []", () => {
            const quad = new Quad(1,2)
            const expected = 1
            quad.height = []
            const result = quad.height
            assert.equal(result, expected)
        })

        it("Should return the same quad.height as before when set height to {}", () => {
            const quad = new Quad(1,2)
            const expected = 1
            quad.height = {}
            const result = quad.height
            assert.equal(result, expected)
        })

        it("Should return the same quad.height as before when set height to -5", () => {
            const quad = new Quad(1,2)
            const expected = 1
            quad.height = -5
            const result = quad.height
            assert.equal(result, expected)
        })

        it("Should return the same quad.height as before when set height to 'test'", () => {
            const quad = new Quad(1,2)
            const expected = 1
            quad.height = 'test'
            const result = quad.height
            assert.equal(result, expected)
        })

        it("Should return 5 when quad.height is '5'", () => {
            const quad = new Quad(1,2)
            const expected = 5
            quad.height = '5'
            const result = quad.height
            assert.equal(result, expected)
        })

        it("Should return the same quad.height as before when set height to ''", () => {
            const quad = new Quad(1,2)
            const expected = 1
            quad.height = ''
            const result = quad.height
            assert.equal(result, expected)
        })

        it("Should return 9.22 when parameter height is 9.2222222222", () => {
            const quad = new Quad(2,1)
            const expected = 9.22
            quad.height = 9.2222222222
            const result = quad.height
            assert.equal(result, expected)
        })

    })
    
    describe('set and get width' , () => {

        it("Should return 5 when quad.width is 5", () => {
            const quad = new Quad(2,1)
            const expected = 5
            quad.width = 5
            const result = quad.width
            assert.equal(result, expected)
        })

        it("Should return 5.5 when quad.width is 5", () => {
            const quad = new Quad(2,1)
            const expected = 5.5
            quad.width = 5.5
            const result = quad.width
            assert.equal(result, expected)
        })

        it("Should return the same quad.width as before when set width to 0", () => {
            const quad = new Quad(2,1)
            const expected = 1
            quad.width = 0
            const result = quad.width
            assert.equal(result, expected)
        })

        it("Should return the same quad.width as before when set width to []", () => {
            const quad = new Quad(2,1)
            const expected = 1
            quad.width = []
            const result = quad.width
            assert.equal(result, expected)
        })

        it("Should return the same quad.width as before when set width to {}", () => {
            const quad = new Quad(2,1)
            const expected = 1
            quad.width = {}
            const result = quad.width
            assert.equal(result, expected)
        })

        it("Should return the same quad.width as before when set width to -5", () => {
            const quad = new Quad(2,1)
            const expected = 1
            quad.width = -5
            const result = quad.width
            assert.equal(result, expected)
        })

        it("Should return the same quad.width as before when set width to 'test'", () => {
            const quad = new Quad(2,1)
            const expected = 1
            quad.width = 'test'
            const result = quad.width
            assert.equal(result, expected)
        })

        it("Should return 5 when quad.width is '5'", () => {
            const quad = new Quad(2,1)
            const expected = 5
            quad.width = '5'
            const result = quad.width
            assert.equal(result, expected)
        })

        it("Should return the same quad.width as before when set width to ''", () => {
            const quad = new Quad(2,1)
            const expected = 1
            quad.width = ''
            const result = quad.width
            assert.equal(result, expected)
        })

        it("Should return 9.22 when parameter width is 9.2222222222", () => {
            const quad = new Quad(2,1)
            const expected = 9.22
            quad.width = 9.2222222222
            const result = quad.width
            assert.equal(result, expected)
        })

    })

    describe('get area' , () => {

        it("Should return 4 when parameters height and width are 2", () => {
            const quad = new Quad(2,2)
            const expected = 4
            const result = quad.area
            assert.equal(expected, result)
        })

        it("Should return 1 when parameters height or width are 0", () => {
            const quad = new Quad(2,0)
            const expected = 1
            const result = quad.area
            assert.equal(expected, result)
        })

        it("Should return 1 when parameter height is 5 and width is []", () => {
            const quad = new Quad(2,[])
            const expected = 1
            const result = quad.area
            assert.equal(expected, result)
        })

        it("Should return 1 when parameter height is 5 or width is [2]", () => {
            const quad = new Quad(2,[2])
            const expected = 1
            const result = quad.area
            assert.equal(expected, result)
        })

        it("Should return 1 when parameter height is 5 and width is {}", () => {
            const quad = new Quad(2,{})
            const expected = 1
            const result = quad.area
            assert.equal(expected, result)
        })

        it("Should return 1 when parameters height is 5 and width is -5", () => {
            const quad = new Quad(2,-2)
            const expected = 1
            const result = quad.area
            assert.equal(expected, result)
        })

        it("Should return 1 when parameters height is 'test' and width is 2", () => {
            const quad = new Quad(2,'test')
            const expected = 1
            const result = quad.area
            assert.equal(expected, result)
        })

        it("Should return 4 when parameters height is '2' and width is 2", () => {
            const quad = new Quad(2,'2')
            const expected = 4
            const result = quad.area
            assert.equal(expected, result)
        })

        it("Should return 1 when parameters height is '' and width is 5", () => {
            const quad = new Quad(2,'')
            const expected = 1
            const result = quad.area
            assert.equal(expected, result)
        })

        it("Should return Error when parameters height is '' and width is 5", () => {
            const quad = new Quad(9.2222222222,9.2222222222)
            const expected = 85.01
            const result = quad.area
            assert.equal(expected, result)
        })

    })

    describe('calculatePerimeter' , () => {

        it("Should return 4 when parameters height and width are 2", () => {
            const quad = new Quad(2,2)
            const expected = 8
            const result = quad.calculatePerimeter()
            assert.equal(expected, result)
        })

        it("Should return 4 when parameters height is 2 and width is 0", () => {
            const quad = new Quad(2,0)
            const expected = 4
            const result = quad.calculatePerimeter()
            assert.equal(expected, result)
        })

        it("Should return 4 when parameter height is 2 and width is []", () => {
            const quad = new Quad(2,[])
            const expected = 4
            const result = quad.calculatePerimeter()
            assert.equal(expected, result)
        })

        it("Should return 4 when parameter height is 2 or width is [2]", () => {
            const quad = new Quad(2,[2])
            const expected = 4
            const result = quad.calculatePerimeter()
            assert.equal(expected, result)
        })

        it("Should return 4 when parameter height is 2 and width is {}", () => {
            const quad = new Quad(2,{})
            const expected = 4
            const result = quad.calculatePerimeter()
            assert.equal(expected, result)
        })

        it("Should return 4 when parameters height is 2 and width is -2", () => {
            const quad = new Quad(2,-2)
            const expected = 4
            const result = quad.calculatePerimeter()
            assert.equal(expected, result)
        })

        it("Should return 4 when parameters height is 2 and width is 'test'", () => {
            const quad = new Quad(2,'test')
            const expected = 4
            const result = quad.calculatePerimeter()
            assert.equal(expected, result)
        })

        it("Should return 8 when parameters height is '2' and width is 2", () => {
            const quad = new Quad(2,'2')
            const expected = 8
            const result = quad.calculatePerimeter()
            assert.equal(expected, result)
        })

        it("Should return 4 when parameters height is 2 and width is ''", () => {
            const quad = new Quad(2,'')
            const expected = 4
            const result = quad.calculatePerimeter()
            assert.equal(expected, result)
        })

        it("Should return 85.01 when parameters height is 9.2222222222 and width is 9.2222222222", () => {
            const quad = new Quad(9.2222222222,9.2222222222)
            const expected = 36.88
            const result = quad.calculatePerimeter()
            assert.equal(expected, result)
        })

    })

})


