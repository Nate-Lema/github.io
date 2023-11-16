//This closure exercise involves a common real-world scenario.  

// This exercise uses closures to create a shopping cart. It encapsulates the cart array, allowing you to
//  add items, remove items, and calculate the total cost. The items and their prices are private and can only be 
//  accessed or modified through the provided methods, demonstrating the concept of closures in a different context.
// Exercise: Closure and a Shopping Cart

// Create a function that simulates a shopping cart. The cart should allow you to add items,
// remove items, and calculate the total cost. Items and their prices should be private
// and not directly accessible.

export type Item = {
    item: string;
    price: number;
}

export type Cart = {
    addItem: (item: string, price: number) => void;//(Item) => void;//
    removeItem: (item: string) => void;
    getTotal: () => number;
}

export function createShoppingCart(): Cart {
    const cartItems: Item[] = [];
  
    return {
      addItem: (item: string, price: number): void => {
        cartItems.push({ item, price });
      },
      removeItem: (item: string): void => {
        const index = cartItems.findIndex((cartItem) => cartItem.item === item);
        if (index !== -1) {
          cartItems.splice(index, 1);
        }
      },
      getTotal: (): number => {
        return cartItems.reduce((total, currentItem) => total + currentItem.price, 0);
      },
    };
  }