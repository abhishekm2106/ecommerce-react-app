import React from 'react'
import {connect} from 'react-redux'
import {deleteItem,addItem,removeItem} from '../../redux/cart/cart.action'
import './checkout-item.styles.scss'

const CheckoutItem = ({item,deleteItem,addItem,removeItem}) => {
    const {name,quantity,price,imageUrl} = item

    return(
        <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt=""/>
        </div>

        <span className="name">{name}</span>
        <span className="quantity">
            <span className="aerow" onClick={()=>removeItem(item)}>&#10094;</span>
            {quantity}
            <span className="aerow" onClick={()=>addItem(item)}>&#10095;</span>
        </span>
        <span className="price">{price}</span>
        <span className="remove-button" onClick={()=>deleteItem(item)}>&#10005;</span>
    </div>
    )

}

const mapDispatchToProps = dispatch => ({
    deleteItem:item=>dispatch(deleteItem(item)),
    addItem:item=>dispatch(addItem(item)),
    removeItem:item=>dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem)