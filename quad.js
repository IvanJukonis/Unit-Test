class Quad {

    static CalculatePerimeter(height, width) {
        if (isNaN(width) || typeof width === 'object' || width <= 0)
            return 'Error'
        if (isNaN(height) || typeof height === 'object' || height <= 0)
            return 'Error'    
        return (width * 2) + (height * 2)
    }

    constructor(height=1, width=1) {
        if (isNaN(width) || typeof width === 'object' || width <= 0 || isNaN(height) || typeof height === 'object' || height <= 0){
            this._height = 1
            this._width = 1
            return
        } 
        this._height = height
        this._width = width
    }

    set height(value) {
        if(isNaN(value) || value <= 0)return
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
