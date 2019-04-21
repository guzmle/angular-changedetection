import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
})
export class EmployeeAddComponent {

  label: string;
  @Output() add = new EventEmitter<string>();

  constructor() {
  }

  handleKey(event: any) {
    if (event.keyCode === 13) {
      this.add.emit(this.label);
      this.label = '';
    }
  }
}
