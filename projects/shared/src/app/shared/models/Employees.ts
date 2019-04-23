import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IEmployee} from './IEmployee';
import {AppUtils} from '../utils/AppUtils';

@Injectable()
export class Employees {
  private _list$ = new BehaviorSubject<IEmployee[]>([]);

  public get list() {
    return this._list$;
  }

  public setData(list) {
    this._list$.next(list);
  }

  public add(name: string) {
    this._list$.next([
      {
        label: name,
        num: AppUtils.generateNum()
      },
      ...this._list$.getValue()
    ]);
  }

  public remove(index: number) {
    this._list$.getValue().splice(index, 1);
    this._list$.next([...this._list$.getValue()]);
  }
}
