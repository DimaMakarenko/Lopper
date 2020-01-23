import React from 'react';
// components
import Header from 'components/Header/Header';
import Testimonials from 'components/Testimonials/Testimonials';
import Subscribe from 'components/Subscribe/Subscribe';
import Footer from 'components/Footer/Footer';
import OurServices from 'components/OurServices/OurServices';
import Prizes from 'components/Prizes/Prizes';
// const
import { SERVICE_SERVICES } from 'components/OurServices/constants';
// image
import headerImage from 'image/services-header.png';
import testimonialsAvatar from 'image/avatars/avatar2.png';

const title = 'Our services';

const Services = () => {
  return (
    <main>
      <Header title={title} image={headerImage} />
      <Prizes />
      <OurServices services={SERVICE_SERVICES} />
      <Testimonials image={testimonialsAvatar} />
      <Subscribe />
      <Footer />
    </main>
  );
};

export default Services;
