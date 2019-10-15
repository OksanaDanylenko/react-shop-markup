import React  from 'react';

const OrderDetails = () => {

  return (
    <div className={'order-details-wrap'}>
      <div className={'name-order-details name'}>Order Details</div>
      <div>
        <div className={'heading'}>Payment Method</div>
        <div className={'common-block'}>
          <div>Paid with Klickly cash</div>
          <div>$3.99</div>
        </div>
        <div className={'common-block'}>
          <div>Charged to your Credit Card (4903)</div>
          <div>$10.00 </div>
        </div>
      </div>
      <div>
        <div className={'heading'}>Shipping Address </div>
        <div className={'address'}>Jimmy Santos<br/>
          4077 Charles ave
          Culver City, CA 90232</div>
      </div>
    </div>
  )
}

export default OrderDetails;