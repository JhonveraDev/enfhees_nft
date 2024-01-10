import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurArtistsComponent } from '../pages/our-artists/our-artists.component';

const routes: Routes = [
  {
    path: '',
    component: OurArtistsComponent,
    title: 'Our Artists'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OurArtistsRoutingModule { }
