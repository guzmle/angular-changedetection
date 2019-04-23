import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FinallyRouting} from './view/finally-routing.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => FinallyRouting
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
