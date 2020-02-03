import React, { useEffect, useRef } from 'react';
// proptypes
import PropTypes from 'prop-types';
// routing
import { Link } from 'react-router-dom';
// image
import phoneIcoBlack from 'image/phone-black.svg';
import phoneIcoWhite from 'image/phone.svg';
// animation
import classNames from 'classnames/bind';
import animateNavBar from './animate';
// styles
import styles from './styles.module.scss';

const cn = classNames.bind(styles);

const NavBar = ({ colorText }) => {
  const menuRef = React.createRef();
  const burgerRef = React.createRef();
  const logoRef = React.createRef();
  const phoneRef = React.createRef();
  const menuItemsRef = useRef([]);

  useEffect(() => {
    animateNavBar(logoRef, menuRef, phoneRef, menuItemsRef);
  }, []);

  const openMenu = () => {
    menuRef.current.classList.toggle(styles.openMenu);
    burgerRef.current.classList.toggle(styles.openBurger);
  };
  return (
    <div className={cn('container', 'navBar', colorText)}>
      <h2 className={cn('logo')} ref={logoRef}>
        Lopper
      </h2>
      <nav className={cn('menu')} ref={menuRef}>
        <Link
          to="/home"
          className={cn('menuItem')}
          ref={e => {
            menuItemsRef.current[0] = e;
          }}
        >
          Home
        </Link>
        <Link
          to="/services"
          className={cn('menuItem')}
          ref={e => {
            menuItemsRef.current[1] = e;
          }}
        >
          Services
        </Link>
        <Link
          to="/work"
          className={cn('menuItem')}
          ref={e => {
            menuItemsRef.current[2] = e;
          }}
        >
          Work
        </Link>
        <Link
          to="/about"
          className={cn('menuItem')}
          ref={e => {
            menuItemsRef.current[3] = e;
          }}
        >
          About
        </Link>
        <Link
          to="/team"
          className={cn('menuItem')}
          ref={e => {
            menuItemsRef.current[4] = e;
          }}
        >
          Team
        </Link>
      </nav>
      <div className={cn('phone')} ref={phoneRef}>
        <span>
          <img
            src={colorText === 'white' ? phoneIcoWhite : phoneIcoBlack}
            alt="phone"
            className={cn('phoneImage')}
          />
        </span>
        <div>
          <a href="tel:01-666-693-456">(01) 666 - 693 - 456</a>
        </div>
      </div>
      <div className={cn('burger')} onClick={openMenu} ref={burgerRef}>
        <span
          className={cn(
            'burgerItem',
            'firstBurgerItem',
            colorText === 'white' && 'burgerIconWhite'
          )}
        />
        <span
          className={cn(
            'burgerItem',
            'secondBurgerItem',
            colorText === 'white' && 'burgerIconWhite'
          )}
        />
        <span
          className={cn(
            'burgerItem',
            'thirdBurgerItem',
            colorText === 'white' && 'burgerIconWhite'
          )}
        />
      </div>
    </div>
  );
};

NavBar.propTypes = {
  colorText: PropTypes.oneOf(['white', 'black'])
};

export default NavBar;
