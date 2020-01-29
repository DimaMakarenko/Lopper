import React, { useState } from 'react';
// proptypes
import PropTypes from 'prop-types';
// components
import Intro from 'components/Intro/Intro';
// image
import reactIcon from 'image/react.svg';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);
const EVALUATE = ['Research', 'Marketing', 'Results'];

// intro
const subTitle = 'What we do';
const text =
  'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.';

const Evaluation = ({ bgColor }) => {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <section className={cn('block', bgColor)}>
      <Intro subTitle={subTitle} text={text} colorText="white" />
      <div className={cn('container', 'items')}>
        {EVALUATE.map((elem, index) => (
          <div
            className={cn('item', activeItem === index && 'active')}
            key={elem}
            onClick={() => setActiveItem(index)}
          >
            <img src={reactIcon} alt="" className={cn('itemImage')} />
            <span className={cn('itemTitle')}>{elem}</span>
            <p className={cn('itemText')}>
              Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat
              pretium nibh ipsum consequat nisl vel pretium.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

Evaluation.propTypes = {
  bgColor: PropTypes.string.isRequired
};

export default Evaluation;
