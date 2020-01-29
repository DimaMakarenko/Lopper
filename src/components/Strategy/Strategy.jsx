import React from 'react';
// components
import Intro from 'components/Intro/Intro';
// image
import strategyImage1 from 'image/strategy/strategy1.png';
import strategyImage2 from 'image/strategy/strategy2.png';
import strategyImage3 from 'image/strategy/strategy3.png';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);
// intro
const title = 'What we  do';
const text =
  'Upper prior hundred links approach reedy, was to the than and the ever somehow surprised known for every by of there until road, ';

const Strategy = () => {
  return (
    <section className={cn('block')}>
      <Intro subTitle={title} title={title} text={text} position="center" />
      <div className={cn('strategy')}>
        <div className={cn('items')}>
          <div className={cn('itemTextContainer')}>
            <span className={cn('textContainer', 'itemSubTitle', 'pinkText')}>01</span>
            <p className={cn('textContainer', 'itemTitle')}>
              Upper prior hundred links approach reedy
            </p>
            <p className={cn('textContainer', 'itemText')}>
              Upper prior hundred links approach reedy, was to the than and the ever somehow
              surprised known for every by of there until road,
            </p>
          </div>
          <div className={cn('itemImageContainer', 'pinkElement', 'leftImage')}>
            <img src={strategyImage1} alt="" className={cn('itemImage')} />
          </div>
          <div className={cn('itemImageContainer', 'greenElement', 'rightImage')}>
            <img src={strategyImage2} alt="" className={cn('itemImage')} />
          </div>
          <div className={cn('itemTextContainer')}>
            <span className={cn('textContainer', 'itemSubTitle', 'greenText')}>02</span>
            <p className={cn('textContainer', 'itemTitle')}>
              Upper prior hundred links approach reedy
            </p>
            <p className={cn('textContainer', 'itemText')}>
              Upper prior hundred links approach reedy, was to the than and the ever somehow
              surprised known for every by of there until road,
            </p>
          </div>
          <div className={cn('itemTextContainer')}>
            <span className={cn('textContainer', 'itemSubTitle', 'purpleText')}>03</span>
            <p className={cn('textContainer', 'itemTitle')}>
              Upper prior hundred links approach reedy
            </p>
            <p className={cn('textContainer', 'itemText')}>
              Upper prior hundred links approach reedy, was to the than and the ever somehow
              surprised known for every by of there until road,
            </p>
          </div>
          <div className={cn('itemImageContainer', 'purpleElement', 'leftImage')}>
            <img src={strategyImage3} alt="" className={cn('itemImage')} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
