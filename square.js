// import Quad from './quad'
var Quad = require('./quad')

class Square extends Quad {

    constructor(side=0) {
        super(side, side)
        this._side = side
    }

    set side(value) {
        if(isNaN(value)) throw 'Side exptecs a number'
        this._side = parseFloat(value)
        super.width = this._side
        super.height = this._side
    }

    get side() {
        return this._side
    }

}

module.exports = Square
// export default Square
