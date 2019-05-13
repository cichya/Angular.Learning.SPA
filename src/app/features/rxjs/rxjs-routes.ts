import { RxjsHomeComponent } from './rxjs-home/rxjs-home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const rxjsRoutes: Routes = [
  { path: '', component: RxjsHomeComponent, children: [

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(rxjsRoutes)],
  exports: [RouterModule]
})

export class RxjsRoutesModule {

}
