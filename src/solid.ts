// Single Responsibility Principle (SRP)
class User {
    constructor(public id: number, public name: string) {}
}

// Clase para manejar datos de tareas
class Task {
    constructor(public id: number, public description: string, public userId: number) {}
}

// Interfaz para operaciones con usuarios (Interface Segregation Principle - ISP)
interface UserRepository {
    getUser(id: number): User | undefined;
    addUser(user: User): void;
}

// Interfaz para operaciones con tareas (Interface Segregation Principle - ISP)
interface TaskRepository {
    getTasksByUserId(userId: number): Task[];
    addTask(task: Task): void;
}

// Implementación concreta de repositorios (Dependency Inversion Principle - DIP)
class InMemoryUserRepository implements UserRepository {
    private users: User[] = [];

    getUser(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

    addUser(user: User): void {
        this.users.push(user);
    }
}

class InMemoryTaskRepository implements TaskRepository {
    private tasks: Task[] = [];

    getTasksByUserId(userId: number): Task[] {
        return this.tasks.filter(task => task.userId === userId);
    }

    addTask(task: Task): void {
        this.tasks.push(task);
    }
}

// Liskov Substitution Principle (LSP) - Extender la funcionalidad sin modificar la clase base
class AdvancedTask extends Task {
    constructor(id: number, description: string, userId: number, public priority: string) {
        super(id, description, userId);
    }
}

// Open/Closed Principle (OCP) - Extensión de funcionalidades con nuevas clases si es necesario
class TaskService {
    constructor(
        private userRepository: UserRepository,
        private taskRepository: TaskRepository
    ) {}

    assignTaskToUser(userId: number, taskDescription: string): void {
        const user = this.userRepository.getUser(userId);
        if (user) {
            const task = new Task(Date.now(), taskDescription, userId);
            this.taskRepository.addTask(task);
            console.log(`Task assigned to user ${user.name}: ${taskDescription}`);
        } else {
            console.log(`User with ID ${userId} not found.`);
        }
    }

    printUserTasks(userId: number): void {
        const tasks = this.taskRepository.getTasksByUserId(userId);
        console.log(`Tasks for user ID ${userId}:`);
        tasks.forEach(task => console.log(`- ${task.description}`));
    }
}

// Crear instancias de repositorios y servicio
const userRepository = new InMemoryUserRepository();
const taskRepository = new InMemoryTaskRepository();
const taskService = new TaskService(userRepository, taskRepository);

// Agregar usuarios y tareas
const user1 = new User(1, 'John Doe');
userRepository.addUser(user1);

const user2 = new User(2, 'Jane Smith');
userRepository.addUser(user2);

taskService.assignTaskToUser(1, 'Complete the project');
taskService.assignTaskToUser(1, 'Submit the report');
taskService.assignTaskToUser(2, 'Prepare presentation');

// Imprimir tareas
taskService.printUserTasks(1);
taskService.printUserTasks(2);
