import userActionTypes from './cart.types'
import {addItemToCart,removeItemFromCart} from './cart.utils'
 
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
        
        case userActionTypes.DELETE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }
        
        case userActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems,action.payload)
            }
        default:
            return state
        
    }
}


export default cartReducer