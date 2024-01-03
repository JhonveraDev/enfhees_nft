import { Injectable } from '@angular/core';
import { NewNft } from '../interfaces/home.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GalleryNewNftsService {
  private images: NewNft[] = [
    { id: 1, title: 'Art work #2134', category: 'Fashion', url: '../../../../assets/1.jpeg', price: '0.29 ETH 7/21', user: 'Johny E.', avatar: '../../../../assets/avatar_13.png' },
    { id: 2, title: 'Cool octopus traveling', category: 'Fashion', url: '../../../../assets/2.jpeg', price: '0.24 ETH 4/17', user: 'Debit A.', avatar: '../../../../assets/avatar_12.png' },
    { id: 3, title: 'Octopus eating icecrem', category: 'Music', url: '../../../../assets/3.jpeg', price: '0.09 ETH 1/9', user: 'Jhon V.', avatar: '../../../../assets/avatar_13.png' },
    { id: 4, title: 'Panda with fish', category: 'Video', url: '../../../../assets/4.jpeg', price: '0.19 ETH 5/11', user: 'Jean P.', avatar: '../../../../assets/avatar_12.png' },
    { id: 5, title: 'Kawaii-bubble-tea', category: 'Games', url: '../../../../assets/5.jpeg', price: '0.29 ETH 11/19', user: 'Austin R.', avatar: '../../../../assets/avatar_13.png' },
    { id: 6, title: 'Cute monsters hallo', category: 'Games', url: '../../../../assets/6.jpeg', price: '0.19 ETH 7/13', user: 'Saruman T.', avatar: '../../../../assets/avatar_12.png' },
    { id: 7, title: 'Cat-mascot-character', category: 'Video', url: '../../../../assets/7.jpeg', price: '0.28 ETH 21/91', user: 'Gallant Z.', avatar: '../../../../assets/avatar_13.png' },
    { id: 8, title: 'Small kid with orange', category: 'Games', url: '../../../../assets/8.jpeg', price: '0.17 ETH 14/23', user: 'Thorfin T.', avatar: '../../../../assets/avatar_12.png' },
    { id: 9, title: 'Digital Cat Illustration', category: 'Fashion', url: '../../../../assets/9.jpeg', price: '0.09 ETH 10/91', user: 'Roberto A.', avatar: '../../../../assets/avatar_13.png' },
    { id: 10, title: 'Fictional character', category: 'Music', url: '../../../../assets/10.jpeg', price: '0.06 ETH 11/109', user: 'Samantha S.', avatar: '../../../../assets/avatar_12.png' },
  ];

  constructor() { }

  getImages(): NewNft[] {
    return this.images;
  }

  getCategories(): string[] {
    return ['All NFTs', ...Array.from(new Set(this.images.map((image) => image.category)))];
  }

  getImagesByCategory(category: string): NewNft[] {
    if (category === 'All NFTs') {
      return this.images;
    } else {
      return this.images.filter((image) => image.category === category);
    }
  }
}
//Terminar las tarjetas y los usuarios deben ser cargados por un servicio