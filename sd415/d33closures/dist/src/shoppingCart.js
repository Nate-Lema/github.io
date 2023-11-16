//This closure exercise involves a common real-world scenario.  
export function createShoppingCart() {
    const cartItems = [];
    return {
        addItem: (item, price) => {
            cartItems.push({ item, price });
        },
        removeItem: (item) => {
            const index = cartItems.findIndex((cartItem) => cartItem.item === item);
            if (index !== -1) {
                cartItems.splice(index, 1);
            }
        },
        getTotal: () => {
            return cartItems.reduce((total, currentItem) => total + currentItem.price, 0);
        },
    };
}
