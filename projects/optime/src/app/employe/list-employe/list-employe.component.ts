import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IEmployee} from 'projects/shared/src/app/shared/models/IEmployee';

@Component({
  selector: 'optime-list-employe',
  templateUrl: './list-employe.component.html'
})
export class ListEmployeComponent {


  @Input() data: IEmployee[];

  @Output() remove = new EventEmitter<IEmployee>();


  get runChangeDetection() {
    return true;
  }
}
