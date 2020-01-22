import React from 'react';
// components
import Header from 'components/Header/Header';
import Testimonials from 'components/Testimonials/Testimonials';
import Subscribe from 'components/Subscribe/Subscribe';
// styles/image
import classNames from 'classnames/bind';
import headerImage from 'image/about-header.png';
import testimonialsAvatar from 'image/avatar1.png';
import styles from './styles.scss';

const cn = classNames.bind(styles);
// header
const title = 'About us';
const subTitle = 'We build great business';
// testimonials
const testimonialsText =
  'Lectus arcu bibendum at varius. Adipiscing diam donec adipiscing tristique.';
const testimonialsName = 'Kerry Johnes';
const testimonialsCompany = 'Some Company';

const About = () => {
  return (
    <section className={cn('about')}>
      <Header title={title} subTitle={subTitle} image={headerImage} />
      <Testimonials
        text={testimonialsText}
        name={testimonialsName}
        company={testimonialsCompany}
        image={testimonialsAvatar}
      />
      <Subscribe />
    </section>
  );
};

export default About;
