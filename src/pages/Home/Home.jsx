import React from 'react';
// components
import NavBar from 'components/NavBar/NavBar';
import Footer from 'components/Footer/Footer';
import Subscribe from 'components/Subscribe/Subscribe';
import Testimonials from 'components/Testimonials/Testimonials';
// image
import testimonialsAvatar from 'image/avatars/avatar3.png';
// const
import { HOME_SERVICES } from 'components/Services/constants';
// styles
import classNames from 'classnames/bind';
import OurServices from './component/OurServices';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);
const { home } = styles;

const Home = () => {
  return (
    <>
      <header className={home}>
        <NavBar isWhite />
      </header>
      <main>
        <OurServices services={HOME_SERVICES} />
        <Testimonials image={testimonialsAvatar} />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
};

export default Home;
