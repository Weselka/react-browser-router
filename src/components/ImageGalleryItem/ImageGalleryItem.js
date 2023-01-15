import PropTypes from 'prop-types';
// import { useState } from 'react';
import { ImageGalleryLi, ImageGalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image }) => {

  return (
    <ImageGalleryLi key={image.id}>
      <ImageGalleryImage
        src={image.webformatURL}
        alt={image.tags}
        width="240"
        loading="lazy"
      ></ImageGalleryImage>
    </ImageGalleryLi>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};