import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalculatePipe} from './pipe/calculate.pipe';
import {GenerateListService} from './services/generate-list.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CalculatePipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    GenerateListService
  ],
  exports: [
    CommonModule,
    FormsModule,
    CalculatePipe
  ]
})
export class SharedModule {
}
