import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectYourWalletComponent } from '../pages/connect-your-wallet/connect-your-wallet.component';

const routes: Routes = [
  { 
    path: '', 
    component: ConnectYourWalletComponent, 
    title: 'Connect Your Wallet' 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectYourWalletRoutingModule { }
