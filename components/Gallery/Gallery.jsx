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
const {
  gallery,
  galleryList,
  image1,
  image2,
  image3,
  image4,
  image5,
  blocks,
  lines,
  images,
  galleryText,
  galleryTitle
} = styles;

const Gallery = () => {
  return (
    <section className={gallery}>
      <div className={galleryList}>
        <div className={lines}>
          <div className={blocks}>
            <div className={galleryText}>
              <span className={galleryTitle}>Photo name</span>
              Etiam dignissim diam quis enim lobortis.
            </div>
            <img src={galleryImage1} alt="" className={cn(images, image1)} />
          </div>
          <div className={blocks}>
            <div className={galleryText}>
              <span className={galleryTitle}>Photo name</span>
              Etiam dignissim diam quis enim lobortis.
            </div>
            <img src={galleryImage2} alt="" className={cn(images, image2)} />
          </div>
        </div>
        <div className={lines}>
          <div className={blocks}>
            <div className={galleryText}>
              <span className={galleryTitle}>Photo name</span>
              Etiam dignissim diam quis enim lobortis.
            </div>
          </div>
          <img src={galleryImage3} alt="" className={cn(images, image3)} />
        </div>
        <div className={lines}>
          <div className={blocks}>
            <div className={galleryText}>
              <span className={galleryTitle}>Photo name</span>
              Etiam dignissim diam quis enim lobortis.
            </div>
            <img src={galleryImage4} alt="" className={cn(images, image4)} />
          </div>
          <div className={blocks}>
            <div className={galleryText}>
              <span className={galleryTitle}>Photo name</span>
              Etiam dignissim diam quis enim lobortis.
            </div>
            <img src={galleryImage5} alt="" className={cn(images, image5)} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
