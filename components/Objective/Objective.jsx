import React from 'react';
// component
import Intro from 'components/Intro/Intro';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);
// into
const subTitle = 'What we do';
const text =
  'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.';

const Objective = () => {
  return (
    <section className={cn('block')}>
      <div className={cn('container')}>
        <Intro subTitle={subTitle} text={text} />
        <div className={cn('objective')}>
          <div className={cn('item')}>
            <h4 className={cn('blockTitle')}>Our objectives</h4>
            <span>
              Amet consectetur adipiscing elit pellentesque habitant morbi. Fermentum et
              sollicitudin ac orci phasellus. Dolor sit amet consectetur adipiscing elit duis.
              Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit.
            </span>
          </div>
          <div className={cn('item')}>
            <h4 className={cn('blockTitle')}>Our story</h4>
            <span>
              Etiam dignissim diam quis enim lobortis. Egestas sed sed risus pretium quam vulputate
              dignissim. Eleifend quam adipiscing vitae proin sagittis. Pharetra pharetra massa
              massa ultricies. Elementum eu facilisis sed odio morbi. Morbi tincidunt augue interdum
              velit.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objective;
