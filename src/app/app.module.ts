import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BadListModule} from './modules/bad-list/bad-list.module';
import {OptimizedListModule} from './modules/optimized-list/optimized-list.module';
import {FinalListModule} from './modules/final-list/final-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BadListModule,
    OptimizedListModule,
    FinalListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
