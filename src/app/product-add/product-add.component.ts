import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductType } from '../product/product';
import { ProductService } from '../product.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  // @Output() newProductEvent = new EventEmitter<ProductType>();

  product: ProductType = {
    id: 0,
    name: '',
    price: 0,
    status: false,
    img: '',
    desc: ''
  };
  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit() { }
  onAddProduct() {
    // this.newProductEvent.emit(this.product);
    this.productService.addProduct(this.product).subscribe(data => {
      this.router.navigateByUrl('/product');
    });
  }
}
