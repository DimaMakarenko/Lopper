import React from 'react';
// image
import galleryImage1 from 'image/gallery/gallery1.png';
import galleryImage2 from 'image/gallery/gallery2.png';
import galleryImage3 from 'image/gallery/gallery3.png';
import galleryImage4 from 'image/gallery/gallery4.png';
import galleryImage5 from 'image/gallery/gallery5.png';
// styles
// styles
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cn = classNames.bind(styles);

const Gallery = () => {
  return (
    <section className={cn('gallery')}>
      <div className={cn('galleryList')}>
        <div className={cn('lines')}>
          <div className={cn('blocks')}>
            <div className={cn('galleryText')}>
              <h3 className={cn('galleryTitle')}>Photo name</h3>
              Etiam dignissim diam quis enim lobortis.
            </div>
            <span>
              <img src={galleryImage1} alt="" className={cn('images', 'image1', 'halfImage')} />
            </span>
          </div>
          <div className={cn('blocks')}>
            <div className={cn('galleryText')}>
              <h3 className={cn('galleryTitle')}>Photo name</h3>
              Etiam dignissim diam quis enim lobortis.
            </div>
            <span>
              <img src={galleryImage2} alt="" className={cn('images', 'image2', 'halfImage')} />
            </span>
          </div>
        </div>
        <div className={cn('lines', 'fullBlock')}>
          <div className={cn('blocks')}>
            <div className={cn('galleryText')}>
              <h3 className={cn('galleryTitle')}>Photo name</h3>
              Etiam dignissim diam quis enim lobortis.
            </div>
          </div>
          <img src={galleryImage3} alt="" className={cn('images', 'image3')} />
        </div>
        <div className={cn('lines')}>
          <div className={cn('blocks')}>
            <div className={cn('galleryText')}>
              <h3 className={cn('galleryTitle')}>Photo name</h3>
              Etiam dignissim diam quis enim lobortis.
            </div>
            <span>
              <img src={galleryImage4} alt="" className={cn('images', 'image4', 'halfImage')} />
            </span>
          </div>
          <div className={cn('blocks')}>
            <div className={cn('galleryText')}>
              <h3 className={cn('galleryTitle')}>Photo name</h3>
              Etiam dignissim diam quis enim lobortis.
            </div>
            <span>
              <img src={galleryImage5} alt="" className={cn('images', 'image5', 'halfImage')} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
