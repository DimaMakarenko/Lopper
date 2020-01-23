import React from 'react';
// image
import NavBar from 'components/NavBar/NavBar';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);

const Header = () => {
  return (
    <>
      <NavBar isWhite />
    </>
  );
};

export default Header;
