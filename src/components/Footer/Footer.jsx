import React from 'react';
// image
import mailIcon from 'image/mail.svg';
import phoneIcon from 'image/phone.min.svg';
import twitterIcon from 'image/social/twitter.svg';
import facebookIcon from 'image/social/facebook.svg';
import mediumIcon from 'image/social/medium.svg';
import instagramIcon from 'image/social/instagram.svg';
import youtubeIcon from 'image/social/youtube.svg';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const currentYear = new Date().getFullYear();
const cn = classNames.bind(styles);
const {
  footer,
  footerContainer,
  logo,
  menu,
  services,
  contact,
  follow,
  blockTitle,
  blockContent,
  blockItem,
  logoTitle,
  logoSubTitle,
  contactItem,
  contactIcon,
  socialMedia,
  note
} = styles;

const Footer = () => {
  return (
    <footer className={cn('block', footer)}>
      <div className={cn('container', footerContainer)}>
        <div className={logo}>
          <span className={logoTitle}>Lopper</span>
          <span className={logoSubTitle}>Eu augue ut lectus arcu bibendum at.</span>
        </div>
        <div className={menu}>
          <span className={blockTitle}>menu</span>
          <ul className={blockContent}>
            <li className={blockItem}>
              <a href="/">Home</a>
            </li>
            <li className={blockItem}>
              <a href="/">About</a>
            </li>
            <li className={blockItem}>
              <a href="/">Services</a>
            </li>
            <li className={blockItem}>
              <a href="/">News</a>
            </li>
            <li className={blockItem}>
              <a href="/">Gallery</a>
            </li>
            <li className={blockItem}>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className={services}>
          <span className={blockTitle}>services</span>
          <ul className={blockContent}>
            <li className={blockItem}>
              <a href="/">Lorem</a>
            </li>
            <li className={blockItem}>
              <a href="/">Ipsum</a>
            </li>
            <li className={blockItem}>
              <a href="/">Dolor</a>
            </li>
            <li className={blockItem}>
              <a href="/">Sit Amet</a>
            </li>
          </ul>
        </div>
        <div className={contact}>
          <span className={blockTitle}>contact</span>
          <ul className={blockContent}>
            <li className={contactItem}>
              <div className={contactIcon}>
                <img src={mailIcon} alt="" />
              </div>
              <span>contact@lop.com</span>
            </li>
            <li className={contactItem}>
              <div className={contactIcon}>
                <img src={phoneIcon} alt="" />
              </div>
              <span>856 - 693 - 456</span>
            </li>
          </ul>
        </div>
        <div className={follow}>
          <span className={blockTitle}>follow</span>
          <ul className={socialMedia}>
            <li>
              <a href="/">
                <img src={twitterIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={facebookIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={instagramIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={youtubeIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={mediumIcon} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className={note}>
          {`© ${currentYear} Lopper by mariuszdaniel. All right reserved.`}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
