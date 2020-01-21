import React from 'react';
// components
// eslint-disable-next-line import/no-unresolved
import NavBar from 'components/NavBar/NavBar';
// styles
// import classNames from 'classnames/bind';
import styles from './styles.scss';

const Header = () => {
  return (
    <header className="header">
      <NavBar />
    </header>
  );
};
export default Header;
