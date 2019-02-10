import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer-title-div">
        <div className="footer-title-div2">
         <p className="footer-title">@Your cv</p>
        </div>
        <style jsx>{`
          .footer-title{
            text-align: center;
            font-family: "Times New Roman", Times, serif;
            font-style: italic;
            font-size: 15px;
            padding-top: 5px;
          }
        `}</style>
      </div>
    )
  }
}

export default Footer;