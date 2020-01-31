import React from 'react';
// components
import NavBar from 'components/NavBar/NavBar';
import classNames from 'classnames/bind';
// styles
import styles from './styles.module.scss';

const cn = classNames.bind(styles);

const NotFound = () => {
  return (
    <>
      <NavBar />
      <main>
        <section className={cn('notFound')}>
          <h1 className={cn('title')}>Page not found!</h1>
        </section>
      </main>
    </>
  );
};

export default NotFound;
