import { Router } from 'express';
import { getEmployees, getEmployee, postEmployee, putEmployee, deleteEmployee, deleteEmployees } from '../../controller/employee.controller'

const router = Router();

router.route("/")
.get(getEmployees)
.post(postEmployee)
.delete(deleteEmployees);

router.route("/:id")
.get(getEmployee)
.put(putEmployee)
.delete(deleteEmployee);

export default router;