import {Component, Input, OnInit} from '@angular/core';
import {EmployeeData} from '../../../../shared/interfaces/EmployeeData';
import {AppUtils} from '../../../../shared/utils/AppUtils';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
})
export class EmployeesComponent implements OnInit {

  @Input() department;
  @Input() data: EmployeeData[];

  constructor() {
  }

  ngOnInit() {
  }

  add(name) {
    this.data.unshift({label: name, num: AppUtils.generateNum()});
  }

  remove(position) {
    this.data.splice(position, 1);
  }
}
