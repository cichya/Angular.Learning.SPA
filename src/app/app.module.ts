import { CoreModule } from './core/core.module';
import { AppRoutesModule } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      AppRoutesModule,
      BrowserModule,
      CoreModule,
      BsDropdownModule.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
