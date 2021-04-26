import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import {selectCartItems } from '../../redux/cart/cart.selector'
import {createStructuredSelector } from 'reselect';
import {connect} from 'react-redux'
import { withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cart.action'
import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems,history,dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length?
                cartItems.map(item => (<CartItem key={item.id} item={item}/>)):
                <span className="empty-cart"> your cart is empty</span>
            }
        </div>
        <CustomButton onClick={
            ()=> {
                history.push('/checkout');
                dispatch(toggleCartHidden())
                }}>go to checkout</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})



export default withRouter(connect(mapStateToProps)(CartDropdown))