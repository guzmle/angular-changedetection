import {Injectable} from '@angular/core';
import {Employees} from '../models/Employees';
import {GenerateListService} from './generate-list.service';

@Injectable()
export class EmployeesService {

  constructor(private _model: Employees, private remote: GenerateListService) {
  }

  public getData() {
    this._model.setData(this.remote.generate());
  }

  public addEmployee(name) {
    this._model.add(name);
  }

  public removeEmployee(position) {
    this._model.remove(position);
  }

  public get model() {
    return this._model.list.asObservable();
  }
}
