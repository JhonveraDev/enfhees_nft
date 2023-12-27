import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    MainMenuComponent,
    MainFooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ], 
  exports: [
    MainMenuComponent,
    MainFooterComponent
  ]
})
export class SharedModule { }
