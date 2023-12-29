import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RecentUsersComponent } from './components/recent-users/recent-users.component';
import { RecentNftComponent } from './components/recent-nft/recent-nft.component';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    RecentUsersComponent,
    RecentNftComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [

  ]
})
export class HomeModule { }