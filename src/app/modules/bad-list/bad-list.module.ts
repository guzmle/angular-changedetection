import {NgModule} from '@angular/core';
import {EmployeeAddComponent} from './elements/employee-add/employee-add.component';
import {BadListComponent} from './views/list/bad-list.component';
import {EmployeeListComponent} from './elements/employee-list/employee-list.component';
import {EmployeesComponent} from './components/employees/employees.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    EmployeeAddComponent,
    BadListComponent,
    EmployeeListComponent,
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class BadListModule {
}
