import React  from 'react';

const Greeting = () => {

  return (
    <div className={'greeting-wrap'}>
      <div className={'greeting-text'}>Hi Cooper,<br/>
        Congratulations on your Klickly order from MihotchStitch. You
        should receive a confirmation from MihotchStitch within 24 hours.
        Remember, Klickly put $10 towards your order today! That’s
        becuase we’re the site that gives high-value customers like you
        fun perks + benefits when you buy with us.
      </div>
      <div className={'button-wrap'}>
        <button className={'pink-button'}>
          View your order
        </button>
        <div className={'cent-button'}>or</div>
        <button className={'blue-color-button'}>
          Visit Klickly
        </button>
      </div>
    </div>
  )
}

export default Greeting;