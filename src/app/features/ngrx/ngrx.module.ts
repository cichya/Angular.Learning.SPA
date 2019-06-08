import { CommonModule } from '@angular/common';
import { NgrxEffectsComponent } from './ngrx-effects/ngrx-effects.component';
import { NgrxReduxComponent } from './ngrx-redux/ngrx-redux.component';
import { NgrxAboutComponent } from './ngrx-about/ngrx-about.component';
import { NgrxHomeComponent } from './ngrx-home/ngrx-home.component';
import { NgModule } from '@angular/core';
import { NgrxRoutesModule } from './ngrx.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NgrxHomeComponent,
    NgrxAboutComponent,
    NgrxReduxComponent,
    NgrxEffectsComponent
  ],
  imports: [
    NgrxRoutesModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})

export class NgrxModule {

}
