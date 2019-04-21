import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeAddComponent} from './elements/employee-add/employee-add.component';
import {BadListComponent} from './views/list/bad-list.component';
import {EmployeeListComponent} from './elements/employee-list/employee-list.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {EmployeesComponent} from './components/employees/employees.component';

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
