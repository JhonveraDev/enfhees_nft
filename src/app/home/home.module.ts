import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RecentUsersComponent } from './components/recent-users/recent-users.component';
@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    RecentUsersComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [

  ]
})
export class HomeModule { }