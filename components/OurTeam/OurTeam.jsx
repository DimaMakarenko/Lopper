import React from 'react';
// image
import avatar2 from 'image/avatars/avatar2.png';
import avatar3 from 'image/avatars/avatar3.png';
import avatar4 from 'image/avatars/avatar4.png';
import avatar5 from 'image/avatars/avatar5.png';
import avatar6 from 'image/avatars/avatar6.png';
import avatarMini from 'image/avatars/avatar.mini.png';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);
const {
  ourTeam,
  items,
  item,
  comment,
  names,
  profession,
  text,
  email,
  avatar,
  commentImage
} = styles;

const OurTeam = () => {
  return (
    <section className={ourTeam}>
      <div className={cn('container', { items })}>
        <div className={item}>
          <img src={avatar2} alt="" className={avatar} />
        </div>
        <div className={item}>
          <img src={avatar3} alt="" className={avatar} />
        </div>
        <div className={item}>
          <img src={avatar4} alt="" className={avatar} />
        </div>
        <div className={item}>
          <div className={comment}>
            <span className={names}>Klara Ipsum</span>
            <span className={profession}> Designer</span>
            <span className={text}>
              By the same illusion which lifts the horizon of the sea to the level of the spectator
              on a hillside.
            </span>
            <span className={email}>klara@lopper.com</span>
            <img src={avatarMini} alt="" className={commentImage} />
          </div>
        </div>
        <div className={item}>
          <img src={avatar5} alt="" className={avatar} />
        </div>
        <div className={item}>
          <img src={avatar6} alt="" className={avatar} />
        </div>
      </div>
    </section>
  );
};
export default OurTeam;
