import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Product} from './product';
import {products} from './productMockUp'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // getProducts():Product[]{
  //   return products; // if the products not come it will pass as undefined
  // }

  getProducts(): Observable<Product[]>{
    return of(products);
  }
}
