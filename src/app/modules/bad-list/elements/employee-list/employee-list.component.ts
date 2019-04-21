import {Component, EventEmitter, Input, Output} from '@angular/core';
import {EmployeeData} from '../../../../shared/interfaces/EmployeeData';
import {AppUtils} from '../../../../shared/utils/AppUtils';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {

  @Input() data: EmployeeData[];

  @Output() remove = new EventEmitter<EmployeeData>();

  calculate(data: EmployeeData) {
    console.log('calculate', data);
    return AppUtils.fibonacci(data.num);
  }
}
