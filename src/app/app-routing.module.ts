import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/pages/home/home.component';
import { NftArtsComponent } from './nft-arts/pages/nft-arts/nft-arts.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'NFT Home' },
  { path: 'home', component: HomeComponent, title: 'NFT Home' },
  { path: 'nft-arts', component: NftArtsComponent, title: 'NFT Arts'},
  { path: '**', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
