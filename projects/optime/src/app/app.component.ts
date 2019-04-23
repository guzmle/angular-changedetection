import {Component} from '@angular/core';

@Component({
  selector: 'optime-root',
  template: `
    <div class="container">
      <router-outlet></router-outlet>
    </div>`
})
export class AppComponent {
  title = 'optime';
}
