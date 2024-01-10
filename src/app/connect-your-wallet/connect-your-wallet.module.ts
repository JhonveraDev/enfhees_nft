import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectYourWalletComponent } from './pages/connect-your-wallet/connect-your-wallet.component';
import { ConnectYourWalletRoutingModule } from './routes/connect-your-wallet-routing.module';



@NgModule({
  declarations: [
    ConnectYourWalletComponent
  ],
  imports: [
    CommonModule,
    ConnectYourWalletRoutingModule
  ]
})
export class ConnectYourWalletModule { }
