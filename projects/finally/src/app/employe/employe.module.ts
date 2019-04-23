import {NgModule} from '@angular/core';
import {AddEmployeComponent} from './add-employe/add-employe.component';
import {EmployeesComponent} from './employees/employees.component';
import {SharedModule} from 'projects/shared/src/app/shared/shared.module';
import {ListEmployeComponent} from './list-employe/list-employe.component';

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
