import React from 'react';
// component
import Intro from 'components/Intro/Intro';
// image
import featureImage1 from 'image/features/features1.png';
import featureImage2 from 'image/features/features2.png';
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);

// intro
const title = 'Shaping the future';
const subTitle = 'Benefits';
const text =
  'Eget nunc scelerisque viverra mauris in aliquam. Dignissim sodales ut eu sem integer vitae. Libero nunc consequat interdum varius.';

const Features = () => {
  return (
    <section className={cn('container')}>
      <div className={cn('features')}>
        <div className={cn('sides')}>
          <Intro title={title} subTitle={subTitle} text={text} smallText />
          <div className={cn('featuresText')}>
            <span>Magna sit amet purus gravida. Sit amet porttitor eget dolor morbi non.</span>
            <span>Lectus vestibulum mattis ullamcorper velit sed ullamcorper.</span>
            <span>
              Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Dui faucibus in
              ornare quam viverr
            </span>
            <span>Posuere ac ut consequat semper viverra.</span>
          </div>
          <button className={cn('featuresBtn')} type="button">
            Learn more
          </button>
        </div>
        <div className={cn('sides')}>
          <img src={featureImage1} alt="" className={cn('image1')} />
          <img src={featureImage2} alt="" className={cn('image2')} />
        </div>
      </div>
    </section>
  );
};

export default Features;
