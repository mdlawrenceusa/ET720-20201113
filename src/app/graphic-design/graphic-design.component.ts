import { Component, OnInit } from '@angular/core';

import { Lightbox } from 'ngx-lightbox';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-graphic-design',
  templateUrl: './graphic-design.component.html',
  styleUrls: ['./graphic-design.component.css']
})
export class GraphicDesignComponent implements OnInit {
  portfolioItems ;
  _albums: any = [] ;
  imgHeight = 357;

  constructor(
    private cartService: CartService,
    private _lightbox: Lightbox,
  ) {


   }

  ngOnInit() {
    this.portfolioItems = this.cartService.getPortfolio();
    
    this.cartService.getPortfolio().subscribe(data =>{
      console.log(data);
      this._albums = data;
    });

  }

  open(index: number): void {
    // open lightbox

    this._lightbox.open(this._albums, index);
  }
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

}