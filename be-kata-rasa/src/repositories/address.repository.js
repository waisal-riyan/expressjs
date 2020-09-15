import AddressModel from "../model/address.model";

class AddressRepository {
  addressRepository() {
    return AddressModel;
  }
  async findAddresssPaginate(limit, offset, orderBy, value) {
    return await this.addressRepository().findAll({
      limit: Number(limit),
      offset: Number(offset * limit),
      order: [[orderBy, value]],
    });
  }

  async count() {
    return await this.addressRepository().count();
  }

  async findAll() {
    return await this.addressRepository().findAll({ include: [CategoryModel] });
  }

  async findById(id) {
    return await this.addressRepository().findOne({
      where: { id: id },
    });
  }
  async findAddressByUser(userId) {
    return await this.addressRepository().findAll({
      where: { userId: userId },
    });
  }
  async create(address) {
    return await this.addressRepository().create(address);
  }
}

export default AddressRepository;
