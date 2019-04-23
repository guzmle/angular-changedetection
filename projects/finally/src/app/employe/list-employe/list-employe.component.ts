import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IEmployee} from 'projects/shared/src/app/shared/models/IEmployee';

@Component({
  selector: 'finally-list-employe',
  templateUrl: './list-employe.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListEmployeComponent {

  @Input() data: IEmployee[];
  @Output() remove = new EventEmitter<IEmployee>();

  get runChangeDetection() {
    return '';
  }
}
