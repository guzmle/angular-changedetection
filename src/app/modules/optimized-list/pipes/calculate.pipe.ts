import {Pipe, PipeTransform} from '@angular/core';
import {AppUtils} from '../../../shared/utils/AppUtils';

@Pipe({name: 'calculate'})
export class CalculatePipe implements PipeTransform {
  transform(value): number {
    console.log('calculate', value);
    return AppUtils.fibonacci(value);
  }
}
