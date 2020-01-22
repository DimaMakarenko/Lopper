import React from 'react';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);
const { footer, footerContainer, logo, menu, services, contact, follow } = styles;

const Footer = () => {
  return (
    <footer className={footer}>
      <div className={cn('container', footerContainer)}>
        <div className={logo}>logo</div>
        <div className={menu}>menu</div>
        <div className={services}>services</div>
        <div className={contact}>contact</div>
        <div className={follow}>follow</div>
      </div>
    </footer>
  );
};

export default Footer;
