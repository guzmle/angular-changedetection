import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BadRouting} from './view/bad-routing.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => BadRouting
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
