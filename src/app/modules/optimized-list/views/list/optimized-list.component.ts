import {Component, OnInit} from '@angular/core';
import {GenerateListService} from '../../../../shared/services/generate-list.service';

@Component({
  selector: 'app-optimized-list',
  templateUrl: './optimized-list.component.html'
})
export class OptimizedListComponent implements OnInit {

  listOne = [];
  listTwo = [];

  constructor(private service: GenerateListService) {
  }

  ngOnInit() {
    this.listOne = this.service.generate();
    this.listTwo = this.service.generate();
  }


}
