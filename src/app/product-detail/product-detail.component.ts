import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductType } from '../product/product';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: ProductType;

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService

  ) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    this.activateRoute.params.subscribe(params => { //subscribe lắng nghe sự thay đổi của url
      console.log('params', params);
      this.productService.get(params.id).subscribe(data => {
        this.product = data;
      });
    });
  }

}
