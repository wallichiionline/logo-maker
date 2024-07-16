import { SVG } from '@svgdotjs/svg.js';

class Circle {
    constructor(shape,color){
        this.shape = shape;
        this.color = color;
    }

    render(drawInstance){
        drawInstance.circle(200).fill(this.color).center(150,100);
    }
}

class Square {
    constructor(shape,color){
        this.shape = shape;
        this.color = color;
    }

    render(drawInstance){
        drawInstance.rect(200,200).fill(this.color).center(150,100);
    }
}

class Triangle {
    constructor(shape,color){
        this.shape = shape;
        this.color = color;
    }

    render(drawInstance){
        drawInstance.polygon('50,200 250,200, 150,0').fill(this.color);
    }
}

export { Circle }
export { Square }
export { Triangle }