import AddressModel from "../model/address.model";
import RoleModel from "../model/role.model";
import UserModel from "../model/user.model";

class UserRepository {
  userRepository() {
    return UserModel;
  }
  async findUsersPaginate(limit = 10, offset = 1, orderBy, value) {
    return await this.userRepository().findAll({
      limit: Number(limit),
      offset: Number(offset * limit),
      order: [[orderBy, value]],
    });
  }

  async findByEmail(email) {
    return await this.userRepository().findOne({
      where: { email: email },
      include: [RoleModel],
    });
  }

  async count() {
    return await this.userRepository().count();
  }

  async findAll() {
    return await this.userRepository().findAll({ include: [CategoryModel] });
  }

  async findById(id) {
    return await this.userRepository().findOne({
      where: { id: id },
    });
  }
  async create(user) {
    return await this.userRepository().create(user);
  }
}

export default UserRepository;
