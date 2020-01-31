import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
// proptypes
import PropTypes from 'prop-types';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);

const Intro = ({ text, subTitle, title, smallText, position, colorText }) => {
  return (
    <ScrollAnimation animateIn="fadeIn" delay={300} animateOnce>
      <div className={cn('container', 'intro', position, colorText)}>
        <span className={cn('introSubTitle')}>{subTitle}</span>
        {title && <h2 className={cn('introTitle')}>{title}</h2>}
        {text && <p className={cn('introText', smallText && 'introSmallText')}>{text}</p>}
      </div>
    </ScrollAnimation>
  );
};
Intro.propTypes = {
  subTitle: PropTypes.string.isRequired
};
export default Intro;
