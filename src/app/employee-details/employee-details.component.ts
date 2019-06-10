import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  template: `
        <h2>Employee Names</h2>
        <h3>{{errorMsg}}</h3>
        <div *ngFor="let employee of employees">
          <ul>
            <li>{{employee.name}}</li>
          </ul>
        </div>
  
  `,
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  public employees = [];
  public errorMsg;
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployee()
        .subscribe(data => this.employees = data,
                   error => this.errorMsg = error);
                    
  }

}
