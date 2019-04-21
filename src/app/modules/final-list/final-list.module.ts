import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {SharedModule} from '../../shared/shared.module';

import {FinalListComponent} from './views/list/component/final-list.component';
import {EmployeesComponent} from './components/employees/component/employees.component';
import {EmployeeAddComponent} from './components/employees/elements/employee-add/employee-add.component';
import {EmployeeListComponent} from './components/employees/elements/employee-list/employee-list.component';
import {CalculatePipe} from './pipes/calculate.pipe';

@NgModule({
  declarations: [
    EmployeeAddComponent,
    FinalListComponent,
    EmployeeListComponent,
    EmployeesComponent,
    CalculatePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
})
export class FinalListModule {
}
