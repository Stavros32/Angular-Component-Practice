import {
    Component,
    OnChanges,
    OnInit,
    OnDestroy,
    SimpleChanges,
  } from '@angular/core';


interface IEmployee {
    employeeID:number;
    employeeName:string;
    employeeSalary:number;
}

export class Employee implements IEmployee{
    employeeID!: number;
    employeeName!: string;
    employeeSalary!: number;
    
}