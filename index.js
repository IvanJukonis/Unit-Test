// import Rectangle from './rectangle'
var Rectangle = require('./rectangle')
var Square = require('./square')

var myR = new Rectangle(10, 5)
myR.height = 30
var p = myR.calculatePerimeter()
var P = Rectangle.CalculatePerimeter(20, 30)
console.log(p, P)

var myS = new Square(17)
myS.side = 20
console.log(myS.area, myS.calculatePerimeter())
