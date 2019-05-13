import { BasicsCoreSharedFeatureComponent } from './basics-core-shared-feature/basics-core-shared-feature.component';
import { BasicsRoutesModule } from './basics-routes';
import { NgModule } from '@angular/core';
import { BasicsHomeComponent } from './basics-home/basics-home.component';
import { BasicsRoutingComponent } from './basics-routing/basics-routing.component';

@NgModule({
  declarations: [
    BasicsHomeComponent,
    BasicsRoutingComponent,
    BasicsCoreSharedFeatureComponent
  ],
  imports: [
    BasicsRoutesModule
  ]
})

export class BasicsModule {

}
