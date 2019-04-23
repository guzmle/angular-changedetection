import {Injectable} from '@angular/core';
import {AppUtils} from '../utils/AppUtils';
import {IEmployee} from '../models/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class GenerateListService {

  constructor() {
  }

  generate(): IEmployee[] {
    const list: IEmployee[] = [];
    for (let i = 0; i < 50; i++) {
      list.push({label: `label ${i}`, num: AppUtils.generateNum()});
    }

    return list;
  }
}
