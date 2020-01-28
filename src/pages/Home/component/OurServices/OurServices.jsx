import React from 'react';
// component
import Intro from 'components/Intro/Intro';
import Service from 'components/Services/Service';
// image
import homeMan from 'image/home-man.png';
// styles
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);

const title = 'Our services';
const subTitle = 'What we can do?';

const OurServices = ({ services }) => {
  return (
    <section className={cn('block', 'ourServices')}>
      <Intro subTitle={subTitle} title={title} />
      <Service services={services} />
      <div className={cn('container', 'quote')}>
        <div className={cn('quoteContent')}>
          <span className={cn('quoteText')}>
            “Apparently we had reached a great height in the atmosphere, for the sky was a dead
            black, and the stars had ceased to twinkle.”
          </span>
        </div>
        <div className={cn('quoteMan')}>
          <img src={homeMan} alt="" className={cn('quoteImage')} />
        </div>
        <span className={cn('quotePerson')}>
          <span className={cn('personName')}>Andrew Slomka</span>
          <span className={cn('personCompany')}>Some Company</span>
        </span>
      </div>
    </section>
  );
};

OurServices.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default OurServices;
