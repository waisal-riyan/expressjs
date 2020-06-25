import EmployeeService from "../services/employee.service";
import {
  Router
} from "express";
import log from '../logger'

const employeeService = new EmployeeService();
const EmployeeRouter = Router()
  .get("/", async (req, res) => {
    try {
      let data;
      const numItems = req.query.numItems;
      const pageNumber = req.query.pageNumber;
      if (numItems && pageNumber) {
        data = await employeeService.findAllPaging(numItems, pageNumber);
      } else {
        data = await employeeService.findAll();
      }
      res.json(data);
    } catch (error) {
      log.error(error.message)
      res.status(401).json({
        message: error.message
      });
    }
  })
  .get("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      
      const data = await employeeService.findById(id);
      if (data == null) {
        res.status(404).json({
          message: "data not found"
        });
      } else {
        res.json(data);
      }
    } catch (error) {
      log.error(error.message)
      res.status(401).json({
        message: err.message
      });
    }
  })
  .post("/", async (req, res) => {
    try {
      const firstName = req.body.firstName;
      const lastName = req.body.lastName;
      const nik = req.body.nik;
      const placeOfBirth = req.body.placeOfBirth;
      const dateOfBirth = new Date(req.body.dateOfBirth);
      const department = req.body.department;
      const gender = req.body.gender;
      const status = req.body.status;
      const joinDate = new Date(req.body.joinDate);

      const newData = {
        firstName: firstName,
        lastName: lastName,
        nik: nik,
        placeOfBirth: placeOfBirth,
        dateOfBirth: dateOfBirth,
        department: department,
        gender: gender,
        status: status,
        joinDate: joinDate
      };

      const data = await employeeService.insert(newData);
      res.json(data);
    } catch (error) {
      log.error(error.message)
      res.status(401).json({
        message: error.message
      });
    }
  })
  .put("/:id", async (req, res) => {
    try {
      const {
        id
      } = req.params;
      const firstName = req.body.firstName;
      const lastName = req.body.lastName;
      const nik = req.body.nik;
      const placeOfBirth = req.body.placeOfBirth;
      const dateOfBirth = new Date(req.body.dateOfBirth);
      const department = req.body.department;
      const gender = req.body.gender;
      const status = req.body.status;
      const joinDate = new Date(req.body.joinDate);

      const newData = {
        firstName: firstName,
        lastName: lastName,
        nik: nik,
        placeOfBirth: placeOfBirth,
        dateOfBirth: dateOfBirth,
        department: department,
        gender: gender,
        status: status,
        joinDate: joinDate
      };
      const data = await employeeService.updateOne(id, newData);
      res.json(data);
    } catch (error) {
      log.error(error.message)
      res.status(401).json({
        message: error.message
      });
    }
  })
  .delete("/:id", async (req, res) => {
    try {
      const {
        id
      } = req.params;
      const data = await employeeService.delete(id);
      res.json(data);
    } catch (error) {
      log.error(error.message)
      res.status(401).json({
        message: error.message
      });
    }
  });

export default EmployeeRouter;