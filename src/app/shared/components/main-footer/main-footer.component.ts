import { Component } from '@angular/core';
import { SocialItem } from '../../interfaces/shared.interface';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.css']
})
export class MainFooterComponent {
  marketplace: string[] = ['All NFTs', 'Popular Art', 'Digital Art', 'Trending', 'Explore Details', 'Live Action'];
  account: string[] = ['Profile', 'My Collection', 'Create & Upload', 'Account Setting', 'Connect wallet', 'Wishlist'];
  company: string[] = ['Recent News', 'How it Works', 'About Us', 'Contact Us', 'Help Center & FAQ'];
  socialItem: SocialItem[] = [
    { image: '../../../../assets/facebook.svg', alt: 'Facebook Logo' },
    { image: '../../../../assets/twitter.svg', alt: 'Twitter Logo' },
    { image: '../../../../assets/linkedin.svg', alt: 'Linkedin Logo' },
    { image: '../../../../assets/instagram.svg', alt: 'Instagram Logo' },
    { image: '../../../../assets/whatsapp.svg', alt: 'Whatsapp Logo' },
    { image: '../../../../assets/github.svg', alt: 'Github Logo' },
  ]
}
