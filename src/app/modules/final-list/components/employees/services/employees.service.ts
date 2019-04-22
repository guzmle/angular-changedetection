import {Injectable} from '@angular/core';

import {GenerateListService} from '../../../../../shared/services/generate-list.service';

import {EmployeesModel} from '../models/employees.model';

@Injectable()
export class EmployeesService {

  constructor(private _model: EmployeesModel, private remote: GenerateListService) {
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
