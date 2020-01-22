import React from 'react';
// proptypes
import PropTypes from 'prop-types';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);
const { titleContainer, titleH, titleText, titleTextWhite } = styles;

const Title = ({ subTitle, title, isWhite }) => {
  return (
    <div className={cn('container', { titleContainer })}>
      <h1 className={titleH}>{title}</h1>
      <span className={cn(!isWhite && titleTextWhite, { titleText })}>{subTitle}</span>
    </div>
  );
};

Title.propTypes = {
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isWhite: PropTypes.bool.isRequired
};

export default Title;
