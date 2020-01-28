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

const NavBar = ({ isWhite }) => {
  return (
    <div className={cn('container', 'navBar', isWhite && 'navBarWhite')}>
      <div className={cn('logo')}>Lopper</div>
      <nav className={cn('menu')}>
        <Link to="/home" className={cn('menuItem')}>
          Home
        </Link>
        <Link to="/services" className={cn('menuItem')}>
          Services
        </Link>
        <Link to="/work" className={cn('menuItem')}>
          Work
        </Link>
        <Link to="/about" className={cn('menuItem')}>
          About
        </Link>
        <Link to="/team" className={cn('menuItem')}>
          Team
        </Link>
      </nav>
      <div className={cn('phone')}>
        <img src={isWhite ? phoneIcoWhite : phoneIcoBlack} alt="phone" />
        <div>
          <a href="tel:01-666-693-456">(01) 666 - 693 - 456</a>
        </div>
      </div>
      <div className={cn('burger')}>
        <span className={cn('burgerIcon', isWhite && 'burgerIconWhite')} />
      </div>
    </div>
  );
};

NavBar.propTypes = {
  isWhite: PropTypes.bool.isRequired
};

export default NavBar;
