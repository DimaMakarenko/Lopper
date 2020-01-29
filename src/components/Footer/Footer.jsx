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

const Footer = () => {
  return (
    <footer className={cn('block', 'footer')}>
      <div className={cn('container', 'footerContainer')}>
        <div className={cn('logo')}>
          <h2 className={cn('logo Title')}>Lopper</h2>
          <p className={cn('logoSubTitle')}>Eu augue ut lectus arcu bibendum at.</p>
        </div>
        <div className={cn('menu')}>
          <span className={cn('blockTitle')}>menu</span>
          <ul className={cn('blockContent')}>
            <li className={cn('blockItem')}>
              <a href="/">Home</a>
            </li>
            <li className={cn('blockItem')}>
              <a href="/">About</a>
            </li>
            <li className={cn('blockItem')}>
              <a href="/">Services</a>
            </li>
            <li className={cn('blockItem')}>
              <a href="/">News</a>
            </li>
            <li className={cn('blockItem')}>
              <a href="/">Gallery</a>
            </li>
            <li className={cn('blockItem')}>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className={cn('services')}>
          <span className={cn('blockTitle')}>services</span>
          <ul className={cn('blockContent')}>
            <li className={cn('blockItem')}>
              <a href="/">Lorem</a>
            </li>
            <li className={cn('blockItem')}>
              <a href="/">Ipsum</a>
            </li>
            <li className={cn('blockItem')}>
              <a href="/">Dolor</a>
            </li>
            <li className={cn('blockItem')}>
              <a href="/">Sit Amet</a>
            </li>
          </ul>
        </div>
        <div className={cn('contact')}>
          <span className={cn('blockTitle')}>contact</span>
          <ul className={cn('blockContent')}>
            <li className={cn('contactItem')}>
              <div className={cn('contactIcon')}>
                <img src={mailIcon} alt="" />
              </div>
              <span>
                <a href="mailto:contact@lop.com">contact@lop.com</a>
              </span>
            </li>
            <li className={cn('contactItem')}>
              <div className={cn('contactIcon')}>
                <img src={phoneIcon} alt="" />
              </div>
              <span>
                <a href="tel:01-666-693-456">01 - 856 - 693 - 456</a>
              </span>
            </li>
          </ul>
        </div>
        <div className={cn('follow')}>
          <span className={cn('blockTitle')}>follow</span>
          <ul className={cn('socialMedia')}>
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
        <p className={cn('note')}>
          {`© ${currentYear} Lopper by mariuszdaniel. All right reserved.`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
