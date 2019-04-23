import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EmployeModule} from '../employe/employe.module';
import {SharedModule} from 'projects/shared/src/app/shared/shared.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SharedModule,
    EmployeModule
  ]
})
export class OptimeModule {
}
