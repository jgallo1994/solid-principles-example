abstract class Shape {
    abstract area(): number;
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }
    area(): number {
        return this.width * this.height;
    }
}

function printArea(shape: Shape): void {
    console.log(`Area: ${shape.area()}`);
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
printArea(circle);
printArea(rectangle);
