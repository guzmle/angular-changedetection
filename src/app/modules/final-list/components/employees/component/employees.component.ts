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
  }

  public ngOnInit(): void {
    this.data = this.service.getData();
  }

  public add(label) {
    this.data = this.service.addEmployee(label);
  }

  public remove(position) {
    this.data = this.service.removeEmployee(position);
  }
}
