import React from 'react';
// component
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
            <Intro title={title} subTitle={subTitle} isWhite />
          </div>
          <div className={cn('virtuesContent')}>
            <div className={cn('contentLeft')}>
              <span className={cn('contentLeftText')}>We build great business</span>
            </div>
            <div className={cn('contentRight')}>
              <span className={cn('contentRightText')}>
                Id consectetur purus ut faucibus pulvinar elementum integer enim. A arcu cursus
                vitae congue mauris rhoncus aenean.
              </span>
            </div>
            <div className={cn('contentLeft')}>
              <span className={cn('contentLeftText')}>We build great business</span>
            </div>
            <div className={cn('contentRight')}>
              <span className={cn('contentRightText')}>
                Enim neque volutpat ac tincidunt vitae. Malesuada nunc vel risus commodo viverra
                maecenas accumsan lacus vel. Odio morbi quis commodo odio aenean sed adipiscing diam
                donec. Nisi vitae suscipit tellus mauris a.
              </span>
            </div>
            <div className={cn('contentLeft')}>
              <span className={cn('contentLeftText')}>We build great business</span>
            </div>
            <div className={cn('contentRight')}>
              <span className={cn('contentRightText')}>
                <span className={cn('contentRightText')}>
                  Id consectetur purus ut faucibus pulvinar elementum integer enim. A arcu cursus
                  vitae congue mauris rhoncus aenean.
                </span>
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
