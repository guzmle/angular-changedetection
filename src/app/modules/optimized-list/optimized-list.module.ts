import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeAddComponent} from './elements/employee-add/employee-add.component';
import {EmployeeListComponent} from './elements/employee-list/employee-list.component';
import {EmployeesComponent} from './components/employees/employees.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {OptimizedListComponent} from './views/list/optimized-list.component';
import {CalculatePipe} from './pipes/calculate.pipe';

@NgModule({
  declarations: [
    EmployeeAddComponent,
    OptimizedListComponent,
    EmployeeListComponent,
    EmployeesComponent,
    CalculatePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class OptimizedListModule {
}
