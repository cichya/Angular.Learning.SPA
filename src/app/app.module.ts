import { CoreModule } from './core/core.module';
import { AppRoutesModule } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';

import * as fromApp from './store/app.reducer';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      AppRoutesModule,
      BrowserModule,
      CoreModule,
      SharedModule,
      StoreModule.forRoot(fromApp.appReducer)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
