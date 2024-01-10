import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NftArtsComponent } from '../pages/nft-arts/nft-arts.component';

const routes: Routes = [
  {
    path: '',
    component: NftArtsComponent,
    title: 'NFT Arts'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NftArtsRoutingModule { }
