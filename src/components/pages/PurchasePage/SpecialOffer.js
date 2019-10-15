import React  from 'react';

  const SpecialOffer = () => {

    return (
      <div className={'offer-wrap'}>
        <div className={'offer-thank'}>Thank you for your purchase!</div>
        <div className={'action'}>SPECIAL OFFER</div>
        <div  className={'action-more-info'}>As a thank you for shopping with us,
          get this additional item for <b>only $15!</b>
        </div>
        <div className={'offer-end'}>Hurry, your offer ends in:</div>
        <div className={'time-numb'}>00:10:00</div>
        <div className={'time'}>Hours Muns Sesc</div>
      </div>
    )
};

export default SpecialOffer;