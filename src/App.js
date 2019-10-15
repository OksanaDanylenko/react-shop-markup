import React, {Component} from 'react';
import PurchasePage from './components/pages/PurchasePage';
import './App.scss';
import ConformationPage from "./components/pages/ConformationPage";

class App extends Component {

  state = {
    displayPurchasePage: false,
    displayConformationPage: false,
    click: false
  };


  render () {
    const { displayPurchasePage, displayConformationPage, click } =this.state;
    return (
      <div className="App">
        {!click && <div className={'buttons-open'}>
          <button onClick={() =>this.setState({ displayPurchasePage: true, displayConformationPage:false, click: true })}>
            Display Purchase Page
          </button>
          <button onClick={() =>this.setState({ displayPurchasePage: false, displayConformationPage: true, click: true })}>
            Display Conformation Page
          </button>
        </div>}
        {displayPurchasePage && <PurchasePage />}
        {displayConformationPage && <ConformationPage />}
      </div>
    );
  }
}

export default App;
