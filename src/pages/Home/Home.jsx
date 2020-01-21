import React from 'react';
// components
// eslint-disable-next-line import/no-unresolved
import NavBar from 'components/NavBar/NavBar';
// styles
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cn = classNames.bind(styles);

const Home = () => {
  return (
    <header className={cn('home')}>
      <NavBar isWhite />
    </header>
  );
};

export default Home;
