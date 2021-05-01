import React from 'react'
import './checkout.styles.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selector'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

const Checkout = ({cartItems,total})=>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Products</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(item=>(
            <CheckoutItem key={item.id} item={item}/>
        ))
            }
        <div className="total">
            <span>Total : ₹{total}</span>
        </div>
        <div className="test-warning">
            sample credit card: 
            <br/>
            4242 4242 4242 4242    Exp: 01/2024    -    CVV: 123
        </div>
        <StripeCheckoutButton price={total}/>
    </div>

)

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})


export default connect(mapStateToProps)(Checkout)