import React from 'react';
// components
import NavBar from 'components/NavBar/NavBar';
// image
import scrollIcon from 'image/scroll.svg';
import arrowCircle from 'image/arrow-circle.svg';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);

const Header = ({ scrollTo }) => {
  return (
    <>
      <div className={cn('container', 'header')}>
        <NavBar colorText="white" />
        <div className={cn('headerContent')}>
          <p className={cn('headerTitle')}>
            <span className={cn('headerSubtitle')}>What we do?</span>
            We grow
            <span className={cn('pink')}>great business</span>
          </p>
          <div className={cn('headerScroll')} onClick={scrollTo}>
            Scroll to see more
            <img src={scrollIcon} alt="" className={cn('scrollImage')} />
          </div>
        </div>
      </div>
      <div className={cn('subContent')}>
        <div className={cn('container')}>
          <div className={cn('subheader')}>
            <p className={cn('subText')}>
              Velit laoreet id donec ultrices. Ut lectus arcu bibendum varius.
              <span>
                <img src={arrowCircle} alt="" className={cn('subImage')} />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
