import { SVG } from '@svgdotjs/svg.js';

class Circle {
    constructor(shape,color){
        this.shape = shape;
        this.color = color;
    }

    render(drawInstance){
        drawInstance.Circle(100).fill(this.color).move(100,100)
    }
}

class Square {
    constructor(shape,color){
        this.shape = shape;
        this.color = color;
    }

    render(drawInstance){
        drawInstance.Circle(100).fill(this.color).move(100,100)
    }
}

class Triangle {
    constructor(shape,color){
        this.shape = shape;
        this.color = color;
    }

    render(drawInstance){
        drawInstance.Circle(100).fill(this.color).move(100,100)
    }
}

export { Circle }
export { Square }
export { Triangle }