import React from "react";
import propTypes from "prop-types";

const ImageComponent = ({ imageName, imageAlt, imageClassName, handleClick }) => {
  return (
    <img
      alt={imageAlt || imageName}
      className={imageClassName}
      src={require(`../../assets/images/${imageName}`)}
      onClick={handleClick}
    />
  );
};

ImageComponent.propTypes = {
  imageName: propTypes.string.isRequired,
  imageAlt: propTypes.string,
  imageClassName: propTypes.string
};

ImageComponent.defaultProps = {
  imageAlt: "",
  imageClassName: "default-image-class"
};

export default ImageComponent;
