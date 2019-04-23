import {Component, Input, OnInit} from '@angular/core';
import {IEmployee} from 'projects/shared/src/app/shared/models/IEmployee';
import {EmployeesService} from 'projects/shared/src/app/shared/services/employees.service';
import {Employees} from 'projects/shared/src/app/shared/models/Employees';

@Component({
  selector: 'finally-employees',
  templateUrl: './employees.component.html',
  providers: [EmployeesService, Employees]
})
export class EmployeesComponent implements OnInit {

  @Input() department;
  data: IEmployee[];


  public constructor(private service: EmployeesService) {
    this.service.model.subscribe(value => this.data = value);
  }

  public ngOnInit(): void {
    this.service.getData();
  }

  public add(label) {
    this.service.addEmployee(label);
  }

  public remove(position) {
    this.service.removeEmployee(position);
  }
}
