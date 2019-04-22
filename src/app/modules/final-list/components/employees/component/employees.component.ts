import {Component, Input, OnInit} from '@angular/core';

import {EmployeeData} from '../../../../../shared/interfaces/EmployeeData';

import {EmployeesService} from '../services/employees.service';
import {EmployeesModel} from '../models/employees.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  providers: [EmployeesService, EmployeesModel]
})
export class EmployeesComponent implements OnInit {

  @Input() department;
  data: EmployeeData[];


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
