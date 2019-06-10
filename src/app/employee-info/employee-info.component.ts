import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-info',
  template: `
            <h2>Emploee Information with details</h2>
            <h3>{{errorMsg}}</h3>
            <div *ngFor="let employee of employees">
          <ul>
            <li>{{employee.id}} - {{employee.name}} - {{employee.age}}</li>
          </ul>
        </div>
  
  `,
  styleUrls: ['./employee-info.component.scss']
})
export class EmployeeInfoComponent implements OnInit {

  public employees = [];
  public errorMsg;
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployee()
        .subscribe(data => this.employees = data,
                   error => this.errorMsg = error);
  }

}
