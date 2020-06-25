import UserRepository from "../repository/user.repository";

class AuthService {

    doAuth(user) {
        return new UserRepository().findByUserNameAndPassword(user.userName, user.userPassword);
    }
}

export default AuthService