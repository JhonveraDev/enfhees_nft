import { Component, OnInit } from '@angular/core';
import { GalleryNewNftsService } from '../../services/gallery-new-nfts.service';
import { NewNft } from '../../interfaces/home.interfaces';

@Component({
  selector: 'app-recent-nft',
  templateUrl: './recent-nft.component.html',
  styleUrls: ['./recent-nft.component.css']
})
export class RecentNftComponent implements OnInit {
  images: NewNft[] = [];
  categories: string[] = [];
  selectedCategory: string = '';

  constructor(private _GalleryNewNftsService: GalleryNewNftsService) { }

  ngOnInit() {
    this.images = this._GalleryNewNftsService.getImages();
    this.categories = this._GalleryNewNftsService.getCategories();
    this.selectedCategory = 'All NFT';
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.images = this._GalleryNewNftsService.getImagesByCategory(category);
  }
}
