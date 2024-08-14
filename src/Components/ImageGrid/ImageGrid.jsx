import React from "react";
import "../ImageGrid/ImageGrid.css";

const images = [
  { src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg" },
  { src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg" },
  { src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg" },
  { src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg" },
  { src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg" },
  { src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg" },
  { src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg" },
  { src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg" },
  { src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg" },
];

const ImageGrid = () => {
  return (
    <div className="image-gallery-container">
      <div className="image-gallery">
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={`Gallery Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
