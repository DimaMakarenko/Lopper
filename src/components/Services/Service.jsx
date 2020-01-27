import React from 'react';
// prop-types
import PropTypes from 'prop-types';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);

// intro

const Service = ({ services }) => {
  return (
    <div className={cn('container', 'serviceItems')}>
      {services.map(({ image, title, text, style }, index) => (
        <div className={cn('serviceItem')} key={index}>
          <img src={image} alt="" className={cn('serviceImg')} />
          <span className={cn('serviceTitle', style)}>{title}</span>
          <span className={cn('serviceText', style && 'white')}>{text}</span>
        </div>
      ))}
    </div>
  );
};

Service.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default Service;
