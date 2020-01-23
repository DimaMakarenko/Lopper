import React from 'react';
// image
import arrowRightIcon from 'image/arrow-right.png';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);
const { subscribe, title, subTitle, form, formBtn, formInput, formImage } = styles;

const Subscribe = () => {
  return (
    <section className={cn('container block', subscribe)}>
      <h2 className={title}>Subscribe to our newsletter</h2>
      <span className={subTitle}>Cras pulvinar mattis nunc sed blandit.</span>
      <form className={form}>
        <input type="text" placeholder="Enter email" className={formInput} />
        <span className={formBtn}>
          Subscribe
          <img src={arrowRightIcon} alt="" className={formImage} />
        </span>
      </form>
    </section>
  );
};

export default Subscribe;
