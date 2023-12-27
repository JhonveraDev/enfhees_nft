import { Component } from '@angular/core';
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})

export class MainMenuComponent {
  navigationItems = [
    { route: '/home', name: 'Home' },
    { route: '/nft-arts', name: 'Nft arts' },
    { route: '/our-artists', name: 'Our artists' },
    { route: '/how-it-works', name: 'How it works' },
    { route: '/connect-your-wallet', name: 'Connect your wallet' },
    { route: '/contact', name: 'Contact' }
  ]
}