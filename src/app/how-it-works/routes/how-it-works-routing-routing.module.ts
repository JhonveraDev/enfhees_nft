import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowItWorksComponent } from '../pages/how-it-works/how-it-works.component';

const routes: Routes = [
  { 
    path: '', 
    component: HowItWorksComponent, 
    title: 'How It Works' 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HowItWorksRoutingRoutingModule { }
