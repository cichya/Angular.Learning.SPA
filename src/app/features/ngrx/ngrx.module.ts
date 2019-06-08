import { NgrxEffectsComponent } from './ngrx-effects/ngrx-effects.component';
import { NgrxReduxComponent } from './ngrx-redux/ngrx-redux.component';
import { NgrxAboutComponent } from './ngrx-about/ngrx-about.component';
import { NgrxHomeComponent } from './ngrx-home/ngrx-home.component';
import { NgModule } from '@angular/core';
import { NgrxRoutesModule } from './ngrx.routes';

@NgModule({
  declarations: [
    NgrxHomeComponent,
    NgrxAboutComponent,
    NgrxReduxComponent,
    NgrxEffectsComponent
  ],
  imports: [
    NgrxRoutesModule
  ]
})

export class NgrxModule {

}
