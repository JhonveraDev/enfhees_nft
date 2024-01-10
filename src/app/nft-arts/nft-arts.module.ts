import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NftArtsComponent } from './pages/nft-arts/nft-arts.component';
import { NftArtsRoutingModule } from './routes/nft-arts-routing.module';



@NgModule({
  declarations: [
    NftArtsComponent
  ],
  imports: [
    CommonModule,
    NftArtsRoutingModule
  ]
})
export class NftArtsModule { }
