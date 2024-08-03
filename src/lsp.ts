abstract class Bird {
    abstract fly(): void;
}

class Sparrow extends Bird {
    fly(): void {
        console.log('Sparrow is flying');
    }
}

class Penguin extends Bird {
    fly(): void {
        console.log('Penguin cannot fly');
    }
}

function letItFly(bird: Bird): void {
    bird.fly();
}

const sparrow = new Sparrow();
const penguin = new Penguin();
letItFly(sparrow);
letItFly(penguin);
