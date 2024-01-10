import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurArtistsComponent } from './pages/our-artists/our-artists.component';
import { OurArtistsRoutingModule } from './routes/our-artists-routing.module';



@NgModule({
  declarations: [
    OurArtistsComponent
  ],
  imports: [
    CommonModule,
    OurArtistsRoutingModule
  ]
})
export class OurArtistsModule { }
