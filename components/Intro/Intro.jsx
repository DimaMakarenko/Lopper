import React from 'react';
// proptypes
import PropTypes from 'prop-types';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);
const { introTitle, introSubTitle, introText, introSmallText, intro } = styles;

const Intro = ({ text, subTitle, title, smallText, position }) => {
  return (
    <div className={cn('container', intro, position)}>
      <span className={introSubTitle}>{subTitle}</span>
      {title && <h2 className={introTitle}>{title}</h2>}
      {text && <span className={cn(introText, smallText && { introSmallText })}>{text}</span>}
    </div>
  );
};
Intro.prototype = {
  text: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
};
export default Intro;
