import {Injectable} from '@angular/core';
import {EmployeeData} from '../interfaces/EmployeeData';
import {AppUtils} from '../utils/AppUtils';

@Injectable({
  providedIn: 'root'
})
export class GenerateListService {

  constructor() {
  }

  generate(): EmployeeData[] {
    const list: EmployeeData[] = [];
    for (let i = 0; i < 50; i++) {
      list.push({label: `label ${i}`, num: AppUtils.generateNum()});
    }

    return list;
  }
}
