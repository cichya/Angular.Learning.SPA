import { BasicsComponentCommunicateComponent } from './basics-component-communicate/basics-component-communicate.component';
// tslint:disable-next-line:max-line-length
import { BasicsComponentCommunicateChildComponent } from './basics-component-communicate-child/basics-component-communicate-child.component';
// tslint:disable-next-line:max-line-length
import { BasicsComponentCommunicateParentComponent } from './basics-component-communicate-parent/basics-component-communicate-parent.component';
import { BasicsCoreSharedFeatureComponent } from './basics-core-shared-feature/basics-core-shared-feature.component';
import { BasicsRoutesModule } from './basics-routes';
import { NgModule } from '@angular/core';
import { BasicsHomeComponent } from './basics-home/basics-home.component';
import { BasicsRoutingComponent } from './basics-routing/basics-routing.component';
// tslint:disable-next-line:max-line-length
import { BasicsComponentCommunicateChildTwoComponent } from './basics-component-communicate-child-two/basics-component-communicate-child-two.component';

@NgModule({
  declarations: [
    BasicsHomeComponent,
    BasicsRoutingComponent,
    BasicsCoreSharedFeatureComponent,
    BasicsComponentCommunicateComponent,
    BasicsComponentCommunicateParentComponent,
    BasicsComponentCommunicateChildComponent,
    BasicsComponentCommunicateChildTwoComponent
  ],
  imports: [
    BasicsRoutesModule
  ]
})

export class BasicsModule {

}
