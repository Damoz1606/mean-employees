import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../services/employee.service";
import { Employee } from "../../interfaces/employees";
import { NgForm } from "@angular/forms";
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];
  employee: Employee = {} as Employee;
  update: boolean = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void{
    this.employeeService.getEmployees()
    .subscribe(res => {
      this.employees = res;
    },
    error => {
      console.log(error);
    });
    console.log(this.employee);
  }

  addEmployee(employee: NgForm): void {
    if(employee.value._id){
      this.employeeService.putEmployee(employee.value._id, employee.value)
      .subscribe(res => {
        console.log(res);
        this.employees.find(item => (item === employee.value._id) ? employee : item);
      },
      error => {
        console.log(error);
      });
    } else {
      this.employeeService.postEmployee(employee.value)
      .subscribe(res => {
        console.log(res);
        this.employees.push(employee.value);
      },
      error => {
        console.log(error);
      });
    }
    this.clean(employee);
  }

  deleteEmployee(id: string): void {
    console.log(id);
    if(confirm("Are you sure?")){
      this.employeeService.deleteEmployee(id)
      .subscribe(res => {
        this.getEmployees();
      },
      error => {
        console.log(error);
      });
    }
  }

  editEmployee(employee: Employee): void{
    this.employee = employee;
  }

  clean(employee: NgForm){
    this.employee = {} as Employee;
    employee.reset();
  }

}
