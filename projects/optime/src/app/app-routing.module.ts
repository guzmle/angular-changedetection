import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OptimeRouting} from './view/optime-routing.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => OptimeRouting
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
