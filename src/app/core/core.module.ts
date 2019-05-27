import { RxjsService } from './rxjs.service';
import { AppRoutesModule } from './../routes';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NavComponent,
    HomeComponent
  ],
  imports: [
    AppRoutesModule,
    SharedModule
  ],
  exports: [
    AppRoutesModule,
    NavComponent
],
  providers: [
    RxjsService
  ]
})

export class CoreModule {

}
