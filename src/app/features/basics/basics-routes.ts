import { BasicsComponentCommunicateComponent } from './basics-component-communicate/basics-component-communicate.component';
import { BasicsCoreSharedFeatureComponent } from './basics-core-shared-feature/basics-core-shared-feature.component';
import { BasicsRoutingComponent } from './basics-routing/basics-routing.component';
import { BasicsHomeComponent } from './basics-home/basics-home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const basicsRoutes: Routes = [
  { path: '', component: BasicsHomeComponent, children: [
      { path: 'routing', component: BasicsRoutingComponent },
      { path: 'coresharedfeature', component: BasicsCoreSharedFeatureComponent },
      { path: 'componentcommunicate', component: BasicsComponentCommunicateComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(basicsRoutes)],
  exports: [RouterModule]
})

export class BasicsRoutesModule {

}
