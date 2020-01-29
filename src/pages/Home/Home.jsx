import React, { useRef } from 'react';
// components
import Footer from 'components/Footer/Footer';
import Subscribe from 'components/Subscribe/Subscribe';
import Testimonials from 'components/Testimonials/Testimonials';
import OurServices from 'pages/Home/components/OurServices/OurServices';
import Header from 'pages/Home/components/Header/Header';
import Evaluation from 'components/Evaluation/Evaluation';
import Features from 'components/Features/Features';
import Clients from 'pages/Home/components/Clients/Clients';
// image
import testimonialsAvatar from 'image/avatars/avatar3.png';
// const
import { HOME_SERVICES } from 'components/Services/constants';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);

const scrollToRef = ref =>
  window.scrollTo({ left: 0, top: ref.current.offsetTop, behavior: 'smooth' });

const Home = () => {
  const myRef = useRef(null);
  const executeScroll = () => {
    scrollToRef(myRef);
  };

  return (
    <>
      <header className={cn('home')}>
        <Header scrollTo={executeScroll} />
      </header>
      <main>
        <OurServices services={HOME_SERVICES} />
        <Features />
        <Clients myRef={myRef} />
        <Evaluation bgColor="currant" />
        <Testimonials image={testimonialsAvatar} />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
};

export default Home;
