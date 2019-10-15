import React, { Component } from "react";
import less from '../../assets/images/less.svg'
import more from '../../assets/images/more.svg'

class PlusMinusButtons extends Component {

  render() {
    return (
      <div className={'button-wrap'} >
        <div>
          <img src={less} alt=""/>
        </div>
        <input
          className="btn_value"
          type="number"
          name="quantity"
          value={1}
        />
        <div>
          <img src={more} alt=""/>
        </div>
      </div>
    );
  }
}


export default PlusMinusButtons;
