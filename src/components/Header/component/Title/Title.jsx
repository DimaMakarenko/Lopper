import React from 'react';
// proptypes
import PropTypes from 'prop-types';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);

const Title = ({ title, isWhite }) => {
  return (
    <div className={cn('container', 'titleContainer')}>
      <h1 className={cn('titleH')}>{title}</h1>
      <span className={cn(isWhite && 'titleTextWhite', 'titleText')}>We build great business</span>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  isWhite: PropTypes.bool.isRequired
};

export default Title;
