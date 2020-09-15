import UserModel from "../model/user.model";
import AddressModel from "../model/address.model";

class UserService {
  async findAll(limit = 10, offset = 1) {
    return await UserModel.findAll({
      include: [AddressModel],
      limit: Number(limit),
      offset: Number((offset - 1) * limit),
    });
  }

  async auth(email, password) {
    return await UserModel.findOne({
      include: [AddressModel],
      where: {
        email: email,
        password: password,
      },
    });
  }
}

export default UserService;
