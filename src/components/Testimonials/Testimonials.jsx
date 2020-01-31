import React from 'react';
// components
import Slide from 'components/Testimonials/components/Slide/Slide';
import Faces from 'components/Testimonials/components/Faces/Faces';
import Slider from 'components/Slider/Slider';
// constants
import { USERS } from 'components/Testimonials/USERS';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);

const Testimonials = () => {
  return (
    <section className={cn('testimonial')}>
      <div className={cn('container', 'testimonialContainers')}>
        <Slider data={USERS} component={Slide} />
        <Faces />
      </div>
    </section>
  );
};

export default Testimonials;
