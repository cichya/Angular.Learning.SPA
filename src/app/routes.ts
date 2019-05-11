import { HomeComponent } from './home/home.component';
import { BasicsRoutingComponent } from './basics-routing/basics-routing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'routing', component: BasicsRoutingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutesModule {

}
