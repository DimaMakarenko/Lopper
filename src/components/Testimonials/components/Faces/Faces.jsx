import React from 'react';
// image
import face1 from 'image/faces/face1.png';
import face2 from 'image/faces/face2.png';
import face3 from 'image/faces/face3.png';
import face4 from 'image/faces/face4.png';
import face5 from 'image/faces/face5.png';
import face6 from 'image/faces/face6.png';
import face7 from 'image/faces/face7.png';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);

const Faces = () => {
  return (
    <div className={cn('faces')}>
      <span>
        <img src={face1} alt="" className={cn('faceItems', 'faceItem1')} />
      </span>
      <span>
        <img src={face2} alt="" className={cn('faceItems', 'faceItem2')} />
      </span>
      <span>
        <img src={face3} alt="" className={cn('faceItems', 'faceItem3')} />
      </span>
      <span>
        <img src={face4} alt="" className={cn('faceItems', 'faceItem4')} />
      </span>
      <span>
        <img src={face5} alt="" className={cn('faceItems', 'faceItem5')} />
      </span>
      <span>
        <img src={face6} alt="" className={cn('faceItems', 'faceItem6')} />
      </span>
      <span>
        <img src={face7} alt="" className={cn('faceItems', 'faceItem7')} />
      </span>
    </div>
  );
};

export default Faces;
