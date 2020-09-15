import AddressRepository from "../repositories/address.repository";
import UserRepository from "../repositories/user.repository";

class UserService {
  userService() {
    return new UserRepository();
  }

  addressRepository() {
    return new AddressRepository();
  }
  async auth(email, password) {
    const user = this.userService().findByEmail(email);
    return user;
  }
  async createUser(user) {
    const {
      fullName,
      phoneNumber,
      birthDate,
      gender,
      password,
      email,
      roleId,
    } = user;
    if (
      (this.checkData(fullName) && this.checkData(phoneNumber),
      this.checkData(birthDate),
      this.checkData(gender),
      this.checkData(email),
      this.checkData(roleId),
      this.checkData(password))
    ) {
      return this.userService().create({
        fullName: fullName,
        phoneNumber: phoneNumber,
        birthDate: birthDate,
        gender: gender,
        password: password,
        email: email,
        roleId: roleId,
      });
    } else {
      return {};
    }
  }

  getUser(id) {
    return this.userService().findById(id);
  }

  checkData(data) {
    if (data !== null && data !== undefined && data !== "") return true;
    else return false;
  }

  async addAddress(address) {
    const userCheck = this.getUser(address.userId);
    if (userCheck !== null) {
      return this.addressRepository().create(address);
    }
  }

  async getAddressByUser(idUser) {
    return this.addressRepository().findAddressByUser(idUser);
  }
}

export default UserService;
