import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutesModule } from './../routes';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    NavComponent,
    HomeComponent
  ],
  imports: [
    AppRoutesModule,
    BsDropdownModule.forRoot()
  ],
  exports: [
    AppRoutesModule,
    NavComponent
],
  providers: []
})

export class CoreModule {

}
