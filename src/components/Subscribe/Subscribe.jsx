import React from 'react';
// image
import arrowRightIcon from 'image/arrow-right.png';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);

const Subscribe = ({ mySubRef }) => {
  const myRef = React.createRef();

  const handleFocus = () => {
    if (!myRef.current.value) {
      myRef.current.focus();
    }
  };
  return (
    <section className={cn('container block', 'subscribe')} ref={mySubRef}>
      <h2 className={cn('title')}>Subscribe to our newsletter</h2>
      <p className={cn('subTitle')}>Cras pulvinar mattis nunc sed blandit.</p>
      <form className={cn('form')}>
        <input type="text" placeholder="Enter email" className={cn('formInput')} ref={myRef} />
        <span className={cn('formBtn')} onClick={handleFocus}>
          Subscribe
          <span className={cn('formImageContainer')}>
            <img src={arrowRightIcon} alt="" className={cn('formImage')} />
          </span>
        </span>
      </form>
    </section>
  );
};

export default Subscribe;
