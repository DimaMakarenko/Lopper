import React from 'react';
// components
import Footer from 'components/Footer/Footer';
import Subscribe from 'components/Subscribe/Subscribe';
import Testimonials from 'components/Testimonials/Testimonials';
import OurServices from 'pages/Home/component/OurServices/OurServices';
import Header from 'pages/Home/component/Header/Header';
import Evaluation from 'components/Evaluation/Evaluation';
// image
import testimonialsAvatar from 'image/avatars/avatar3.png';
// const
import { HOME_SERVICES } from 'components/Services/constants';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);
const { home } = styles;

const Home = () => {
  return (
    <>
      <header className={home}>
        <Header />
      </header>
      <main>
        <OurServices services={HOME_SERVICES} />
        <Evaluation bgColor="currant" showNumber />
        <Testimonials image={testimonialsAvatar} />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
};

export default Home;
