import {
  Component,
  OnChanges,
  OnInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { Employee } from './employee';
import { employees } from './employeeMockUp';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './Employee.component.html',
})
export class EmployeeComponent implements OnInit, OnChanges, OnDestroy {


  Startemployee!: Employee[];
  FilteredEmployee:Employee[] = this.Startemployee
  SeaarchSalary!:number;
  SearchName!:string;
  NameSort:boolean=true;
  SalarySort:boolean=true;

  Filters(){
    this.FilteredEmployee = this.Startemployee
if(this.SearchName){
  this.FilteredEmployee = this.FilteredEmployee.filter((x)=>x.employeeName.toUpperCase().includes(this.SearchName.toUpperCase()));
};
  }
  // ToggleSort(){
  //  if (this.NameSort= true) {
  //   this.FilteredEmployee = this.FilteredEmployee.sort((x,y)=>x.employeeName>y.employeeName);
  //  }
  //  else{

  //  }
  // }

  ngOnDestroy(): void {
    console.log(' I Desroy');
  }
  ngOnChanges(): void {
    console.log('i Change');
  }
  ngOnInit(): void {
    this.Startemployee = this.service.getemployees();
    this.FilteredEmployee = this.Startemployee;
  }


  constructor(private service: EmployeeService) { }
}
