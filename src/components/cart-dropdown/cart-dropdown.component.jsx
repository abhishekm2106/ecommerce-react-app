import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import {selectCartItems } from '../../redux/cart/cart.selector'
import {connect} from 'react-redux'
import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(item => (<CartItem key={item.id} item={item}/>))}
        </div>
        <CustomButton>go to checkout</CustomButton>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown)