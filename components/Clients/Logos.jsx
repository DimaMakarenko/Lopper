import React from 'react';
// image
import codePenWhite from 'image/clients/white/codepen.png';
import dribleWhite from 'image/clients/white/drible.png';
import codePentColor from 'image/clients/color/codepen.png';
import dribleColor from 'image/clients/color/drible.png';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);
const { logos, logosTitle, logosItems } = styles;

const Logos = ({ isWhite }) => {
  return (
    <div className={logos}>
      <span className={logosTitle}>Our clients</span>
      <span className={logosItems}>
        {isWhite ? (
          <>
            <img src={codePenWhite} alt="" />
            <img src={dribleWhite} alt="" />
            <img src={dribleWhite} alt="" />
            <img src={codePenWhite} alt="" />
            <img src={codePenWhite} alt="" />
            <img src={dribleWhite} alt="" />
          </>
        ) : (
          <>
            <img src={codePentColor} alt="" />
            <img src={dribleColor} alt="" />
            <img src={dribleColor} alt="" />
            <img src={codePentColor} alt="" />
            <img src={codePentColor} alt="" />
            <img src={dribleColor} alt="" />
          </>
        )}
      </span>
    </div>
  );
};

export default Logos;
