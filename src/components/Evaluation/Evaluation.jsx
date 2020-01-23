import React, { useState } from 'react';
// proptypes
import PropTypes from 'prop-types';
// image
import reactIcon from 'image/react.svg';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);
const { items, item, itemTitle, itemText, active } = styles;
const EVALUATE = ['Research', 'Marketing', 'Results'];

const Evaluation = ({ bgColor, showNumber }) => {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <section className={cn(bgColor)}>
      <div className={cn('container', items)}>
        {EVALUATE.map((elem, index) => (
          <div
            className={cn({ item }, activeItem === index && { active })}
            key={elem}
            onClick={() => setActiveItem(index)}
          >
            <img src={reactIcon} alt="" />
            <span className={itemTitle}>{elem}</span>
            <span className={itemText}>
              Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat
              pretium nibh ipsum consequat nisl vel pretium.
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

Evaluation.propTypes = {
  bgColor: PropTypes.string.isRequired,
  showNumber: PropTypes.bool.isRequired
};

export default Evaluation;

/*
 <div className={item}>
          <img src={reactIcon} alt="" />
          <span className={itemTitle}>Research</span>
          <span className={itemText}>
            Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat
            pretium nibh ipsum consequat nisl vel pretium.
          </span>
        </div>
        <div className={item}>
          <img src={reactIcon} alt="" />
          <span className={itemTitle}>Marketing</span>
          <span className={itemText}>
            Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat
            pretium nibh ipsum consequat nisl vel pretium.
          </span>
        </div>
        <div className={item}>
          <img src={reactIcon} alt="" />
          <span className={itemTitle}>Results</span>
          <span className={itemText}>
            Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat
            pretium nibh ipsum consequat nisl vel pretium.
          </span>
        </div>
 */
