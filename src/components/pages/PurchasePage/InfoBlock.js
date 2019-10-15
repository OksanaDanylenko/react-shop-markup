import React, { Component } from 'react';
import PlusMinusButtons from '../../../common/MinusPlus';

class SpecialOffer extends Component {

  render() {
    return (
      <div className={'info-wrap'}>
       <div className={'info-wrap__item main-item'}>
         <span>Original price:</span>
         <span className={'line-through'}>$29.90</span>
       </div>
        <div className={'info-wrap__item main-item'}>
          <span>Deal price:</span>
          <span className={'pink-big'}>$15.00</span>
        </div>
        <div className={'info-wrap__item'}>
          <span>Shipping:</span>
          <span>$2.00</span>
        </div>
        <div className={'info-wrap__item'}>
          <span>Tax:</span>
          <span>$1.00</span>
        </div>
        <div className={'info-wrap__item'}>
          <span>Total:</span>
          <span>$18.00</span>
        </div>
        <div>Qty</div>
        <PlusMinusButtons />
        <div className={'button-buy-wrap'}>
          <button className={'pink-button'}>Buy</button>
          <button className={'blue-color-button'}>No, thanks, I’ll pass.</button>
        </div>
      </div>
    )
  }
}

export default SpecialOffer;

