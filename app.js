let Rectangle = function (x,y,length,width) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.width = width;

    this.getLength = function () {
        return this.length;
    };

    this.getLength = function () {
        return this.width;
    };

    this.setLength = function (new_length) {
        this.length = new_length;
    };

    this.setWidth = function (new_width) {
        this.width = new_width;
    };

    this.calculateArea = function () {
        return this.length*this.width;
    };

    this.calculatePerimeter = function () {
        return (this.length+this.width)*2;
    };
};
let rectangle = new Rectangle(50,50,50,50);
function drawRect() {
    let ctx= document.getElementById('myCanvas').getContext('2d');
    ctx.beginPath();
    ctx.fillRect(rectangle.x, rectangle.y, rectangle.length,rectangle.width);
    ctx.strokeRect(rectangle.x, rectangle.y, rectangle.length,rectangle.width);
    ctx.closePath();
}

drawRect();

rectangle.setLength(500);
rectangle.setWidth(500);
drawRect();

alert('Dien tich HCN la:'+ rectangle.calculateArea());
alert('Chu vi HCN la:'+ rectangle.calculatePerimeter());
