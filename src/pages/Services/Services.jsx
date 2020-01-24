import React from 'react';
// components
import Header from 'components/Header/Header';
import Testimonials from 'components/Testimonials/Testimonials';
import Subscribe from 'components/Subscribe/Subscribe';
import Footer from 'components/Footer/Footer';
import Prizes from 'components/Prizes/Prizes';
import Strategy from 'components/Strategy/Strategy';
// const
import { SERVICE_SERVICES } from 'components/Services/constants';
// image
import headerImage from 'image/services-header.png';
import testimonialsAvatar from 'image/avatars/avatar2.png';
import OurServices from './component/OurServices';

const title = 'Our services';

const Services = () => {
  return (
    <main>
      <Header title={title} image={headerImage} />
      <Prizes />
      <OurServices services={SERVICE_SERVICES} />
      <Strategy />
      <Testimonials image={testimonialsAvatar} />
      <Subscribe />
      <Footer />
    </main>
  );
};

export default Services;
