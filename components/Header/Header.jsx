import React from 'react';
// proptypes
import PropTypes from 'prop-types';
// components
import NavBar from 'components/NavBar/NavBar';
import Title from './component/Title/Title';
import Image from './component/Image/Image';
// styles
// import classNames from 'classnames/bind';
// import styles from './styles.scss';

const Header = ({ subTitle, title, image }) => {
  return (
    <header className="header">
      <NavBar isWhite={false} />
      <Image image={image}>
        <Title title={title} subTitle={subTitle} isWhite={false} />
      </Image>
    </header>
  );
};

Header.propTypes = {
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
export default Header;
