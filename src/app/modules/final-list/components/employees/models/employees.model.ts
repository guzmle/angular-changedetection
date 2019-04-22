import {Injectable} from '@angular/core';

import {EmployeeData} from '../../../../../shared/interfaces/EmployeeData';
import {BehaviorSubject} from 'rxjs';
import {AppUtils} from '../../../../../shared/utils/AppUtils';

@Injectable()
export class EmployeesModel {
  private _list$ = new BehaviorSubject<EmployeeData[]>([]);

  public get list() {
    return this._list$;
  }

  public setData(list) {
    this._list$.next(list);
  }

  public add(name: string) {
    this._list$.next([{label: name, num: AppUtils.generateNum()}, ...this._list$.getValue()]);
  }

  public remove(index: number) {
    this._list$.getValue().splice(index, 1);
    this._list$.next([...this._list$.getValue()]);
  }
}
