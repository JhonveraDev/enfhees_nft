import { Injectable } from '@angular/core';
import { NewNft } from '../interfaces/home.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GalleryNewNftsService {
  private images: NewNft[] = [
    { id: 1, title: 'Image 1', category: 'Fashion', url: '../../../../assets/1.jpeg' },
    { id: 2, title: 'Image 2', category: 'Fashion', url: '../../../../assets/2.jpeg' },
    { id: 3, title: 'Image 3', category: 'Music', url: '../../../../assets/3.jpeg' },
    { id: 4, title: 'Image 4', category: 'Video', url: '../../../../assets/4.jpeg' },
    { id: 5, title: 'Image 5', category: 'Games', url: '../../../../assets/5.jpeg' },
    { id: 6, title: 'Image 6', category: 'Games', url: '../../../../assets/6.jpeg' },
    { id: 7, title: 'Image 7', category: 'Video', url: '../../../../assets/7.jpeg' },
    { id: 8, title: 'Image 8', category: 'Games', url: '../../../../assets/8.jpeg' },
    { id: 9, title: 'Image 9', category: 'Fashion', url: '../../../../assets/9.jpeg' },
    { id: 10, title: 'Image 10', category: 'Music', url: '../../../../assets/10.jpeg' },
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