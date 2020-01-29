import React from 'react';
// proptypes
import PropTypes from 'prop-types';
// components
import NavBar from 'components/NavBar/NavBar';
import Title from './component/Title/Title';
import Image from './component/Image/Image';

const Header = ({ title, image, colorText }) => {
  return (
    <header>
      <NavBar colorText="black" />
      <Image image={image}>
        <Title title={title} colorText={colorText} />
      </Image>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};
export default Header;
