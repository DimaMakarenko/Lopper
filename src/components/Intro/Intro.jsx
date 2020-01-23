import React from 'react';
// proptypes
import PropTypes from 'prop-types';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);
const { introTitle, introSubTitle, introText, introSmallText, intro } = styles;

const Intro = ({ text, subTitle, title, smallText, position, isWhite }) => {
  return (
    <div className={cn('container', intro, position, { isWhite })}>
      <span className={introSubTitle}>{subTitle}</span>
      {title && <h2 className={introTitle}>{title}</h2>}
      {text && <span className={cn(introText, smallText && { introSmallText })}>{text}</span>}
    </div>
  );
};
Intro.propTypes = {
  text: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
};
export default Intro;