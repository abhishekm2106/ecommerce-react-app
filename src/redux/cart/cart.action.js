import cartActiontypes from './cart.types'

export const toggleCartHidden = () => ({
    type: cartActiontypes.TOGGLE_CART_HIDDEN
})

export const addItem = item =>({
    type: cartActiontypes.ADD_ITEM,
    payload: item
})

export const deleteItem = item=>({
    type: cartActiontypes.DELETE_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: cartActiontypes.REMOVE_ITEM,
    payload: item
})