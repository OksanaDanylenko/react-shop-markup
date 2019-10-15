import React, { Component } from 'react';

export default class Tabs extends Component {
  render() {
    return (
      <div className={'tabs-wrap'}>
        <div className={'table-heading'}>
          <div className={'table-heading__item'}>
            <h2 className={'active'}>
              BUY
            </h2>
          </div>
          <div className={'table-heading__item'}>
          <h2>
              DETAILS
            </h2>
          </div>
        </div>
      </div>
    );
  }
}


