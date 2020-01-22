import React from 'react';
// proptypes
import PropTypes from 'prop-types';
// image
import face1 from 'image/face1.png';
import face2 from 'image/face2.png';
import face3 from 'image/face3.png';
import face4 from 'image/face4.png';
import face5 from 'image/face5.png';
import face6 from 'image/face6.png';
import face7 from 'image/face7.png';
import arrowLeftIcon from 'image/arrow-left.png';
import arrowRightIcon from 'image/arrow-right.png';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);
const {
  avatar,
  testimonial,
  testimonialText,
  testimonialContainers,
  testimonialName,
  testimonialCompany,
  testimonialUser,
  faces,
  faceItems,
  faceItem1,
  faceItem2,
  faceItem3,
  faceItem4,
  faceItem5,
  faceItem6,
  faceItem7,
  arrows,
  arrowLeft,
  arrowRight
} = styles;

const Testimonials = ({ text, name, company, image }) => {
  return (
    <section className={testimonial}>
      <div className={cn('container', { testimonialContainers })}>
        <div className={avatar}>
          <img src={image} alt="" />
        </div>
        <span className={testimonialText}>{text}</span>
        <div className={testimonialUser}>
          <span className={testimonialName}>{name}</span>
          <span className={testimonialCompany}>{company}</span>
        </div>
        <div className={faces}>
          <img src={face1} alt="" className={cn(faceItems, faceItem1)} />
          <img src={face2} alt="" className={cn(faceItems, faceItem2)} />
          <img src={face3} alt="" className={cn(faceItems, faceItem3)} />
          <img src={face4} alt="" className={cn(faceItems, faceItem4)} />
          <img src={face5} alt="" className={cn(faceItems, faceItem5)} />
          <img src={face6} alt="" className={cn(faceItems, faceItem6)} />
          <img src={face7} alt="" className={cn(faceItems, faceItem7)} />
        </div>
        <div className={arrows}>
          <img src={arrowLeftIcon} alt="" className={arrowLeft} />
          <img src={arrowRightIcon} alt="" className={arrowRight} />
        </div>
      </div>
    </section>
  );
};

Testimonials.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired
};

export default Testimonials;
