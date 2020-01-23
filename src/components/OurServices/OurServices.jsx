import React from 'react';
// prop-types
import PropTypes from 'prop-types';
// component
import Intro from 'components/Intro/Intro';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);

const {
  serviceItems,
  ourServices,
  serviceItem,
  serviceImg,
  serviceTitle,
  serviceText,
  white
} = styles;

// intro
const title = 'Our services';
const subTitle = 'What we do';
const text =
  'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.';

const OurServices = ({ services }) => {
  return (
    <section className={cn('block', ourServices)}>
      <Intro subTitle={subTitle} text={text} isWhite position="center" title={title} />
      <div className={cn('container', serviceItems)}>
        {services.map(({ image, title, text, style }, index) => (
          <div className={serviceItem} key={index}>
            <img src={image} alt="" className={serviceImg} />
            <span className={cn(serviceTitle, style)}>{title}</span>
            <span className={cn(serviceText, style && white)}>{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

OurServices.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object)
};
export default OurServices;
