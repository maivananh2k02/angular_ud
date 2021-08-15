import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products = [
    {
      id: 1,
      name: 'vanh',
      price: 12,
      image: './assets/anh-buon-1.jpg',
      desc: 'abc',
      qty: 1
    },
    {
      id: 2,
      name: 'huyen',
      price: 20,
      image: './assets/tải xuống.jpeg',
      desc: 'abc',
      qty: 1
    }
  ];

  delete(productId: number): void {
    let index = this.products.findIndex(product => product.id == productId);
    this.products.splice(index, 1);
  }

  updateQty(element: HTMLInputElement,productId:number) {
    let index = this.products.findIndex(product => product.id == productId);
    this.products[index].qty=Number(element.value);

  }

  total(){
    let numberItem: number = 0;
    let total: number = 0;

    for (let product of this.products) {
      numberItem += product.qty;
      total += product.qty*product.price ;
    }
    return total;
  }
}


