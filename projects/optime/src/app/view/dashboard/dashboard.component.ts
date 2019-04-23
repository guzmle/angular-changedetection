import {Component, OnInit} from '@angular/core';
import {GenerateListService} from 'projects/shared/src/app/shared/services/generate-list.service';

@Component({
  selector: 'optime-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  listOne = [];
  listTwo = [];

  constructor(private service: GenerateListService) {
  }

  ngOnInit() {
    this.listOne = this.service.generate();
    this.listTwo = this.service.generate();
  }


}
