export const addItemToCart = (cartItems, cartItemtoAdd) => {
    const exisingCartItem = cartItems.find(cartItem => cartItem.id === cartItemtoAdd.id)

    if (exisingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemtoAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems,{...cartItemtoAdd, quantity: 1}]

}