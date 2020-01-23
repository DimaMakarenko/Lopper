import React from 'react';
// components
import Header from 'components/Header/Header';
import Testimonials from 'components/Testimonials/Testimonials';
import Subscribe from 'components/Subscribe/Subscribe';
import Footer from 'components/Footer/Footer';
import Evaluation from 'components/Evaluation/Evaluation';
// image
import headerImage from 'image/about-header.png';
import testimonialsAvatar from 'image/avatars/avatar1.png';
// styles
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cn = classNames.bind(styles);

// header
const title = 'About us';

const About = () => {
  return (
    <section className={cn('about')}>
      <Header title={title} image={headerImage} />
      <Evaluation bgColor="royalPurple" showNumber={false} />
      <Testimonials image={testimonialsAvatar} />
      <Subscribe />
      <Footer />
    </section>
  );
};

export default About;
