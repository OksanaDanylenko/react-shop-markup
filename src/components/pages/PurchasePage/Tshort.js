import React, { Component } from 'react';
import tshirt from '../../../assets/images/tshirt.png';

class Tshort extends Component {

  render() {
    return (
      <div className={'tshort-wrap'}>
        <div>
          <img src={tshirt} alt="" className={'tshirt-img'}/>
          <div className={'switch'}>
            <div className={'circle--active'}></div>
            <div className={'circle'}></div>
          </div>
          <div className={'tshort-about'}>
            <div className={'tshort-info'}>Your Super T-shirts</div>
            <div className={'blue-color'}>Your Super</div>
        </div>
        </div>
      </div>
    )
  }
}

export default Tshort;