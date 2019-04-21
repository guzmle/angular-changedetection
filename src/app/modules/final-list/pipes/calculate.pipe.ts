import {Pipe, PipeTransform} from '@angular/core';
import {AppUtils} from '../../../shared/utils/AppUtils';
import {Memoize} from 'typescript-memoize';

@Pipe({name: 'calculate'})
export class CalculatePipe implements PipeTransform {

  @Memoize()
  transform(value): number {
    console.log('calculate', value);
    return AppUtils.fibonacci(value);
  }
}
