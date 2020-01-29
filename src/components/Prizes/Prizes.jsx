import React from 'react';
// components
import Intro from 'components/Intro/Intro';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);

// intro
const subTitle = 'What we do';
const text =
  'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.';

const Prizes = () => {
  return (
    <section className={cn('block')}>
      <div className={cn('container')}>
        <Intro subTitle={subTitle} text={text} position="center" />
        <div className={cn('prizes')}>
          <div className={cn('prizeItem', 'pink')}>
            15+
            <span className={cn('prizeName')}>Nobel prizes</span>
          </div>
          <div className={cn('prizeItem', 'purple')}>
            33
            <span className={cn('prizeName')}>Nobel prizes</span>
          </div>
          <div className={cn('prizeItem', 'green')}>
            12
            <span className={cn('prizeName')}>Nobel prizes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
