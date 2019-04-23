import {Component, Input, OnInit} from '@angular/core';
import {IEmployee} from 'projects/shared/src/app/shared/models/IEmployee';
import {AppUtils} from 'projects/shared/src/app/shared/utils/AppUtils';

@Component({
  selector: 'bad-employees',
  templateUrl: './employees.component.html'
})
export class EmployeesComponent implements OnInit {

  @Input() department;
  @Input() data: IEmployee[];

  constructor() {
  }

  ngOnInit() {
  }

  add(name) {
    this.data.unshift({
      label: name,
      num: AppUtils.generateNum()
    });
  }

  remove(employe: IEmployee) {
    this.data = this.data.filter(e => !Object.is(e, employe));
  }
}
