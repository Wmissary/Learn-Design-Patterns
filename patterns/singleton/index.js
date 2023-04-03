/* First solution */

export class ShoppingCart {
  constructor() {
    if (ShoppingCart.instance) {
      return ShoppingCart.instance;
    }
    ShoppingCart.instance = this;
    this.items = [];
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
  getItems() {
    return this.items;
  }
  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

/* Second solution */

class ShoppingCart2 {
  constructor() {
    this.items = [];
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
  getItems() {
    return this.items;
  }
  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

const instance = new ShoppingCart2();
Object.freeze(instance);
export { instance as shoppingCart2 };

/* Third solution */

export const shoppingCart3 = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
  },
  getItems() {
    return this.items;
  },
  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  },
};
