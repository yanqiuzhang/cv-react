import React, { Component } from 'react';

 class Header extends Component {
  render() {
    return (
      <div className="title-div">
        <div className="title-div-cv">
         <h1 className="title-div-title">Add your CV</h1>
        </div>
        <style jsx>{`
         .title-div{
           margin: 0 auto;
           padding: 0;
         }
         .title-div-cv{
          background: url(https://i.ytimg.com/vi/XorKb_I-TTQ/maxresdefault.jpg);
          background-size: 100%;
          position: fixed;
          width: 100%;
          height: 150px;
          opacity: 0.9;
          margin: 0;
          top: 0;
          object-fit:cover;
         }
         .title-div-title{
           font-size: 40px;
           font-family: "Times New Roman", Times, serif;
           font-style: italic;
           text-align: center;
           padding-top: 25px;
          }
        `}</style>
      </div>
    )
  }
}

export default Header;
