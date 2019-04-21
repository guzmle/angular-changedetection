import {Injectable} from '@angular/core';

import {GenerateListService} from '../../../../../shared/services/generate-list.service';

import {EmployeesModel} from '../models/employees.model';
import {AppUtils} from '../../../../../shared/utils/AppUtils';

@Injectable()
export class EmployeesService {

  constructor(private model: EmployeesModel, private remote: GenerateListService) {
  }

  public getData() {
    this.model.list = this.remote.generate();

    return this.model.list;
  }

  public addEmployee(name) {
    this.model.list.unshift({label: name, num: AppUtils.generateNum()});

    return this.model.list;
  }

  public removeEmployee(position) {
    this.model.list.splice(position, 1);

    return this.model.list;
  }
}
