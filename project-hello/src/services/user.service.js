import UserRepository from "../repository/user.repository";

class UserService {

    findUser(id) {
        return new UserRepository().findOne(id);
    }

    findAllUser(skip = 0, take = 10) {
        return new UserRepository().findAll(skip, take);
        return user;
    }

    createUser(data) {
        return new UserRepository().save(data);
    }
}

export default UserService;