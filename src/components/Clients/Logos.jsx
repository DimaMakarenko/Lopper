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
// TODO is WHite
const Logos = ({ color }) => {
  return (
    <div className={cn('logos')}>
      <span className={cn('logosTitle', color)}>Our clients</span>
      <span className={cn('logosItems')}>
        {color !== 'default' ? (
          <>
            <span>
              <img src={codePenWhite} alt="" className={cn('logosImage')} />
            </span>
            <span>
              <img src={dribleWhite} alt="" className={cn('logosImage')} />
            </span>
            <span>
              <img src={dribleWhite} alt="" className={cn('logosImage')} />
            </span>
            <span>
              <img src={codePenWhite} alt="" className={cn('logosImage')} />
            </span>
            <span>
              <img src={codePenWhite} alt="" className={cn('logosImage')} />
            </span>
            <span>
              <img src={dribleWhite} alt="" className={cn('logosImage')} />
            </span>
          </>
        ) : (
          <>
            <span>
              <img src={codePentColor} alt="" className={cn('logosImage')} />
            </span>
            <span>
              <img src={dribleColor} alt="" className={cn('logosImage')} />
            </span>
            <span>
              <img src={dribleColor} alt="" className={cn('logosImage')} />
            </span>
            <span>
              <img src={codePentColor} alt="" className={cn('logosImage')} />
            </span>
            <span>
              <img src={codePentColor} alt="" className={cn('logosImage')} />
            </span>
            <span>
              <img src={dribleColor} alt="" className={cn('logosImage')} />
            </span>
          </>
        )}
      </span>
    </div>
  );
};

export default Logos;
