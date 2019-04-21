import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

import {EmployeeData} from '../../../../../../shared/interfaces/EmployeeData';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {

  @Input() data: EmployeeData[];
  @Output() remove = new EventEmitter<EmployeeData>();

  get runChangeDetection() {
    console.log('Checking the view');
    return 'true';
  }
}
