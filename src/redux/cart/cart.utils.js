export const addItemToCart = (cartItems,cartItemToAdd) => {
    console.log("add fired")
    const existingCartItem = cartItems.find(cartItem  => cartItem.id === cartItemToAdd.id)
    
    if (existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ? 
            {...cartItem,quantity: cartItem.quantity + 1}:
            cartItem
            )
    }

    return  [...cartItems,{...cartItemToAdd,quantity: 1}]
}


export const removeItemFromCart = (cartItems,cartItemToRemove)=>{
    const lastItem = cartItems.find(cartItem => cartItem.id===cartItemToRemove.id && cartItem.quantity===1)
    if (lastItem){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    else{
        return cartItems.map(cartItem => 
            cartItem.id !== cartItemToRemove.id ?
            cartItem:
            {...cartItem,quantity: cartItem.quantity-1})
    }
    
            
}