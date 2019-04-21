import {Injectable} from '@angular/core';

import {EmployeeData} from '../../../../../shared/interfaces/EmployeeData';

@Injectable()
export class EmployeesModel {
  private _list: EmployeeData[];

  public get list() {
    this._list = Object.assign([], this._list);
    return this._list;
  }

  public set list(list: EmployeeData[]) {
    this._list = list;
  }
}
