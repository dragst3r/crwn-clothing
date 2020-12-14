import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceFroStripe = price *100;
    const publishibleKey = 'pk_test_51HyLYNDAzxP7g6QY7kMDvWBzoL0t0875PB8cNpaNdVQZdA6qJExlVUqc9CXMpUxOLxwWMlVdtwXykiuVkMgUPqDo00GEzEG0h7'

    const onToken = token => {
        alert('Payment successful');
    }

    return (
        <StripeCheckout 
            label='Pay now'
            name='CRWN cloathing'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceFroStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishibleKey}
        />
    )
};

export default StripeCheckoutButton;