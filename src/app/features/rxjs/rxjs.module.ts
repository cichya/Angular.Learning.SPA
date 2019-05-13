import { RxjsRoutesModule } from './rxjs-routes';
import { RxjsHomeComponent } from './rxjs-home/rxjs-home.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    RxjsHomeComponent
  ],
  imports: [
    RxjsRoutesModule
  ]
})

export class RxjsModule {

}
