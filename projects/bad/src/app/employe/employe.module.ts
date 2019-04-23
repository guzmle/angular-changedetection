import {NgModule} from '@angular/core';
import {ListEmployeComponent} from './list-employe/list-employe.component';
import {AddEmployeComponent} from './add-employe/add-employe.component';
import { EmployeesComponent } from './employees/employees.component';
import {SharedModule} from 'projects/shared/src/app/shared/shared.module';

@NgModule({
  declarations: [
    ListEmployeComponent,
    AddEmployeComponent,
    EmployeesComponent
  ],
  exports: [
    EmployeesComponent
  ],
  imports: [
    SharedModule
  ]
})
export class EmployeModule {
}
