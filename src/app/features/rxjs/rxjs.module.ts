import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { RxjsShortcutComponent } from './rxjs-shortcut/rxjs-shortcut.component';
import { RxjsSubscribeComponent } from './rxjs-subscribe/rxjs-subscribe.component';
import { RxjsRoutesModule } from './rxjs-routes';
import { RxjsHomeComponent } from './rxjs-home/rxjs-home.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    RxjsHomeComponent,
    RxjsSubscribeComponent,
    RxjsShortcutComponent,
    RxjsOperatorsComponent
  ],
  imports: [
    RxjsRoutesModule
  ]
})

export class RxjsModule {

}
