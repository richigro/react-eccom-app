export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItems = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if(existingCartItems){
        // increment quantity state
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}