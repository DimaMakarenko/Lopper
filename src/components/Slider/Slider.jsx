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

  const nextSlide = () => {
    return currentSlide === data.length - 1
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  };
  const prevSlide = () => {
    return currentSlide === 0
      ? setCurrentSlide(data.length - 1)
      : setCurrentSlide(currentSlide - 1);
  };
  return (
    <>
      <Component {...USERS[currentSlide]} className={cn('slide')} />
      <div className={cn('arrows')}>
        <span onClick={prevSlide}>
          <img src={arrowLeftIcon} alt="" className={cn('arrowLeft')} />
        </span>
        <span onClick={nextSlide}>
          <img src={arrowRightIcon} alt="" className={cn('arrowRight')} />
        </span>
      </div>
    </>
  );
};

export default Slider;

/*
{data.map((item, index) => (
        <Fragment key={index}>
          {currentSlide === index && (
            <>
              <Component {...item} />
            </>
          )}
        </Fragment>
      ))}
 */
