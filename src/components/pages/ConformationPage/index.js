import React, { Component } from 'react';
import Header from "../../../common/Header";
import Greeting from "./Greeting";
import OrderDetails from "./OrderDetails";
import OrderSummary from "./OrderSummary";
import CustomerService from "./CustomerService";

class ConformationPage extends Component {

  render() {
    return (
      <div>
        <Header />
        <Greeting/>
        <OrderDetails/>
        <OrderSummary/>
        <CustomerService/>
      </div>
    )
  }
}

export default ConformationPage;