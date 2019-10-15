import React, { Component } from 'react';
import Header from "../../../common/Header";
import SpecialOffer from './SpecialOffer';
import Tshort from "./Tshort";
import Tabs from "./Tabs";
import InfoBlock from "./InfoBlock";

class PurchasePage extends Component {

  render() {
    return (
      <div>
      <Header />
        <SpecialOffer />
        <Tshort />
        <Tabs />
        <InfoBlock/>
      </div>
    )
  }
}

export default PurchasePage;