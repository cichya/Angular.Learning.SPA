import { NgrxHomeComponent } from './ngrx-home/ngrx-home.component';
import { NgModule } from '@angular/core';
import { NgrxRoutesModule } from './ngrx.routes';

@NgModule({
  declarations: [
    NgrxHomeComponent
  ],
  imports: [
    NgrxRoutesModule
  ]
})

export class NgrxModule {

}
