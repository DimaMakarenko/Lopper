import React from 'react';
// component
import Testimonials from 'components/Testimonials/Testimonials';
import Subscribe from 'components/Subscribe/Subscribe';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Gallery from 'components/Gallery/Gallery';
// image
import testimonialsAvatar from 'image/avatars/avatar6.png';
// styles

const title = 'Gallery';

const Work = () => {
  return (
    <>
      <Header title={title} image={false} isWhite={false} />
      <main>
        <Gallery />
        <Testimonials image={testimonialsAvatar} />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
};

export default Work;
