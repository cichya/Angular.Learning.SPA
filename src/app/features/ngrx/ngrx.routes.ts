import { NgrxHomeComponent } from './ngrx-home/ngrx-home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const ngrxRoutes: Routes = [
  { path: '', component: NgrxHomeComponent, children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ngrxRoutes)],
  exports: [RouterModule]
})

export class NgrxRoutesModule {

}
