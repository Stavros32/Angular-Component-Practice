import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { products } from './productMockUp';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products!:Product[];
  constructor(private service:ProductService) {}


  
  ngOnInit(): void {
    // this.products = this.service.getProducts();

    this.service.getProducts().subscribe(ProductObjects => this.products=ProductObjects)
  }

}
