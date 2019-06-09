import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { RxjsShortcutComponent } from './rxjs-shortcut/rxjs-shortcut.component';
import { RxjsSubscribeComponent } from './rxjs-subscribe/rxjs-subscribe.component';
import { RxjsHomeComponent } from './rxjs-home/rxjs-home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const rxjsRoutes: Routes = [
  { path: '', component: RxjsHomeComponent, children: [
    { path: 'subscribe', component: RxjsSubscribeComponent },
    { path: 'about', component: RxjsShortcutComponent},
    { path: 'operators', component: RxjsOperatorsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(rxjsRoutes)],
  exports: [RouterModule]
})

export class RxjsRoutesModule {

}
