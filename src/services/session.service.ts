import { Injectable } from '@angular/core';
import { User, Fish } from '../ts/models';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  API_ENDPOINT: string = "http://localhost:3000/api";
  loggedIn: boolean = false;
  user: User | undefined = undefined;

  users: User[] = [
    {
      userName: 'pino',
      password: 'daniele',
      pfpUrl: 'https://i.redd.it/fat-tux-i-created-this-simple-tux-logo-for-fun-v0-w9zk1c24wgz91.png?auto=webp&s=78ae0dec3e65420a44af1ad983f9b708b3efb73f'
    }
  ]

  catalog: Fish[] = [];
  // catalog: Fish[] = [
  //   {
  //     id: 0,
  //     name: 'Pesce angelo',
  //     water: 'saltwater',
  //     colors: ['blue', 'yellow', 'light blue'],
  //     length: 15,
  //     imageUrl: 'https://misanimales.com/wp-content/uploads/2021/06/pez-angel-reina-amarillo.jpg',
  //     price: 30
  //   },
  //   {
  //     id: 1,
  //     name: 'Pesce pagliaccio',
  //     water: 'saltwater',
  //     colors: ['orange', 'white'],
  //     length: 10,
  //     imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Amphiprion_ocellaris_%28Clown_anemonefish%29_Nemo.jpg/960px-Amphiprion_ocellaris_%28Clown_anemonefish%29_Nemo.jpg',
  //     price: 40
  //   },
  //   {
  //     id: 2,
  //     name: 'Pesce pietra',
  //     water: 'saltwater',
  //     colors: ['orange', 'black'],
  //     length: 24,
  //     imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Stone_Fish_at_AQWA_SMC2006.jpg/959px-Stone_Fish_at_AQWA_SMC2006.jpg',
  //     price: 42
  //   },
  //   {
  //     id: 3,
  //     name: 'Pesce pappagallo',
  //     water: 'saltwater',
  //     colors: ['light blue', 'pink'],
  //     length: 100,
  //     imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Bicolor_parrotfish.JPG/640px-Bicolor_parrotfish.JPG',
  //     price: 69
  //   }
  // ]

  async login(email: string, password: string) {
    const creds = { 'email': email, 'password': password };
    fetch(this.API_ENDPOINT + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(creds)
    })
    .then(res => res.json())
    .then(data => {
      this.user = data;
      sessionStorage.setItem('user', JSON.stringify(this.user));
    })
    .catch(err => console.error('Error logging in:', err));
  }

  logout() {
    sessionStorage.removeItem('user');
  }

  async fetchCatalog() {
    fetch(this.API_ENDPOINT + '/catalog')
    .then(res => res.json())
    .then(data => this.catalog = data);
  }

  addToCart(fish: Fish) {
    var cartJson = sessionStorage.getItem('cart');
    var cart = cartJson !== null ? JSON.parse(cartJson) : [];
    cart.push(fish);
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }
}
