import React from 'react';
// components
import Header from 'components/Header/Header';
import Testimonials from 'components/Testimonials/Testimonials';
import Subscribe from 'components/Subscribe/Subscribe';
import Footer from 'components/Footer/Footer';
import OurTeam from 'components/OurTeam/OurTeam';
import Intro from 'components/Intro/Intro';
// image
import headerImage from 'image/team-header.png';
import testimonialsAvatar from 'image/avatars/avatar2.png';
// styles
import styles from './styles.module.scss';

const title = 'Our team';
// intro
const introText =
  'Upper prior hundred links approach reedy, was to the than and the ever somehow surprised known for every by of there until road.';
const introSubTitle = 'WE are';

const Team = () => {
  return (
    <main>
      <Header title={title} image={headerImage} />
      <section className={styles.introContainers}>
        <Intro text={introText} subTitle={introSubTitle} title={title} position="center" />
      </section>
      <OurTeam />
      <Testimonials image={testimonialsAvatar} />
      <Subscribe />
      <Footer />
    </main>
  );
};

export default Team;