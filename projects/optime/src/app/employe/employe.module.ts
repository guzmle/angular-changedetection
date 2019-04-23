import {NgModule} from '@angular/core';
import {AddEmployeComponent} from './add-employe/add-employe.component';
import {ListEmployeComponent} from './list-employe/list-employe.component';
import {EmployeesComponent} from './employees/employees.component';
import {SharedModule} from 'projects/shared/src/app/shared/shared.module';

@NgModule({
  declarations: [
    AddEmployeComponent,
    ListEmployeComponent,
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
