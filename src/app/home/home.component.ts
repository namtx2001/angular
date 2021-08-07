import { Component, OnInit, Input } from '@angular/core';
import { ProductType } from '../product/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() products: ProductType[];
  validForm = false;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe(data => {

      this.products = data;
    });

  }
}
