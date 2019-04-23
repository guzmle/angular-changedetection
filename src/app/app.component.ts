import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <br>
    <div class="row justify-content-md-center bd-example">
      <div class="col-md-auto">
        <button type="button" [routerLinkActive]="'active'" [routerLink]="'/bad'" class="btn btn-secondary btn-lg">Default Events</button>
      </div>
      <div class="col-md-auto">
        <button type="button" [routerLinkActive]="'active'" [routerLink]="'/optime'" class="btn btn-primary btn-lg ">Detected Change
        </button>
      </div>
      <div class="col-md-auto">
        <button type="button" [routerLinkActive]="'active'" [routerLink]="'/final'" class="btn btn-success btn-lg">BehaviorSubject</button>
      </div>
    </div>
    <br>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  title = 'list-fibonacci';
}
