import {Component} from '@angular/core';

@Component({
  selector: 'finally-root',
  template: `
    <div class="container">
      <router-outlet></router-outlet>
    </div>`
})
export class AppComponent {
  title = 'finally';
}
