class User {
    constructor(public name: string, public age: number) {}
}

class UserPrinter {
    print(user: User): void {
        console.log(`User: ${user.name}, Age: ${user.age}`);
    }
}

const user = new User('John Doe', 30);
const printer = new UserPrinter();
printer.print(user);
