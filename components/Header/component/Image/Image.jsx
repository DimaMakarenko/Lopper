import React from 'react';
import PropTypes from 'prop-types';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);

const { headerImage, imageContainer, noImage } = styles;

const Image = ({ image, children }) => {
  return (
    <div className={imageContainer}>
      {image ? (
        <>
          <img src={image} alt="" className={headerImage} />
          {children}
        </>
      ) : (
        <div className={cn('container', noImage)}>{children}</div>
      )}
    </div>
  );
};

Image.propTypes = {
  children: PropTypes.element.isRequired
};

export default Image;
