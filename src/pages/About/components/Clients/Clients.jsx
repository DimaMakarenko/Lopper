import React from 'react';
// components
import Business from 'components/Clients/Business';
import Logos from 'components/Clients/Logos';
import Intro from 'components/Intro/Intro';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);

// intro
const title = 'What we  do more than you can \n imagine, belive us.';
const subTitle = 'What we do';

const Clients = () => {
  return (
    <section className={cn('clientsContainer')}>
      <Intro subTitle={subTitle} title={title} colorText="white" />
      <div className={cn('container', 'clients')}>
        <div className={cn('business')}>
          <Business titleColor="white" />
        </div>
        <div className={cn('logos')}>
          <Logos color="white" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
