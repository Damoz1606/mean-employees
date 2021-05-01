import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Employee } from '../interfaces/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URL_API: string = "http://localhost:3000/api/"

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<Employee[]>(this.URL_API);
  }

  postEmployee(employee: Employee){
    return this.http.post(this.URL_API, employee);
  }

  putEmployee(id:string, employee: Employee){
    return this.http.put(`${this.URL_API}/${id}`, employee);
  }

  deleteEmployee(id: string){
    return this.http.delete(`${this.URL_API}/${id}`);
  }
}
