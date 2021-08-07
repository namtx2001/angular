import { Component, OnInit, Input } from '@angular/core';
import { ProductType } from './product'
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() products: ProductType[];
  validForm = false;
  detail: ProductType = {
    id: 0,
    name: "Product",
    price: 0,
    status: false,
    img: '',
    desc: ''
  }





  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe(data => {

      this.products = data;
    });

  }
  onHandleRemote(id: number) {
    this.productService.removeProduct(id).subscribe(data => {
      this.products = this.products.filter(item => item.id != data.id)
    });
  }














  onHandleChangeStatus() {
    // this.product.status = !this.product.status
  }
  onHandleChangeName(e: any) {
    // this.product.name = e.target.value
  }
  onDetail(product: ProductType) {
    // console.log(product);
    // this.detail = product;
  }
}
