import React  from 'react';

const CustomerService = () => {

  return (
    <div className={'customer-servise-wrap'}>
      <div className={'name-customer-servise name' }>Customer Service</div>
    <div className={'info-team'}>
      For billing enquiries, please contact the <a href="mailto:mithotchstitch@yahoo.com">Klickly team</a>. For
      customer service enquiries, please contact MihotchStitch directly:

    </div>
      <div className={'contacts'}>
        <div>Email - <a href="mailto:mithotchstitch@yahoo.com">mithotchstitch@yahoo.com</a></div>
        <div className={'phone-number'}>Phone - <a href="tel:+3107360676" >(310) 736-0676</a></div>
        <div>Site - <a href=" myhotchstitch.com"> myhotchstitch.com</a></div>
      </div>
    </div>
  )
}

export default CustomerService;