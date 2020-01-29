import React from 'react';
// proptypes
import PropTypes from 'prop-types';
// routing
import { Link } from 'react-router-dom';
// image
import phoneIcoBlack from 'image/phone-black.svg';
import phoneIcoWhite from 'image/phone.svg';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);

const NavBar = ({ colorText }) => {
  const menuRef = React.createRef();
  const burgerRef = React.createRef();

  const openMenu = () => {
    menuRef.current.classList.toggle(styles.openMenu);
    burgerRef.current.classList.toggle(styles.openBurger);
  };
  return (
    <div className={cn('container', 'navBar', colorText)}>
      <h2 className={cn('logo')}>Lopper</h2>
      <nav className={cn('menu')} ref={menuRef}>
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
