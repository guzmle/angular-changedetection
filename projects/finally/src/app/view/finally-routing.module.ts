import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FinallyModule} from './finally.module';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FinallyModule
  ],
  exports: [RouterModule]
})
export class FinallyRouting {
}
