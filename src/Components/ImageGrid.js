// src/ImageGrid.js
import React from 'react';
import Gallery from 'react-photo-gallery';
import './css/ImageGrid.css'

const photos = [
  {
    src: 'https://via.placeholder.com/200x150',
    width: 3,
    height: 3,
  },
  {
    src: 'https://via.placeholder.com/300x200',
    width: 4,
    height: 2,
  },
  {
    src: 'https://via.placeholder.com/250x300',
    width: 4,
    height: 6,
  },
  // Add more photo objects as needed
];

const ImageGrid = () => {
  return (
  <div className="imageGrid-container">
  <Gallery photos={photos} />
  </div>
  );
};

export default ImageGrid;
