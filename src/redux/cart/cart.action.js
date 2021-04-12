import cartActiontypes from './cart.types'

export const toggleCartHidden = () => ({
    type: cartActiontypes.TOGGLE_CART_HIDDEN
})

export const addItem = item =>({
    type: cartActiontypes.ADD_ITEM,
    payload: item
})