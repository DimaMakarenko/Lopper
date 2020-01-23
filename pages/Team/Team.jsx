import React from 'react';
// components
import Header from 'components/Header/Header';
import Testimonials from 'components/Testimonials/Testimonials';
import Subscribe from 'components/Subscribe/Subscribe';
import Footer from 'components/Footer/Footer';
import OurTeam from 'components/OurTeam/OurTeam';
// image
import headerImage from 'image/team-header.png';
import testimonialsAvatar from 'image/avatars/avatar2.png';

const title = 'Our team';

const Team = () => {
  return (
    <section>
      <Header title={title} image={headerImage} />
      <OurTeam />
      <Testimonials image={testimonialsAvatar} />
      <Subscribe />
      <Footer />
    </section>
  );
};

export default Team;
