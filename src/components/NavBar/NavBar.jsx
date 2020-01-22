import React from 'react';
// proptypes
import PropTypes from 'prop-types';
// routing
import { Link } from 'react-router-dom';
// styles
import classNames from 'classnames/bind';
import phoneIcoBlack from 'image/phone-black.svg';
import phoneIcoWhite from 'image/phone.svg';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);
const { navBar, logo, navBarWhite, menuItem, burgerIcon, burger, phone, burgerIconWhite } = styles;

const NavBar = ({ isWhite }) => {
  return (
    <div className={cn('container', { navBar }, isWhite && navBarWhite)}>
      <div className={logo}>Lopper</div>
      <nav>
        <Link to="/home" className={menuItem}>
          Home
        </Link>
        <Link to="/services" className={menuItem}>
          Services
        </Link>
        <Link to="/work" className={menuItem}>
          Work
        </Link>
        <Link to="/about" className={menuItem}>
          About
        </Link>
      </nav>
      <div className={phone}>
        <img src={isWhite ? phoneIcoWhite : phoneIcoBlack} alt="phone" />
        <div>(01) 666 - 693 - 456</div>
      </div>
      <div className={burger}>
        <span className={cn({ burgerIcon }, isWhite && burgerIconWhite)} />
      </div>
    </div>
  );
};

NavBar.propTypes = {
  isWhite: PropTypes.bool.isRequired
};

export default NavBar;
