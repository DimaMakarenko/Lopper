import React from 'react';
// component
import Business from 'components/Clients/Business';
import Logos from 'components/Clients/Logos';
import Intro from 'components/Intro/Intro';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);
const { clients, business } = styles;

// intro
const title = 'What we  do more than you can \n imagine, belive us.';
const subTitle = 'What we do';

const Clients = () => {
  return (
    <section>
      <Intro subTitle={subTitle} title={title} />
      <div className={cn('container', clients)}>
        <div className={business}>
          <Business titleColor="pink" />
        </div>
        <Logos isWhite={false} />
      </div>
    </section>
  );
};

export default Clients;
