import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100
    const publishableKey = 'pk_test_51ImI7bSCRghT2vqdpsXErMFQebuHTbqMBL8bkVFsMcFGKvANd6RVYLDoKsv0NOML0A7ZTU2z9I8Aa9PK9hwsbMdb0075nFbZas'

    const onToken = token => {
        console.log(token)
        alert('payment successfull')
    }
    
    return(
        <StripeCheckout
            label="pay now"
            name = 'Crown Fashion'
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`your total is ₹ ${price}`}
            amount={priceForStripe}
            currency="INR"
            panelLabel ="pay Now"
            token = {onToken}
            stripeKey = {publishableKey}

        />
    )
}


export default StripeCheckoutButton