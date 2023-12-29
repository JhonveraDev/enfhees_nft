import { Injectable } from '@angular/core';
import { NewNft } from '../interfaces/home.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GalleryNewNftsService {
  private images: NewNft[] = [
    { id: 1, title: 'Image 1', category: 'Option One', url: '../../../../assets/carousel-01.png' },
    { id: 2, title: 'Image 2', category: 'Option Two', url: '../../../../assets/carousel-02.png' },
    { id: 3, title: 'Image 3', category: 'Option Three', url: '../../../../assets/carousel-03.png' },
  ];

  constructor() { }

  getImages(): NewNft[] {
    return this.images;
  }

  getCategories(): string[] {
    return ['All', ...Array.from(new Set(this.images.map((image) => image.category)))];
  }


  getImagesByCategory(category: string): NewNft[] {
    if (category === 'All') {
      return this.images;
    } else {
      return this.images.filter((image) => image.category === category);
    }
  }
}
