import { Injectable } from '@angular/core';
import { Image } from '../interfaces/home.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GalleryNewNftsService {
  private images: Image[] = [
    { id: 1, title: 'Image 1', category: 'Option One', url: '../../../../assets/carousel-01.png' },
    { id: 2, title: 'Image 2', category: 'Option Two', url: '../../../../assets/carousel-02.png' },
    { id: 3, title: 'Image 3', category: 'Option Three', url: '../../../../assets/carousel-03.png' },
  ];

  getImages(): Image[] {
    return this.images;
  }

  getCategories(): string[] {
    return Array.from(new Set(this.images.map((image) => image.category)));
  }

  getImagesByCategory(category: string): Image[] {
    return this.images.filter((image) => image.category === category);
  }

  constructor() { }
}
