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

const OurTeam = () => {
  return (
    <section className={cn('ourTeam')}>
      <div className={cn('container', 'items')}>
        <div className={cn('item')}>
          <img src={avatar2} alt="" className={cn('avatar')} />
        </div>
        <div className={cn('item')}>
          <img src={avatar3} alt="" className={cn('avatar')} />
        </div>
        <div className={cn('item')}>
          <img src={avatar4} alt="" className={cn('avatar')} />
        </div>
        <div className={cn('item')}>
          <div className={cn('comment')}>
            <span className={cn('names')}>Klara Ipsum</span>
            <span className={cn('profession')}> Designer</span>
            <p className={cn('text')}>
              By the same illusion which lifts the horizon of the sea to the level of the spectator
              on a hillside.
            </p>
            <span className={cn('email')}>klara@lopper.com</span>
            <span>
              <img src={avatarMini} alt="" className={cn('commentImage')} />
            </span>
          </div>
        </div>
        <div className={cn('item')}>
          <img src={avatar5} alt="" className={cn('avatar')} />
        </div>
        <div className={cn('item')}>
          <img src={avatar6} alt="" className={cn('avatar')} />
        </div>
      </div>
    </section>
  );
};
export default OurTeam;
