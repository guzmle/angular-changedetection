import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BadListComponent} from './modules/bad-list/views/list/bad-list.component';
import {OptimizedListComponent} from './modules/optimized-list/views/list/optimized-list.component';
import {FinalListComponent} from './modules/final-list/views/list/component/final-list.component';

const routes: Routes = [
  {
    path: 'bad-list',
    component: BadListComponent
  },
  {
    path: 'optimized-list',
    component: OptimizedListComponent
  },
  {
    path: 'final-list',
    component: FinalListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
