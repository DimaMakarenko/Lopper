import React from 'react';
// component
import Intro from 'components/Intro/Intro';
import Service from 'components/Services/Service';
// styles
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);

const title = 'Our services';
const subTitle = 'What we do';
const text =
  'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.';

const OurServices = ({ services }) => {
  return (
    <section className={cn('block', 'ourServices')}>
      <Intro subTitle={subTitle} text={text} isWhite position="center" title={title} />
      <Service services={services} />
    </section>
  );
};

OurServices.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default OurServices;
