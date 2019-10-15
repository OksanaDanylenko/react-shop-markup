import React  from "react";
import Logo from '../../assets/images/klickly-logo-final.svg';
import Bell from '../../assets/images/bell.svg';
import Amazon from '../../assets/images/amazon.svg';

const Header = () => {
  return(
        <header className={'header'}>
          <div className={'wrap'}>
            <h1><a href="/" className={'pink-logo'}><img src={Logo} alt="Klicky"/> Brands</a></h1>
            <nav className={'header__navigation'}>
              <ul className={'menu'}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Campaigns</a></li>
                <li><a href="#">Orders</a></li>
                <li><a href="#">Performance</a></li>
              </ul>
            </nav>
            <div className={'user-info'}>
              <div className={'user-info__notify'}>
                <img className={'user-info__bell'} src={Bell} alt=""/>
                <div className={'user-info__counter'}>2</div>
              </div>
              <div className={'user-info__name'}>Company</div>
              <div className={'user-info__icon'}>
                <img className={'user-info__amazon'} src={Amazon} alt=""/>
              </div>
            </div>
            <div className={'tablet-header'}>
              <div>Order Receipt</div>
              <div className={'date'}>July 16 2019</div>
            </div>
          </div>
        </header>
  );
}


export default Header;
