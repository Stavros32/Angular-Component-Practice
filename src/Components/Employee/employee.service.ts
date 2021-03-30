import { Injectable } from '@angular/core';
import {Employee} from './employee';
import {employees} from './employeeMockUp';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getemployees():Employee[]{
    return employees;
  }
}
