import { Injectable } from '@angular/core';
import { NewNft } from '../interfaces/home.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GalleryNewNftsService {
  private images: NewNft[] = [
    { id: 1, title: 'Image 1', category: 'Fashion', url: '../../../../assets/carousel-01.png' },
    { id: 2, title: 'Image 2', category: 'Fashion', url: '../../../../assets/carousel-02.png' },
    { id: 3, title: 'Image 3', category: 'Music', url: '../../../../assets/carousel-03.png' },
    { id: 4, title: 'Image 4', category: 'Video', url: '../../../../assets/carousel-02.png' },
    { id: 5, title: 'Image 5', category: 'Games', url: '../../../../assets/carousel-01.png' },
  ];
  firstAll: boolean = false


  constructor() { }

  getImages(): NewNft[] {
    return this.images;
  }

  getCategories(): string[] {
    return ['All NFT', ...Array.from(new Set(this.images.map((image) => image.category)))];
  }

  getImagesByCategory(category: string): NewNft[] {
    if (category === 'All NFT') {
      return this.images;
    } else {
      return this.images.filter((image) => image.category === category);
    }
  }
}
