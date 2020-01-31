import React from 'react';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);

const Slide = ({ name, company, comment, image }) => {
  return (
    <div className={cn('slide')}>
      <div className={cn('avatar')}>
        <img src={image} alt="" className={cn('mainAvatar')} />
      </div>
      <p className={cn('testimonialText')}>{comment}</p>
      <div className={cn('testimonialUser')}>
        <span className={cn('testimonialName')}>{name}</span>
        <span className={cn('testimonialCompany')}>{company}</span>
      </div>
    </div>
  );
};

export default Slide;
