import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Fish } from '../../ts/models';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ MatTableModule ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  displayedColumns: string[] = [ 'amount', 'name', 'price' ];
  fishes: Fish[] = [];
  amounts = new Map<number, number>();

  constructor() {
    const cartJson = sessionStorage.getItem('cart');
    if (cartJson !== null) {
      const cart: Fish[] = JSON.parse(cartJson);
      cart.forEach(f => {
        let currentAmount = this.amounts.get(f.id) || 0;
        this.amounts.set(f.id, currentAmount + 1);
      });
    }

    console.dir(this.fishes);
    console.dir(this.amounts);
  }

  getCartArray() {
    let cartArray: { fish: Fish; amount: number; }[] = [];
    this.amounts.forEach((value, key) => {
      cartArray.push({ fish: this.fishes[value], amount: key });
    });

    return cartArray;
  }
}
