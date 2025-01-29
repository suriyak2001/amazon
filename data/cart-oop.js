export function Cart(localStorageKey) {
    const cart = {
        cartItems: undefined,
        loadFromStorage() {
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
        
            if(!this.cartItems) {
                this.cartItems = [{productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                 quantity: 2,
                 deliveryOptionId: '1',
                }];
            }
        },
        saveToStorage() {
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
        },
        addToCart(productId) {
            let matchingItem = '';
            this.cartItems.forEach((cartItem) => {
                if (productId === cartItem.productId) {
                matchingItem = cartItem;
                }
            });
            if (matchingItem) {
                matchingItem.quantity += 1;
            } else {
                this.cartItems.push({
                productId,
                quantity: 1,
                deliveryOptionId: '1',
                });
            }
            this.saveToStorage();
        },
        removeFromCart(productId) {
        const newCart = [];
       
        this.cartItems.forEach( (cartItem) => {
           if(cartItem.productId !== productId) {
               newCart.push(cartItem);
           }
        });
        this.cartItems = newCart;
       
        this.saveToStorage();
       },
       updateDeliveryOption(productId, deliveryOptionId) {
        let matchingItem = '';
        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
            matchingItem = cartItem;
            }
        });
        matchingItem.deliveryOptionId = deliveryOptionId;
    
        this.saveToStorage();
    }
    };
    return cart;
}
const bCart = Cart('cart-oop');
bCart.loadFromStorage();
console.log(bCart);


