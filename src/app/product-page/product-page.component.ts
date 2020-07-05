import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor(private route:ActivatedRoute) {
    console.log(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit() {
  }

}
