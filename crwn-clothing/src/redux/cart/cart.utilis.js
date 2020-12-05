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

};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const exisingCartItem = cartItems.find(
        cartItem => cartItem.id ===  cartItemToRemove.id
    )

    if(exisingCartItem.quantity ===1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(
        cartItem =>
        cartItem.id === cartItemToRemove.id ?
        {...cartItem, quantity: cartItem.quantity -1}
        : cartItem
    )
}