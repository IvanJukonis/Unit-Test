class Quad {

    static CalculatePerimeter(height, width) {
        return (width * 2) + (height * 2)
    }

    constructor(height=0, width=0) {
        this._height = height
        this._width = width
    }

    set height(value) {
        if(isNaN(value)) throw 'Height exptecs a number'
        this._height = parseFloat(value)
    }

    get height() {
        return this._height
    }

    set width(value) {
        if(isNaN(value)) throw 'Width exptecs a number'
        this._width = parseFloat(value)
    }

    get width() {
        return this._width
    }

    get area() {
        return this._width * this._height
    }

    calculatePerimeter() {
        return (this._width * 2) + (this._height * 2)
    }

}

module.exports = Quad
// export default Quad
