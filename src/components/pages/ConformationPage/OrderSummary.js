import React  from 'react';
import Bag from '../../../assets/images/bag.png';

const OrderSummary = () => {

  return (
    <div className={'order-summary-wrap'}>
      <div className={'name-order-summary name'}>Order Summary</div>
      <div className={'summary-img-info-wrap'}>
        <div className={'img-wrap'}>
          <img className={'bag-img'} src={Bag} alt=""/>
        </div>
        <div>
          <div className={'main-info-summary'}>
            <div className={'main-info-summary--name'}>YOUR SUPER Tote Bag</div>
            <div className={'main-info-summary--price'}>$10.00</div>
          </div>
          <div className={'grey-info info'}>Your Super</div>
          <div className={'size-info info'}>Size: Free</div>
          <div className={'color-info info'}> Color: Natural</div>
          <div className={'material-info info'}> Material: 100% Cotton</div>
        </div>
      </div>

      <div className={'all-payments'}>
        <div className={'all-payments-item'}>
          <div>Subtotal</div>
          <div>$10.00 </div>
        </div>
        <div className={'all-payments-item'}>
          <div>Shipping </div>
          <div>$2.99 </div>
        </div>
        <div className={'all-payments-item'}>
          <div>Tax </div>
          <div>$1.00 </div>
        </div>

        <div className={'total-sum'}>
          <div>Total </div>
          <div>$13.99 </div>
        </div>
        <div className={'italic-style'}>
          <div>Paid with Klickly Cash</div>
          <div>$10.00</div>
        </div>
        <div className={'italic-style'}>
          <div> Charged to Credit Card (4903)</div>
          <div> $3.99</div>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary;