import React from 'react';
// components
import Intro from 'components/Intro/Intro';
// image
import virtuesBgImage from 'image/virtues-bg.png';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);

// intro
const title = 'What we do';
const subTitle = 'What we do';

const Virtues = () => {
  return (
    <section className={cn('virtuesMain')}>
      <div className={cn('virtues')}>
        <div className={cn('container', 'virtuesContainer')}>
          <div className={cn('virtuesTitle')}>
            <Intro title={title} subTitle={subTitle} colorText="white" />
          </div>
          <div className={cn('virtuesContent')}>
            <div className={cn('contentLeft')}>
              <p className={cn('contentLeftText')}>We build great business</p>
            </div>
            <div className={cn('contentRight')}>
              <p className={cn('contentRightText')}>
                Id consectetur purus ut faucibus pulvinar elementum integer enim. A arcu cursus
                vitae congue mauris rhoncus aenean.
              </p>
            </div>
            <div className={cn('contentLeft')}>
              <p className={cn('contentLeftText')}>We build great business</p>
            </div>
            <div className={cn('contentRight')}>
              <p className={cn('contentRightText')}>
                Enim neque volutpat ac tincidunt vitae. Malesuada nunc vel risus commodo viverra
                maecenas accumsan lacus vel. Odio morbi quis commodo odio aenean sed adipiscing diam
                donec. Nisi vitae suscipit tellus mauris a.
              </p>
            </div>
            <div className={cn('contentLeft')}>
              <p className={cn('contentLeftText')}>We build great business</p>
            </div>
            <div className={cn('contentRight')}>
              <span className={cn('contentRightText')}>
                <p className={cn('contentRightText')}>
                  Id consectetur purus ut faucibus pulvinar elementum integer enim. A arcu cursus
                  vitae congue mauris rhoncus aenean.
                </p>
              </span>
            </div>
          </div>
        </div>
        <img src={virtuesBgImage} alt="" className={cn('virtuesBg')} />
      </div>
    </section>
  );
};

export default Virtues;
