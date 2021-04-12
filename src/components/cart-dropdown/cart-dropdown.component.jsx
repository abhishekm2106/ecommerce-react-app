import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import {connect} from 'react-redux'
import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(item => (<CartItem item={item}/>))}
        </div>
        <CustomButton>go to checkout</CustomButton>
    </div>
)

const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown)