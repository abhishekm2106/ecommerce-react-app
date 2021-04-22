import userActionTypes from './cart.types'
import {addItemToCart} from './cart.utils'
 
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case userActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        
        case userActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems,action.payload),
                quantity:state.quantity+1
            }
        
        default:
            return state
        
    }
}


export default cartReducer