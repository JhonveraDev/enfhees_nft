import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { HowItWorksRoutingRoutingModule } from './routes/how-it-works-routing-routing.module';



@NgModule({
  declarations: [
    HowItWorksComponent
  ],
  imports: [
    CommonModule,
    HowItWorksRoutingRoutingModule
  ]
})
export class HowItWorksModule { }
