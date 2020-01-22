import React from 'react';
// components
import Header from 'components/Header/Header';
// styles
import classNames from 'classnames/bind';
import styles from './styles.scss';
// image
import headerImage from 'image/about-header.png';

const cn = classNames.bind(styles);

const title = 'About us';
const subTitle = 'We build great business';

const About = () => {
  return (
    <section className={cn('about')}>
      <Header title={title} subTitle={subTitle} image={headerImage} />
    </section>
  );
};

export default About;
