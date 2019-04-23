import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'optime-add-employe',
  templateUrl: './add-employe.component.html'
})
export class AddEmployeComponent {


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
