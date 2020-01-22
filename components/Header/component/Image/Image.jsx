import React from 'react';
import PropTypes from 'prop-types';
// styles
import styles from './styles.module.scss';

const { headerImage, imageContainer } = styles;

const Image = ({ image, children }) => {
  return (
    <div className={imageContainer}>
      <img src={image} alt="" className={headerImage} />
      {children}
    </div>
  );
};

Image.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default Image;
