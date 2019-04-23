import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BadRouting} from 'projects/bad/src/app/view/bad-routing.module';
import {OptimeRouting} from 'projects/optime/src/app/view/optime-routing.module';
import {FinallyRouting} from 'projects/finally/src/app/view/finally-routing.module';

const routes: Routes = [
  {
    path: 'bad',
    loadChildren: () => BadRouting
  },
  {
    path: 'optime',
    loadChildren: () => OptimeRouting
  },
  {
    path: 'final',
    loadChildren: () => FinallyRouting
  },
  {
    path: '',
    redirectTo: 'bad',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
