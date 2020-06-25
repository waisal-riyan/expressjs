import conns from "../database/connection";
import {
  ObjectID
} from "mongodb";


class EmployeeService {
  redisClient() {
    return conns.getRedisClient();
  }
  employeeRepository() {
    const collection = conns.getDb().collection("employee");
    return collection;
  }

  async findById(id) {
    let data = await this.findAll();
    return new Promise((resolve, reject) => {
      this.redisClient().hget('data', id, async (err, reply) => {
        if (err) {
          console.log(err);
        } else if (reply) {
          resolve(JSON.parse(reply));
        } else {
          resolve(data[data.indexOf(id)])
        }
      });
    });
  }

  async delete(id) {
    if (this.redisClient().hdel('data', id)) {
      let data = await this.employeeRepository().deleteOne({
        _id: id
      });
      return {
        message: 'success',
        data: data
      }
    }
  }

  async findAll() {
    let docs = await this.employeeRepository().find({});
    return new Promise((resolve, reject) => {
      this.redisClient().hvals('data', (err, reply) => {
        if (err) {
          console.log(err);
        } else if (reply.length > 0) {
          let i = 0;
          let dataArr = [];
          while (i < reply.length) {
            dataArr.push(JSON.parse(reply[i]));
            i++;
          }
          resolve(dataArr);
        } else {
          docs.toArray((err, employee) => {
            if (err) {
              return reject(err);
            } else {
              employee.forEach((value) => {
                this.redisClient().hmset('data', value._id, JSON.stringify(value));
                this.redisClient().expire('data', process.env.CACHE_EXPIRED)
              })
            }
            resolve(employee);
          });
        }
      });
    });
  }

  async insert(data) {
    let result = await this.employeeRepository().insertOne(data);
    let id = result.insertedId;

    return new Promise((resolve, reject) => {
      this.redisClient().hget('data', id, (err, reply) => {
        if (err) {
          console.log(err);
        } else if (reply) {
          resolve(reply.ops[0]);
        } else {
          if (result.ops.length > 0) {
            this.redisClient().hmset('data', id, JSON.stringify(result.ops[0]));
            this.redisClient().expire('data', process.env.CACHE_EXPIRED)
          }
          resolve(result.ops[0])
        }
      });
    });
  }

  async updateOne(id, data) {
    let result = await this.employeeRepository().updateOne({
      _id: new ObjectID(id)
    }, {
      $set: data
    });

    if (result) {
      this.redisClient().hmset('data', id, JSON.stringify(data));
      this.redisClient().expire('data', process.env.CACHE_EXPIRED)
      return data
    } else {
      return {
        message: 'failed'
      }
    }
  }

  async findAllPaging(numOfItems, pageNum) {
    --pageNum;
    let trimStart = pageNum * numOfItems;
    let trimEnd = (pageNum + 1) * numOfItems
    let data = await this.findAll();
    return data.slice(trimStart, trimEnd);
  }
}

export default EmployeeService;