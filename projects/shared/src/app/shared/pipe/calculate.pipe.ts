import {Pipe, PipeTransform} from '@angular/core';
import {AppUtils} from '../utils/AppUtils';

@Pipe({
  name: 'calculate'
})
export class CalculatePipe implements PipeTransform {


  transform(value): number {
    return AppUtils.fibonacci(value);
  }

}
