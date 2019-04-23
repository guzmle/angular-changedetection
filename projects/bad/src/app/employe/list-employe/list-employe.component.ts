import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IEmployee} from 'projects/shared/src/app/shared/models/IEmployee';
import {AppUtils} from 'projects/shared/src/app/shared/utils/AppUtils';

@Component({
  selector: 'bad-list-employe',
  templateUrl: './list-employe.component.html'
})
export class ListEmployeComponent {

  @Input() data: IEmployee[];

  @Output() remove = new EventEmitter<IEmployee>();

  calculate(data: IEmployee) {
    return AppUtils.fibonacci(data.num);
  }
}
