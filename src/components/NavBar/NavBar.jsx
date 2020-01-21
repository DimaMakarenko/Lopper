import React from 'react';
// routing
import { Link } from 'react-router-dom';
// styles
import classNames from 'classnames/bind';
import phoneIco from 'image/phone.svg';
import styles from './styles.scss';
// image
const cn = classNames.bind(styles);

const NavBar = ({ isWhite }) => {
  return (
    <div
      className={cn('container nav-bar', {
        isWhite
      })}
    >
      <div className="logo">Lopper</div>
      <nav className={cn('menu', { isWhite } && 'menu-white')}>
        <Link to="/home" className="menu-item">
          Home
        </Link>
        <Link to="/services" className="menu-item">
          Services
        </Link>
        <Link to="/work" className="menu-item">
          Work
        </Link>
        <Link to="/about" className="menu-item">
          About
        </Link>
      </nav>
      <div className="phone">
        <div className="phone-image">
          <img src={phoneIco} alt="phone" />
        </div>
        <div className="phone-number">(01) 666 - 693 - 456</div>
      </div>
      <div className="burger">
        <span className={cn('burger-icon', { isWhite } && 'burger-white')} />
      </div>
    </div>
  );
};

export default NavBar;
