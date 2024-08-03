interface Workable {
    work(): void;
}

interface Eatable {
    eat(): void;
}

class Worker implements Workable {
    work(): void {
        console.log('Working');
    }
}

class Chef implements Workable, Eatable {
    work(): void {
        console.log('Cooking');
    }
    eat(): void {
        console.log('Eating');
    }
}

function performWork(worker: Workable): void {
    worker.work();
}

function takeBreak(chef: Eatable): void {
    chef.eat();
}

const worker = new Worker();
const chef = new Chef();
performWork(worker);
performWork(chef);
takeBreak(chef);
