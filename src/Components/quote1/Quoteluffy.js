import React from "react";
import "./Quoteluffy.scss";
import Cursor from '../Cursor/Cursor';
// import luffy from '../../assets/luffy.png';
import PropTypes from 'prop-types'

function Quoteluffy(props) {
  return (
    <div>
      <div className={`mainqcontainer`}>
          {/* <div className="luffycontainer">
            <img src={luffy} alt="" />
          </div> */}
        <div className="quotecontainer">
          <div className="quotehere">
            <h5>
              (Long Click & Hover Here)
            </h5>
            <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 1H19V0H18V1ZM17.2929 19.7071C17.6834 20.0976 18.3166 20.0976 18.7071 19.7071L25.0711 13.3431C25.4616 12.9526 25.4616 12.3195 25.0711 11.9289C24.6805 11.5384 24.0474 11.5384 23.6569 11.9289L18 17.5858L12.3431 11.9289C11.9526 11.5384 11.3195 11.5384 10.9289 11.9289C10.5384 12.3195 10.5384 12.9526 10.9289 13.3431L17.2929 19.7071ZM0 2H18V0H0V2ZM17 1V19H19V1H17Z" fill="white"/>
</svg>



          </div>
          <div className={`quoteluffy hover-scale ${props.txt}`}>
            <h1>
              "No matter how hard or how impossible it is, never lose sight of
              your goal." {/* <br/> - Monkey D. Luffy, 'One Piece'.*/}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quoteluffy;