import React from 'react';
import Image from '../../assets/Logo.png';
import './Header.css';

function Header() {
  return (
    <div className="title_container">
      <img src={Image} className="logo" alt="BV Support Local"/>
      <h1 className="title">BV Support Local</h1>
    </div>
  )
}

export default Header