// import Quad from './quad'
var Quad = require('./quad')

class Rectangle extends Quad {

    constructor(height=1, width=1) {
        super(height, width)
    }

}

module.exports = Rectangle
// export default Rectangle
