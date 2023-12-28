import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/pages/home/home.component';
import { NftArtsComponent } from './nft-arts/pages/nft-arts/nft-arts.component';
import { OurArtistsComponent } from './our-artists/pages/our-artists/our-artists.component';
import { HowItWorksComponent } from './how-it-works/pages/how-it-works/how-it-works.component';
import { ConnectYourWalletComponent } from './connect-your-wallet/pages/connect-your-wallet/connect-your-wallet.component';
import { ContactComponent } from './contact/pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'NFT Home' },
  { path: 'home', component: HomeComponent, title: 'NFT Home' },
  { path: 'nft-arts', component: NftArtsComponent, title: 'NFT Arts' },
  { path: 'our-artists', component: OurArtistsComponent, title: 'Our Artits' },
  { path: 'how-it-works', component: HowItWorksComponent, title: 'How It Works' },
  { path: 'connect-your-wallet', component: ConnectYourWalletComponent, title: 'Connect Your Wallet' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
