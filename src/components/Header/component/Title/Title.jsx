import React from 'react';
// proptypes
import PropTypes from 'prop-types';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);

const Title = ({ title, colorText }) => {
  return (
    <div className={cn('container', 'titleContainer')}>
      <h1 className={cn('titleH')}>{title}</h1>
      <p className={cn(colorText,  'titleText')}>We build great business</p>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  colorText: PropTypes.oneOf(['black'])
};

export default Title;
