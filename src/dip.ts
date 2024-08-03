
interface UserRepository {
    getUser(id: number): string;
}

class DatabaseUserRepository implements UserRepository {
    getUser(id: number): string {
        return `User ${id} from database`;
    }
}

class UserService {
    constructor(private userRepository: UserRepository) {}

    getUser(id: number): string {
        return this.userRepository.getUser(id);
    }
}

const userRepository = new DatabaseUserRepository();
const userService = new UserService(userRepository);
console.log(userService.getUser(1));
