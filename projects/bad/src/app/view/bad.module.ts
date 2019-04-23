import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SharedModule} from 'projects/shared/src/app/shared/shared.module';
import {EmployeModule} from '../employe/employe.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SharedModule,
    EmployeModule
  ]
})
export class BadModule {
}
