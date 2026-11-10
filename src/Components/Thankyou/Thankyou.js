import React from 'react'
import "./Thankyou.scss";
import coffee_back from '../../assets/coffee_back.png';
import coffee_front from '../../assets/coffee_front.png';

const Thankyou = () => {
  return (
    <>
    <div className="thank_cont">
        
        <h3 className="thank_title">
            Thank You For Reaching Out to me
        </h3>
        
        
        <div className="thank_img_cont">
        <img className='thank_img' src={coffee_back}/>
        <img className='thank_img' id='coffee_front' src={coffee_front}/>
        </div>
        <div className="thank_msg">
          <p>I will get back to you within 24hrs 😉</p>
        </div>
    </div>
    
    </>
  )
}

export default Thankyou