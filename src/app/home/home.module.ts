import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RecentUsersComponent } from './components/recent-users/recent-users.component';
import { RecentNftComponent } from './components/recent-nft/recent-nft.component';

import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './routes/home-routing.module';
import { TopCollectionComponent } from './components/top-collection/top-collection.component';
@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    RecentUsersComponent,
    RecentNftComponent,
    TopCollectionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ],
  exports: [

  ]
})
export class HomeModule { }