import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  constructor(private _productSerice : ProductService) { }

  private _id: number;
  albumInfo ;

  ngOnInit() {
    this._productSerice.getAlbum(1)
    .subscribe((response)=>{
      this.albumInfo = response.json();
      console.log(this.albumInfo.name);
    });
  }

}
