import { NgrxEffectsComponent } from './ngrx-effects/ngrx-effects.component';
import { NgrxAboutComponent } from './ngrx-about/ngrx-about.component';
import { NgrxHomeComponent } from './ngrx-home/ngrx-home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgrxReduxComponent } from './ngrx-redux/ngrx-redux.component';

const ngrxRoutes: Routes = [
  { path: '', component: NgrxHomeComponent, children: [
    { path: 'about', component: NgrxAboutComponent },
    { path: 'redux', component: NgrxReduxComponent },
    { path: 'effects', component: NgrxEffectsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ngrxRoutes)],
  exports: [RouterModule]
})

export class NgrxRoutesModule {

}
