import React from 'react';
// component
import NavBar from 'components/NavBar/NavBar';
// image
import scrollIcon from 'image/scroll.svg';
import arrowCircle from 'image/arrow-circle.svg';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);
const {
  header,
  headerContent,
  pink,
  headerTitle,
  headerSubtitle,
  headerScroll,
  scrollImage,
  subheader,
  subImage
} = styles;

const Header = () => {
  return (
    <div className={cn('container', header)}>
      <NavBar isWhite />
      <div className={headerContent}>
        <span className={headerTitle}>
          <span className={headerSubtitle}>What we do?</span>
          We grow
          <span className={pink}>great business</span>
        </span>
        <div className={headerScroll}>
          Scroll to see more
          <img src={scrollIcon} alt="" className={scrollImage} />
        </div>
      </div>
      <div className={subheader}>
        Velit laoreet id donec ultrices. Ut lectus arcu bibendum varius.
        <img src={arrowCircle} alt="" className={subImage} />
      </div>
    </div>
  );
};

export default Header;
