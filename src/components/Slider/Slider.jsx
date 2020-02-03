import React, { useState } from 'react';
// image
import arrowLeftIcon from 'image/arrow-left.png';
import arrowRightIcon from 'image/arrow-right.png';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { USERS } from '../Testimonials/USERS';

const cn = classNames.bind(styles);

const Slider = ({ data = [], component: Component }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const clickNextSlide = () => {
    return currentSlide === data.length - 1
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  };

  const clickPrevSlide = () => {
    return currentSlide === 0
      ? setCurrentSlide(data.length - 1)
      : setCurrentSlide(currentSlide - 1);
  };

  const getNumNextSlide = () => {
    return currentSlide === data.length - 1 ? 0 : currentSlide + 1;
  };
  const getNumPrevSlide = () => {
    return currentSlide === 0 ? data.length - 1 : currentSlide - 1;
  };
  return (
    <>
      <div className={cn('slider')}>
        <div className={cn('sliderWrapper')}>
          <Component {...USERS[getNumPrevSlide()]} className={cn('slide')} />
          <Component {...USERS[currentSlide]} className={cn('slide')} />
          <Component {...USERS[getNumNextSlide()]} className={cn('slide')} />
        </div>
      </div>

      <div className={cn('arrows')}>
        <span onClick={clickPrevSlide}>
          <img src={arrowLeftIcon} alt="" className={cn('arrowLeft')} />
        </span>
        <span onClick={clickNextSlide}>
          <img src={arrowRightIcon} alt="" className={cn('arrowRight')} />
        </span>
      </div>
    </>
  );
};

export default Slider;
