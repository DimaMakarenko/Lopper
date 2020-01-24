import React from 'react';
// proptypes
import PropTypes from 'prop-types';
// component
import NavBar from 'components/NavBar/NavBar';
import Title from './component/Title/Title';
import Image from './component/Image/Image';
// styles
// import classNames from 'classnames/bind';
// import styles from './styles.module.scss';

const Header = ({ title, image, isWhite = true }) => {
  return (
    <header className="header">
      <NavBar isWhite={false} />
      <Image image={image}>
        <Title title={title} isWhite={isWhite} />
      </Image>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};
export default Header;
