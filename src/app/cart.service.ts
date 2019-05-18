import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private data = [
    {
      category: 'combo',
      expanded: true,
      products: [
        { id: 0, name: 'COMB/CASA', price: '110', imageUrl: '/assets/images/ham.jpg' },
        { id: 1, name: 'COMB/AP', price: '90', imageUrl: '/assets/images/classic.jpg' },
        { id: 2, name: 'TV', price: '54', imageUrl: '/assets/images/tuna.jpg' },
        { id: 3, name: 'PONTO', price: '30', imageUrl: '/assets/images/hawai.jpg' }
      ]
    },
    {
      category: 'combao',
      products: [
        { id: 4, name: 'COMBAO/C ', price: '134', imageUrl: '/assets/images/mac.jpg' },
        { id: 5, name: 'COMBAO/AP', price: '122', imageUrl: '/assets/images/bolagnese.jpg' }
      ]
    },
    {
      category: 'acesso',
      products: [
        { id: 6, name: 'ACESSO/CASA', price: '54', imageUrl: '/assets/images/salami.jpg'  },
        { id: 7, name: 'ACESSOAP/', price: '41', imageUrl: '/assets/images/basic.jpg'  },
        { id: 8, name: 'VOIP', price: '30', imageUrl: '/assets/images/ceaser.jpg'  }
      ]
    }
  ];

  private cart = [];

  constructor() { }

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  addProduct(product) {
    this.cart.push(product);
  }
}
