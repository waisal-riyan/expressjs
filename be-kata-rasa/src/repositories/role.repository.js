import RoleModel from "../model/role.model";

class RoleRepository {
  roleRepository() {
    return RoleModel;
  }
  async findRolesPaginate(limit, offset, orderBy, value) {
    return await this.roleRepository().findAll({
      limit: Number(limit),
      offset: Number(offset * limit),
      order: [[orderBy, value]],
    });
  }

  async count() {
    return await this.roleRepository().count();
  }

  async findAll() {
    return await this.roleRepository().findAll({ include: [CategoryModel] });
  }

  async findById(id) {
    return await this.roleRepository().findOne({
      where: { id: id },
    });
  }
  async create(role) {
    return await this.roleRepository().create(role);
  }
}

export default RoleRepository;
