import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';



@NgModule({
  declarations: [
    MainMenuComponent,
    MainFooterComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    MainMenuComponent
  ]
})
export class SharedModule { }
