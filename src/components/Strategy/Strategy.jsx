import React from 'react';
// component
import Intro from 'components/Intro/Intro';
// image
import strategyImage1 from 'image/strategy/strategy1.png';
import strategyImage2 from 'image/strategy/strategy2.png';
import strategyImage3 from 'image/strategy/strategy3.png';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);
const {
  strategy,
  items,
  item,
  itemSubtitle,
  itemTitle,
  itemText,
  itemRight,
  itemLeft,
  itemImage,
  itemContent
} = styles;
// intro
const title = 'What we  do';
const text =
  'Upper prior hundred links approach reedy, was to the than and the ever somehow surprised known for every by of there until road, ';

const Strategy = () => {
  return (
    <section className={cn('block')}>
      <Intro subTitle={title} title={title} text={text} position="center" />
      <div className={strategy}>
        <div className={cn(item, itemRight)}>
          <span className={itemSubtitle}>01</span>
          <span className={itemTitle}>Upper prior hundred links approach reedy</span>
          <span className={itemText}>
            Upper prior hundred links approach reedy, was to the than and the ever somehow surprised
            known for every by of there until road,
          </span>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
