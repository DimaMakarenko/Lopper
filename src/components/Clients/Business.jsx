import React from 'react';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);

const Business = ({ titleColor }) => {
  return (
    <div className={cn('business')}>
      <span className={cn(titleColor, 'businessTitle')}>We build great business</span>
      <span className={cn('businessText')}>
        <span>
          Nisl condimentum id venenatis a. Nec tincidunt praesent semper feugiat nibh sed pulvinar
          proin gravida. Sollicitudin tempor id eu nisl nunc.
        </span>
        <span>
          Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Pretium
          vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae.
        </span>
        <span>
          Massa massa ultricies mi quis hendrerit dolor magna. Egestas dui id ornare arcu odio.
        </span>
      </span>
    </div>
  );
};

export default Business;
