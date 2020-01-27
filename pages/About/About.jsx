import React from 'react';
// component
import Header from 'components/Header/Header';
import Testimonials from 'components/Testimonials/Testimonials';
import Subscribe from 'components/Subscribe/Subscribe';
import Footer from 'components/Footer/Footer';
import Evaluation from 'components/Evaluation/Evaluation';
import Objective from 'components/Objective/Objective';
import Clients from 'pages/About/component/Clients/Clients';
import Virtues from 'components/Virtues/Virtues';
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
    <>
      <Header title={title} image={headerImage} />
      <main className={cn('about')}>
        <Objective />
        <Virtues />
        <Clients />
        <Evaluation bgColor="royalPurple" showNumber={false} />
        <Testimonials image={testimonialsAvatar} />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
};

export default About;
