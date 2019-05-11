import { BasicsHomeComponent } from './features/basics/basics-home/basics-home.component';
import { AppRoutesModule } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BasicsRoutingComponent } from './features/basics/basics-routing/basics-routing.component';
import { HomeComponent } from './home/home.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      BasicsRoutingComponent,
      HomeComponent,
      BasicsHomeComponent
   ],
   imports: [
      AppRoutesModule,
      BrowserModule,
      BsDropdownModule.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
