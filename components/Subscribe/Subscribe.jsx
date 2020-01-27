import React from 'react';
// image
import arrowRightIcon from 'image/arrow-right.png';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);

const Subscribe = () => {
  return (
    <section className={cn('container block', 'subscribe')}>
      <h2 className={cn('title')}>Subscribe to our newsletter</h2>
      <span className={cn('subTitle')}>Cras pulvinar mattis nunc sed blandit.</span>
      <form className={cn('form')}>
        <input type="text" placeholder="Enter email" className={cn('formInput')} />
        <span className={cn('formBtn')}>
          Subscribe
          <img src={arrowRightIcon} alt="" className={cn('formImage')} />
        </span>
      </form>
    </section>
  );
};

export default Subscribe;
