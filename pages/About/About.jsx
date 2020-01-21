import React from 'react';
// components
// eslint-disable-next-line import/no-unresolved
import Header from 'components/Header/Header';
// styles
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cn = classNames.bind(styles);

const About = () => {
  return (
    <section className={cn('about')}>
      <Header />
    </section>
  );
};

export default About;
